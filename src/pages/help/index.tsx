import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import {
  ClientHelpPage,
  AmbasadorHelpPage,
  InfluencerHelpPage,
} from 'features';

const Help = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Help');
  }, []);

  return (
    <>
      <Title>Help</Title>
      {role === 'client' && <ClientHelpPage />}
      {role === 'ambasador' && <AmbasadorHelpPage />}
      {role === 'influencer' && <InfluencerHelpPage />}
    </>
  );
};

export default Help;
