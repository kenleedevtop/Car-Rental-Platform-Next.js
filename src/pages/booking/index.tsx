import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminBookingPage, UserBookingPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Booking = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Booking');
  }, []);

  return (
    <>
      <Title>Booking</Title>
      {role === 'USER' && <UserBookingPage />}
      {role === 'ADMIN' && <AdminBookingPage />}
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

export default Booking;
