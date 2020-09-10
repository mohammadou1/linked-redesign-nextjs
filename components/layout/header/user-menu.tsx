import ArrowUpRight from '~/svgs/arrowUpRight.svg';
import { useState, useRef } from 'react';
import useOnClickOutside from '~/hooks/onClickOutside';

const UserMenu = () => {
   const ref = useRef(null);
   const [isOpen, setOpen] = useState(false);
   const toggleMenu = () => setOpen(state => !state);

   useOnClickOutside(ref, () => setOpen(false));

   return (
      <div className="flex relative z-50">
         <div
            className="flex items-center px-6  hover:bg-gray-200 cursor-pointer"
            aria-controls="menu"
            onClick={toggleMenu}
            aria-expanded={isOpen ? 'true' : 'false'}>
            <img src="/images/temp-profile.jpg" className="rounded-full w-10 h-10" alt="profile image" />
            <div className="px-3  text-sm">
               <div className="flex justify-center items-center">
                  <span className="text-black font-extrabold username">MOH OULABI</span>
                  <span className="ml-3 text-gray-400">YOU</span>
               </div>
               <div className="flex items-center">
                  <span className="text-gray-600">367 views today</span>
                  <span className="ml-2 font-bold text-green-700">+32</span>
                  <span>
                     <ArrowUpRight />
                  </span>
               </div>
            </div>
         </div>
         {isOpen && (
            <div className="absolute top-0 left-0 right-0 bottom-0">
               <div
                  ref={ref}
                  className="relative bg-white text-black  shadow-xl border-t border-gray-300"
                  style={{ top: '100%' }}>
                  <ul role="menu" className="list-none">
                     <li className="py-3 hover:bg-gray-300 px-6 border-b border-gray-300">
                        <a>Item</a>
                     </li>
                     <li className="py-3 hover:bg-gray-300 px-6 border-b border-gray-300">
                        <a>Item</a>
                     </li>
                     <li className="py-3 hover:bg-gray-300 px-6 border-b border-gray-300">
                        <a>Item</a>
                     </li>
                     <li className="py-3 hover:bg-gray-300 px-6 border-b border-gray-300">
                        <a>Item</a>
                     </li>
                     <li className="py-3 hover:bg-gray-300 px-6 border-b border-gray-300">
                        <a>Item</a>
                     </li>
                  </ul>
               </div>
            </div>
         )}
      </div>
   );
};

export default UserMenu;
