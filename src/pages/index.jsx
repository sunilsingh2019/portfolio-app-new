import dynamic from 'next/dynamic';
import client from '../apollo/client';
import HomeMain from '../components/Home/HomeMain';
import SEO from '../components/seo';
import { GET_MENUS } from '../queries/get-menus';

const index = ({data}) => {
  return (
    <>
      <SEO data={data}/>
      <HomeMain data={data}/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});


export async function getStaticProps(context) {
  const {data, loading, networkStatus} = await client.query({
    query: GET_MENUS
  });
  return {
    props: {
      data: {
          menus: {
            headerMenus: data?.headerMenus?.edges || []
        },
        logo: {
          headerLogo: data?.headerLogo?.headerFieldGroup || []
        },
        siteHeader: {
          siteTitle: data?.siteTitle || []
        },
        favIcons: {
          favIcon: data?.favIcon || []
        },
        footerBottom: {
          footerDown: data?.footerDown?.footerBottomFieldGroup || []
        },
        footerTop: {
          footer: data?.footer?.footerFieldGroup || []
        }
      }
    },
    revalidate: 1
  }
}