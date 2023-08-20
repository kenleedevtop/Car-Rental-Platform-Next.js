import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { HousesPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Houses = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Boats');
  }, []);

  return (
    <>
      <Title>Boats</Title>
      <HousesPage />
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

export default Houses;
