import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { InfluencerBenefitsPage } from 'features';

const Benefits = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Benefits');
  }, []);

  return (
    <>
      <Title>Benefits</Title>
      {role === 'INFLUENCER' && <InfluencerBenefitsPage />}
    </>
  );
};

export default Benefits;
