import dynamic from 'next/dynamic';
import FeedContent from '~/components/feed-page/content';
import { NextSeo } from 'next-seo';
const FeedSidebar = dynamic(() => import('~/components/feed-page/sidebar'), { ssr: false });
const FeedPage = () => {
   return (
      <div>
         <NextSeo
            title="Feed"
            additionalMetaTags={[
               { name: 'keywords', content: 'NextJS, Tailwind, LinkedIn Clone, ReactJS' },
            ]}
         />
         <div className="flex">
            <FeedContent />
            <FeedSidebar />
         </div>
      </div>
   );
};

export default FeedPage;
