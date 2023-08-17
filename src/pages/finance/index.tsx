import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { FinancePage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Finance = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Finance');
  }, []);

  return (
    <>
      <Title>Finance</Title>
      <FinancePage />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['finance', 'common'])),
    },
  };
}

export default Finance;
