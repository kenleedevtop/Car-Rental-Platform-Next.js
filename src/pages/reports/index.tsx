import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const Reports = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Reports');
  }, []);

  return (
    <>
      <Title>Reports</Title>
      Reports
    </>
  );
};

export default Reports;
