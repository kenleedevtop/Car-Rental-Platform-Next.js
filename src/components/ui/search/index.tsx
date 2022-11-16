import React, { useRef, useState } from 'react';
import {
  SearchMain,
  SearchIcon,
  SearchInput,
} from 'components/ui/search/styles';
import { TSearchProps } from 'components/ui/search/types';
import { SearchIcon as SearchSvg } from 'components/svg';

const Search = ({ placeholder, onClick, ...props }: TSearchProps) => {
  const searchRef = useRef<null | HTMLInputElement>(null);

  const [state, setState] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleFocus = (e: React.MouseEvent<HTMLDivElement>) => {
    if (searchRef.current && e.target !== searchRef.current) {
      searchRef.current.focus();
    }
    if (onClick) onClick(e);
  };

  return (
    <SearchMain onClick={handleFocus} {...props}>
      <SearchIcon>
        <SearchSvg />
      </SearchIcon>
      <SearchInput
        placeholder={placeholder}
        value={state}
        onChange={handleChange}
        ref={searchRef}
        onClick={(e) => e.stopPropagation()}
      />
    </SearchMain>
  );
};

export default Search;
