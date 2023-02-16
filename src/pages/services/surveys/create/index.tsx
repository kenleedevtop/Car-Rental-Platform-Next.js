import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { CreateSurveyPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CreateSurvey = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Create Survey');
  }, []);

  return (
    <>
      <Title>Create Survey</Title>
      {role === 'ADMIN' && <CreateSurveyPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['surveys-create', 'common'])),
    },
  };
}

export default CreateSurvey;
