import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { SearchPage } from 'features';

const Search = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Search Results');
  }, []);

  return (
    <>
      <Title>Search Results</Title>
      <SearchPage />
    </>
  );
};

export default Search;
