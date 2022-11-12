import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Influencers = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Influencers');
  }, []);

  return (
    <>
      <Title>Influencers</Title>
      Influencers
    </>
  );
};

export default Influencers;
