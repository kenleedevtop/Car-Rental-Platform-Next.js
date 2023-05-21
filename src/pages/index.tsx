import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import {
  AdminHomePage,
  ClientHomePage,
  AmbasadorHomePage,
  InfluencerHomePage,
} from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Home');
  }, []);

  return (
    <>
      <Title>Home</Title>
      {role === 'ADMIN' && <AdminHomePage />}
      {role === 'SUPERADMIN' && <AdminHomePage />}
      {role === 'CLIENT' && <ClientHomePage />}
      {role === 'INFLUENCER' && <InfluencerHomePage />}
      {role === 'AMBASSADOR' && <AmbasadorHomePage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
}

export default Home;
