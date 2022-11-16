import WishlistMain from '../components/Wishlist';
import SEO from '../components/seo';

const wishlist = () => {
  return (
    <>
      <SEO pageTitle="Wishlist" />
      <WishlistMain/>
    </>
  );
};

export default wishlist;