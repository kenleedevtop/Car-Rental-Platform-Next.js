import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ManageClientCampaignPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ManageCampaign = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Manage Campaign');
  }, []);

  return (
    <>
      <Title>Manage Campaign</Title>
      {role === 'CLIENT' && <ManageClientCampaignPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['reports-finished', 'common'])),
    },
  };
}

export default ManageCampaign;
