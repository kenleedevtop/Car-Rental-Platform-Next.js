import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminApplicationsPage, UserApplicationsPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Applications = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Applications');
  }, []);

  return (
    <>
      <Title>Applications</Title>
      {role === 'USER' && <UserApplicationsPage />}
      {role === 'ADMIN' && <AdminApplicationsPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['account', 'common'])),
    },
  };
}

export default Applications;
