import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AdminMarketPage, InvestorMarketPage } from 'features';

const Projects = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Projects');
  }, []);

  return (
    <>
      <Title>Projects</Title>
      {role === 'INVESTOR' && <InvestorMarketPage />}
      {role === 'ADMIN' && <AdminMarketPage />}
      {role === 'SUPERADMIN' && <AdminMarketPage />}
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

export default Projects;
