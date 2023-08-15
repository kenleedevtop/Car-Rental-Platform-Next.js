import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ClientAccountPage, AmbasadorAccountPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AdminAccountPage } from '../../features/account';

const Account = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Account');
  }, []);

  return (
    <>
      <Title>Account</Title>
      {role === 'INVESTOR' && <ClientAccountPage />}
      {role === 'DEVELOPER' && <AmbasadorAccountPage />}
      {(role === 'ADMIN' || role === 'SUPERADMIN') && <AdminAccountPage />}
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

export default Account;
