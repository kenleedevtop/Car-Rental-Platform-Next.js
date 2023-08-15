import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ClientHelpPage, AmbasadorHelpPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Help = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Help');
  }, []);

  return (
    <>
      <Title>Help</Title>
      {role === 'INVESTOR' && <ClientHelpPage />}
      {role === 'DEVELOPER' && <AmbasadorHelpPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['help', 'common'])),
    },
  };
}

export default Help;
