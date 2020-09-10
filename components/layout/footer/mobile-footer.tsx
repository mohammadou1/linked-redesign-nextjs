import FeedIcon from '~/svgs/feed.svg';
import NetworkIcon from '~/svgs/network.svg';
import JobsIcon from '~/svgs/jobs.svg';
import NotificationsIcon from '~/svgs/notifications.svg';
import { useRouter } from 'next/router';
import { AnimationProps, AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';

const links = [
   {
      title: 'FEED',
      icon: <FeedIcon />,
      href: '/feed',
   },
   {
      title: 'NETWORK',
      icon: <NetworkIcon />,
      href: '/network',
   },

   {
      title: 'NOTICES',
      icon: <NotificationsIcon />,
      href: '/notices',
   },
   {
      title: 'JOBS',
      icon: <JobsIcon />,
      href: '/jobs',
   },
];

const spring: AnimationProps['transition'] = {
   type: 'spring',
   stiffness: 500,
   damping: 30,
};

const MobileFooter = () => {
   const router = useRouter();
   const currentPath = router.asPath;

   return (
      <footer className="bg-white sticky bottom-0 z-50">
         <nav className="flex justify-between">
            <AnimateSharedLayout>
               {links.map(link => (
                  <Link key={link.href} href={link.href}>
                     <a
                        className={`nav-link py-2 flex-grow flex flex-col items-center  ${
                           currentPath === link.href ? 'active' : ''
                        }`}>
                        <div className="nav-link__item transform sm:scale-100 scale-75">
                           <div className="relative">
                              {link.href === '/chat' && <div className="count-badge">1</div>}
                              {link.icon}
                           </div>
                           <span className="link-title">{link.title}</span>
                        </div>
                        {currentPath === link.href && (
                           <motion.div
                              layoutId="underline"
                              className="h-1 bg-primary w-full absolute bottom-0 left-0 right-0"
                              transition={spring}
                           />
                        )}
                     </a>
                  </Link>
               ))}
            </AnimateSharedLayout>
         </nav>
      </footer>
   );
};

export default MobileFooter;
