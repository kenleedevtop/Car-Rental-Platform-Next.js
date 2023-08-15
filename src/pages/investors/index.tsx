import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminInvestorsPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Investors = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Investors');
  }, []);

  return (
    <>
      <Title>Investors</Title>
      {role === 'ADMIN' && <AdminInvestorsPage />}
      {role === 'SUPERADMIN' && <AdminInvestorsPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['users-clients', 'common'])),
    },
  };
}

export default Investors;
