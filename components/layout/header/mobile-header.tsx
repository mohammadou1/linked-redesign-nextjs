import Searchbar from './searchbar';
import ChatIcon from '~/svgs/chat.svg';

const MobileHeader = () => {
   return (
      <header className="flex bg-white shadow-sm sticky z-50 top-0">
         <div className="py-2 sm:px-4 px-2 hover:bg-gray-200 cursor-pointer">
            <div className="rounded-full border-2 border-primary relative ">
               <img
                  alt="profile image"
                  src="/images/temp-profile.jpg"
                  className="rounded-full sm:w-10 sm:h-10 h-8 w-8"
               />
               <div className="header__burger-icon">
                  <img src="/icons/burger.png" alt="profile image" />
               </div>
            </div>
         </div>
         <Searchbar grow />
         <div className="sm:px-4 px-2 py-2 flex items-center hover:bg-gray-200 cursor-pointer">
            <div className="relative">
               <ChatIcon />
               <div className="count-badge">1</div>
            </div>
         </div>
      </header>
   );
};

export default MobileHeader;
