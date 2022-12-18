import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminSmlPage, ClientSmlPage } from 'features';

const SML = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('SML');
  }, []);

  return (
    <>
      <Title>SML</Title>
      {role === 'ADMIN' && <AdminSmlPage />}
      {role === 'CLIENT' && <ClientSmlPage />}
    </>
  );
};

export default SML;
