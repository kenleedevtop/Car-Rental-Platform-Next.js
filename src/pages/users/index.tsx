import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { UsersPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Users = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Users');
  }, []);

  return (
    <>
      <Title>Users</Title>
      <UsersPage />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'users-influencers',
        'common',
      ])),
    },
  };
}

export default Users;
