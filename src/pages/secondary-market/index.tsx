import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  AdminSecondaryMarketPage,
  InvestorSecondaryMarketPage,
} from 'features';

const Projects = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Projects');
  }, []);

  return (
    <>
      <Title>Projects</Title>
      {role === 'INVESTOR' && <InvestorSecondaryMarketPage />}
      {role === 'ADMIN' && <AdminSecondaryMarketPage />}
      {role === 'SUPERADMIN' && <AdminSecondaryMarketPage />}
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
