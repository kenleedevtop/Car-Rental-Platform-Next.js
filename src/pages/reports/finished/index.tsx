import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { FinishedReportPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const FinishedReport = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Finished Report');
  }, []);

  return (
    <>
      <Title>Finished Report</Title>
      {role === 'ADMIN' && <FinishedReportPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['reports-finished', 'common'])),
    },
  };
}

export default FinishedReport;
