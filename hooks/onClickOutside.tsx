import { useEffect } from 'react';

export default function useOnClickOutside(
   ref: React.MutableRefObject<any>,
   handler: (event: any) => any
) {
   useEffect(() => {
      if (typeof window !== 'undefined') {
         const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target)) {
               return;
            }

            handler(event);
         };

         document.addEventListener('mousedown', listener);
         document.addEventListener('touchstart', listener);

         return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
         };
      }
   }, [ref, handler]);
}
