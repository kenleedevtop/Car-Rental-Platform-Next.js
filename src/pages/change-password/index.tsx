import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ChangePasswordPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ChangePassword = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Change Password');
  }, []);

  return (
    <>
      <Title>Change Password</Title>
      <ChangePasswordPage />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['change-password', 'common'])),
    },
  };
}

export default ChangePassword;
