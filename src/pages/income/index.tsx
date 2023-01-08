import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { InfluencerIncomePage, AmbasadorIncomePage } from 'features';

const Income = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Income');
  }, []);

  return (
    <>
      <Title>Income</Title>
      {role === 'INFLUENCER' && <InfluencerIncomePage />}
      {role === 'AMBASADOR' && <AmbasadorIncomePage />}
    </>
  );
};

export default Income;
