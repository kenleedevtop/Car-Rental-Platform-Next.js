import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ChangePasswordPage } from 'features';

const ChangePassword = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Change Password');
  }, []);

  return (
    <>
      <Title>Change Password</Title>
      <ChangePasswordPage />
    </>
  );
};

export default ChangePassword;
