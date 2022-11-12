import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { usePageContext } from 'context';

const Account = () => {
  const { setRouteName } = usePageContext();

  useEffect(() => {
    setRouteName('Account');
  }, []);

  return (
    <>
      <Title>Account</Title>
      Account
    </>
  );
};

export default Account;
