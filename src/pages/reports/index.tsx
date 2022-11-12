import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Reports = () => {
  const { setRouteName } = usePageContext();

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
