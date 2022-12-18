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
      {role === 'ADMIN' && <AdminSurveysPage />}
      {role === 'CLIENT' && <ClientSurveysPage />}
      {role === 'INFLUENCER' && <InfluencerSurveysPage />}
    </>
  );
};

export default Surveys;
