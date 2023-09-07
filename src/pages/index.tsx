import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { UsersPage, OpportunitiesPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Cars = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Cars');
  }, []);

  return (
    <>
      <Title>Cars</Title>
      {role === 'ADMIN' && <UsersPage />}
      {role === 'USER' && <OpportunitiesPage />}
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

export default Cars;
