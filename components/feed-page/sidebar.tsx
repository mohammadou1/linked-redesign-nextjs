import PremiumLogo from '~/svgs/premium-logo.svg';
import styles from './style.module.css';
import useMedia from '~/hooks/useMedia';

const hastags = [
   {
      hashtag: 'reactjs',
   },
   {
      hashtag: 'nextjs',
   },
   {
      hashtag: 'vercel',
   },
   {
      hashtag: 'tailwindcss',
   },
   {
      hashtag: 'framer_motion',
   },
   {
      hashtag: 'javascript',
   },
   {
      hashtag: 'html',
   },
   {
      hashtag: 'css',
   },
];

const FeedSidebar = () => {
   const isSmallScreen = useMedia(1200);
   return !isSmallScreen ? (
      <div className="px-12">
         <div className={styles['sidebar']}>
            <div
               className={styles['sidebar__header']}
               style={{ backgroundImage: 'url(/images/temp-header.png)' }}>
               <img className={styles['sidebar__img']} src="/images/temp-profile.jpg" />
            </div>
            <div className="bg-white pt-16 px-4 pb-6 rounded-b-md shadow-sm">
               <span className="font-bold text-center flex items-center justify-center">
                  Mohammad AlOulabi <PremiumLogo className="ml-2 transform scale-125" />
               </span>
               <p className="text-sm mt-3 text-center">
                  Frontend developer, React,NextJS lover, I live to learn and teach, JavaScript is
                  always #1
               </p>
            </div>
         </div>

         <div className={`mt-5 bg-white p-4 rounded-md shadow-sm ${styles['sidebar']}`}>
            <button className={styles['sidebar__new-article']}>WRITE NEW ARTICLE</button>
         </div>

         <div className={`mt-5 bg-white p-4 rounded-md shadow-sm ${styles['sidebar']}`}>
            <div className="flex justify-between mb-4">
               <button className="font-bold">MY GROUPS</button>
               <button className="text-primary font-bold">EDIT LIST</button>
            </div>
            {[...new Array(3)].map((_, idx) => (
               <div key={idx} className="bg-gray-300 p-2 font-bold flex items-center mb-2">
                  <img src="/images/temp-demo.png" className="rounded-full w-12 h-12  mr-4"  alt="Group image"/>
                  Digital freelancers group
               </div>
            ))}

            <button className="text-primary font-bold mt-4 text-sm">SHOW ALL (8)</button>
         </div>

         <div className={`mt-5 bg-white p-4 rounded-md shadow-sm ${styles['sidebar']}`}>
            <span className="font-bold block mb-6">FOLLOWED HASHTAGS</span>
            <div className="flex flex-wrap">
               {hastags.map(({ hashtag }, idx) => (
                  <span
                     key={idx}
                     className="text-black bg-blue-200 p-2 rounded-sm text-sm mr-3 mb-2 cursor-pointer hover:bg-blue-300">
                     #{hashtag}
                  </span>
               ))}
            </div>
         </div>

         <div className={`mt-5 bg-white p-4 rounded-md shadow-sm ${styles['sidebar']}`}>
            <span className="font-bold block mb-6">TRENDING ARTICLES</span>
            {[...new Array(3)].map((_, idx) => (
               <div key={idx} className="bg-gray-300 p-2 font-bold flex items-center mb-2">
                  <img src="/images/temp-photo.png" className=" w-16 h-12 rounded-sm object-cover  mr-4" alt="Trending image" />
                  <div>
                  Isn't NextJS awesome enough?
                  <span className="mt-2 block font-normal text-xs">
                     14,222 viewers
                  </span>
                     </div>
               </div>
            ))}
         </div>
      </div>
   ) : null;
};

export default FeedSidebar;
