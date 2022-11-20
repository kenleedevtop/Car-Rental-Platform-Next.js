import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ReportsPage } from 'features';

const Reports = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Reports');
  }, []);

  return (
    <>
      <Title>Reports</Title>
      <ReportsPage />
    </>
  );
};

export default Reports;
