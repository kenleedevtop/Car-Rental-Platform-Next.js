import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { RegisterCompanyPage, RegisterAmbassadorPage } from 'features';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { setRouteName } = useAppContext();
  const { query } = useRouter();

  const { t } = useTranslation('register');

  useEffect(() => {
    setRouteName('Register');
  }, []);

  return (
    <>
      <Title>{t('Sign Up')}</Title>
      {query.as === 'developer' && <RegisterCompanyPage />}
      {query.as === 'investor' && <RegisterAmbassadorPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['register', 'common'])),
    },
  };
}

export default Login;
