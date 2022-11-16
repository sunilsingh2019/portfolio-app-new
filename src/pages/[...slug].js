import {GET_PAGES_URI} from '../queries/pages/get-pages';
import {isEmpty} from 'lodash';
import {GET_PAGE} from '../queries/pages/get-page';
import {useRouter} from 'next/router';
import client from '../apollo/client';
import {FALLBACK, handleRedirectsAndReturnData} from '../utils/slug';


const Pages = ( {data} ) => {
	console.log('data', data);

	const router = useRouter();

	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if ( router.isFallback ) {
		return <div>Loading...</div>;
	}

	return router?.query?.slug.join("/");
};

export default Pages;

export async function getStaticProps( {params} ) {
	const {data} = await client.query( {
		query: GET_PAGE,
		variables: {
			uri: params?.slug.join( '/' ),
		},
	} );

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
				},
				page: data?.page ?? {},
				path: params?.slug.join("/"),
			}
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const {data} = await client.query( {
		query: GET_PAGES_URI
		});

	const pathsData = [];

	data?.pages?.nodes && data?.pages?.nodes.map( page => {
		if ( ! isEmpty( page?.uri ) ) {
			const slugs = page?.uri?.split( '/' ).filter( pageSlug => pageSlug );
			pathsData.push( {params: {slug: slugs}} );
		}
	} );

	return {

		paths: pathsData,
		fallback: true
	};
}