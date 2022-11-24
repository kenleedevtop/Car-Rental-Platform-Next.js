import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminFinancePage } from 'features';

const Finance = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Finance');
  }, []);

  return (
    <>
      <Title>Finance</Title>
      {role === 'admin' && <AdminFinancePage />}
    </>
  );
};

export default Finance;
