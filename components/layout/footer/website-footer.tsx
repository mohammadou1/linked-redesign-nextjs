import Logo from '~/svgs/logo.svg';
import HelpIcon from '~/svgs/help.svg';
import SettingsIcon from '~/svgs/settings.svg';

const WebsiteFooter = () => {
   return (
      <footer className="footer">
         <div className="flex flex-wrap">
            {/* Column of six */}
            <div className="w-1/5 px-3">
               <div className="flex flex-col items-center justify-center mt-1">
                  <Logo className="scale-125 transform" />
                  <div className="font-extrabold mt-3">
                     <span>Linked</span>
                     <span className="text-primary">In</span>
                  </div>
               </div>
            </div>

            {/* Column of six */}
            <div className="w-1/5 px-3">
               <span className="text-lg font-bold mb-8 block">Navigation</span>
               <ul className="list-none">
                  <li className="mb-1">
                     <a>About</a>
                  </li>
                  <li className="mb-1">
                     <a>Careers</a>
                  </li>
                  <li className="mb-1">
                     <a>Advertising</a>
                  </li>
                  <li>
                     <a>Small Business</a>
                  </li>
               </ul>
            </div>
            {/* Column of six */}
            <div className="w-1/5 px-3">
               <span className="text-lg font-bold mb-8 block invisible">Navigation</span>
               <ul className="list-none">
                  <li className="mb-1">
                     <a>Talent Solutions</a>
                  </li>
                  <li className="mb-1">
                     <a>Marketing Solutions</a>
                  </li>
                  <li className="mb-1">
                     <a>Sales Solutions</a>
                  </li>
                  <li>
                     <a>Safety Center</a>
                  </li>
               </ul>
            </div>
            {/* Column of six */}
            <div className="w-1/5 px-3">
               <span className="text-lg font-bold mb-8 block invisible">Navigation</span>
               <ul className="list-none">
                  <li className="mb-1">
                     <a>Community Guidelines</a>
                  </li>
                  <li className="mb-1">
                     <a>Privacy & Terms</a>
                  </li>
                  <li className="mb-1">
                     <a>Mobile App</a>
                  </li>
               </ul>
            </div>
            {/* Column of six */}
            <div className="w-1/5 px-3">
               <span className="text-lg font-bold mb-8 block">Fast access</span>
               <ul className="list-none font-bold">
                  <li className="mb-1">
                     <a className="bg-primary rounded-md text-white px-3 py-2 inline-flex w-48 items-center justify-between">
                        QUESTIONS? <HelpIcon className="transform scale-150" />
                     </a>
                  </li>
                  <li className="mb-1">
                     <a className="bg-white border border-primary rounded-md text-primary px-3 py-2 inline-flex  w-48 items-center justify-between">
                        SETTIGNS <SettingsIcon className="transform scale-150" />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default WebsiteFooter;
