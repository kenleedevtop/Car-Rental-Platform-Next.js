import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { AdminReportsPage, ClientReportsPage } from 'features';

const Reports = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Reports');
  }, []);

  return (
    <>
      <Title>Reports</Title>
      {role === 'ADMIN' && <AdminReportsPage />}
      {role === 'CLIENT' && <ClientReportsPage />}
    </>
  );
};

export default Reports;
