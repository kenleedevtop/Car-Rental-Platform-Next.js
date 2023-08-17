import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { UsersOverviewPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Overview = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Overview');
  }, []);

  return (
    <>
      <Title>Overview</Title>
      <UsersOverviewPage />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'users-influencers',
        'common',
      ])),
    },
  };
}

export default Overview;
