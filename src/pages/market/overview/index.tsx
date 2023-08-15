import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminOverviewPage, InvestorOverviewPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Overview = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Overview');
  }, []);

  return (
    <>
      <Title>Overview</Title>
      {role === 'INVESTOR' && <InvestorOverviewPage />}
      {role === 'ADMIN' && <AdminOverviewPage />}
      {role === 'SUPERADMIN' && <AdminOverviewPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['help', 'common'])),
    },
  };
}

export default Overview;
