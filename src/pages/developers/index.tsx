import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminDevelopersPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Developers = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Developers');
  }, []);

  return (
    <>
      <Title>Developers</Title>
      {role === 'ADMIN' && <AdminDevelopersPage />}
      {role === 'SUPERADMIN' && <AdminDevelopersPage />}
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

export default Developers;
