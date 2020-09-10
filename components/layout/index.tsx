import { FC, Fragment } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./header'), { ssr: false });
const Footer = dynamic(() => import('./footer'), { ssr: false });

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                 MAIN LAYOUT                                */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

const Layout: FC = ({ children }) => {
   /* ------------------- Controlling navigation progress bar ------------------ */

   Router.events.on('routeChangeStart', () => NProgress.start());
   Router.events.on('routeChangeComplete', () => NProgress.done());
   Router.events.on('routeChangeError', () => NProgress.done());

   return (
      <Fragment>
         <Header />
         <main>
            <div className="container mx-auto px-4 py-5">{children}</div>
         </main>
         <Footer />
      </Fragment>
   );
};

export default Layout;
