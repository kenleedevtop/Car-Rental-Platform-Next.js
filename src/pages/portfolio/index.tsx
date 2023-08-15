import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminPortfolioPage, InvestorPortfolioPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Portfolio = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Portfolio');
  }, []);

  return (
    <>
      <Title>Portfolio</Title>
      {role === 'ADMIN' && <AdminPortfolioPage />}
      {role === 'SUPERADMIN' && <AdminPortfolioPage />}
      {role === 'INVESTOR' && <InvestorPortfolioPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['portfolio', 'common'])),
    },
  };
}

export default Portfolio;
