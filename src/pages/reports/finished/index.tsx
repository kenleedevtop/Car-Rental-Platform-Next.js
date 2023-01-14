import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { FinishedReportPage } from 'features';

const FinishedReport = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Finished Report');
  }, []);

  return (
    <>
      <Title>Finished Report</Title>
      {role === 'ADMIN' && <FinishedReportPage />}
    </>
  );
};

export default FinishedReport;
