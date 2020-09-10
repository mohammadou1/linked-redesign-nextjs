import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Post from '~/components/common/post';

const WritePost = dynamic(() => import('./write-post'), { ssr: false });

const FeedContent = () => {
   return (
      <div className="flex-grow">
         <div>
            <WritePost />
         </div>
         <div className="py-6">
            <div className="border-t border-b border-white relative">
               <div className={`body-bg ${styles['sort-by']}`}>
                  <span className="text-black text-xs font-extrabold">SORT BY:</span>
                  <span className="text-primary font-extrabold text-xs">TRENDING</span>
               </div>
            </div>
         </div>

         <div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
         </div>
      </div>
   );
};

export default FeedContent;
