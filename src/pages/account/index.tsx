import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const Account = () => {
  const { setRouteName } = useAppContext();

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
