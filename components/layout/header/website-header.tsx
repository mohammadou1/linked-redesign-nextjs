import Link from 'next/link';
import Logo from '~/svgs/logo.svg';
import FeedIcon from '~/svgs/feed.svg';
import NetworkIcon from '~/svgs/network.svg';
import JobsIcon from '~/svgs/jobs.svg';
import ChatIcon from '~/svgs/chat.svg';
import NotificationsIcon from '~/svgs/notifications.svg';
import MoreIcon from '~/svgs/more.svg';
import { useRouter } from 'next/router';
import { motion, AnimateSharedLayout, AnimationProps } from 'framer-motion';
import Searchbar from './searchbar';
import UserMenu from './user-menu';

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
      title: 'JOBS',
      icon: <JobsIcon />,
      href: '/jobs',
   },

   {
      title: 'CHAT',
      icon: <ChatIcon />,
      href: '/chat',
   },
   {
      title: 'NOTICES',
      icon: <NotificationsIcon />,
      href: '/notices',
   },
];

const spring: AnimationProps['transition'] = {
   type: 'spring',
   stiffness: 500,
   damping: 30,
};

const WebsiteHeader = () => {
   const router = useRouter();
   const currentPath = router.asPath;

   return (
      <header className="flex bg-white shadow-sm sticky z-50 top-0 header">
         <Link href="/feed">
            <a>
               <div className="px-8 py-4 border-r border-l border-gray-300 inline-flex">
                  <Logo />
               </div>
            </a>
         </Link>
         {/* Links list */}
         <AnimateSharedLayout>
            {links.map(link => (
               <Link key={link.href} href={link.href}>
                  <a className={`nav-link ${currentPath === link.href ? 'active' : ''}`}>
                     <div className="nav-link__item">
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
         <Searchbar />
         <UserMenu />
         <div className="px-4 border-r border-l border-gray-300 hover:bg-gray-200 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-full">
               <MoreIcon />
               <span className="font-bold">OTHER</span>
            </div>
         </div>
      </header>
   );
};

export default WebsiteHeader;
