import useMedia from '~/hooks/useMedia';
import WebsiteFooter from './website-footer';
import MobileFooter from './mobile-footer';

const Footer = () => {
   const isSmallScreen = useMedia(1200);

   return !isSmallScreen ? <WebsiteFooter /> : <MobileFooter />;
};

export default Footer;
