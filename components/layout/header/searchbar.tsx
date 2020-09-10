import SearchIcon from '~/svgs/search.svg';
import { FC } from 'react';

interface SearchbarProps {
   grow?: boolean;
}

const Searchbar: FC<SearchbarProps> = ({ grow }) => {
   const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(e.currentTarget['search'].value);
   };

   return (
      <form
         role="search"
         className="relative flex-grow"
         autoComplete="off"
         autoCorrect="off"
         noValidate={true}
         onSubmit={searchHandler}>
         <label htmlFor="search" className="search-icon">
            <SearchIcon />
         </label>
         <input
            aria-label="Search"
            id="search"
            name="search"
            type="search"
            placeholder="Search"
            className={`searchbar ${grow ? 'searchbar-full' : ''}`}
         />
      </form>
   );
};

export default Searchbar;
