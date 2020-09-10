import MoreIcon from '~/svgs/more.svg';
import ShareIcon from '~/svgs/share.svg';
import LikeInactive from '~/svgs/like-inactive.svg';
import LikeActive from '~/svgs/like-active.svg';
import CommentIcon from '~/svgs/comment.svg';
import styles from './post.module.css';
import { useState } from 'react';
const Post = () => {
   const [liked, setLiked] = useState(false);

   const toggleLike = () => setLiked(prev => !prev);
   return (
      <div className="bg-white pt-4 mb-8 rounded-sm shadow-sm">
         <div className="flex px-4">
            <div className="flex-grow text-xs">
               <span className="text-primary">Ted Bell</span> and{' '}
               <span className="text-primary">Vercel</span> liked this
            </div>
            <button aria-label="show settings">
               <MoreIcon />
            </button>
         </div>

         <div className="py-4 sm:px-8 px-6 border-t border-b border-gray-300">
            <div className="flex mb-5">
               <img alt="profile image" src="/images/temp-profile.jpg" className="w-12 h-12 rounded-full" />
               <div className="ml-3">
                  <span className="font-extrabold">Mohammad AlOulabi</span>
                  <span className="text-xs block">React developer</span>
               </div>
            </div>
            <div className={styles['content']}>
               is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
               the industry's standard dummy text ever since the 1500s, when an unknown printer took
               a galley of type and scrambled it to make a type specimen book. It has survived not
               only five centuries, but also the leap into electronic typesetting, remaining
               essentially unchanged. It was popularised in the 1960s with the release of Letraset
               sheets containing Lorem Ipsum passages, and more recently with desktop publishing
               software like Aldus PageMaker including versions of Lorem Ipsum.
               <div className={styles['content__lay']}></div>
            </div>
            <button className="text-primary font-bold text-sm mt-4">READ MORE</button>
         </div>
         <div className="flex">
            <div className="flex-grow flex items-center">
               <button
                  aria-label="Like post"
                  onClick={toggleLike}
                  className="text-sm font-bold flex items-center py-3 px-6 border-r border-gray-300 hover:bg-gray-300">
                  {liked ? <LikeActive className="mr-2" /> : <LikeInactive className="mr-2" />}
                  {/* STUPID LIKE COUNTS :| */}
                  {liked ? 42 + 1 : 42}
               </button>
               <button
                  aria-label="comment on post"
                  className="text-sm font-bold flex items-center py-3 px-6 border-r border-gray-300 hover:bg-gray-300">
                  <CommentIcon className="mr-2" /> 9
               </button>
            </div>
            <button
               aria-label="share post"
               className="text-sm font-bold flex items-center py-3 px-6 border-r border-gray-300 hover:bg-gray-300">
               <ShareIcon className="mr-2" /> SHARE
            </button>
         </div>
      </div>
   );
};

export default Post;
