import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminAccountPage, UserAccountPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Account = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Account');
  }, []);

  return (
    <>
      <Title>Account</Title>
      {role === 'USER' && <UserAccountPage />}
      {role === 'ADMIN' && <AdminAccountPage />}
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
