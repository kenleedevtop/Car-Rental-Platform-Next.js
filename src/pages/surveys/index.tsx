import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import {
  AdminSurveysPage,
  ClientSurveysPage,
  InfluencerSurveysPage,
} from 'features';

const Surveys = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Surveys');
  }, []);

  return (
    <>
      <Title>Surveys</Title>
      {role === 'admin' && <AdminSurveysPage />}
      {role === 'client' && <ClientSurveysPage />}
      {role === 'influencer' && <InfluencerSurveysPage />}
    </>
  );
};

export default Surveys;
