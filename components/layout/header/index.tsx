import useMedia from '~/hooks/useMedia';
import WebsiteHeader from './website-header';
import MobileHeader from './mobile-header';
const Header = () => {
   const isSmallScreen = useMedia(1200);

   return !isSmallScreen ? <WebsiteHeader /> : <MobileHeader />;
};

export default Header;
