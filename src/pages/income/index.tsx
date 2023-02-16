import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { InfluencerIncomePage, AmbasadorIncomePage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Income = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Income');
  }, []);

  return (
    <>
      <Title>Income</Title>
      {role === 'INFLUENCER' && <InfluencerIncomePage />}
      {role === 'AMBASSADOR' && <AmbasadorIncomePage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['income', 'common'])),
    },
  };
}

export default Income;
