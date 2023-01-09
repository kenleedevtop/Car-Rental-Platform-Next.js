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
      {role === 'CLIENT' && <ClientHelpPage />}
      {role === 'AMBASADOR' && <AmbasadorHelpPage />}
      {role === 'INFLUENCER' && <InfluencerHelpPage />}
    </>
  );
};

export default Help;
