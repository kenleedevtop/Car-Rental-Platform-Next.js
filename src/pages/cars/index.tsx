import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { CarsPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Cars = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Cars');
  }, []);

  return (
    <>
      <Title>Cars</Title>
      <CarsPage />
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

export default Cars;
