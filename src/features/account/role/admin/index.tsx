import React, { useEffect, useState } from 'react';

import {
  AccountChange,
  AccountMain,
  AccountSpan,
  AccountContainer,
  AccountForm,
  AccountStack,
} from 'features/account/style';
import { Input } from 'components/ui';
import { ChangePasswordModal } from 'features/account/role/investor/elements';
import { useModal, useSnackbar } from 'hooks';
import { useAppContext } from 'context';
// import { AuthorizationAPI } from 'api';

const AccountPage = ({ ...props }) => {
  const [state, setState] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  const { push } = useSnackbar();

  // const resetPassword = async () => {
  //   try {
  //     await AuthorizationAPI.resetPassword(state.email, 'en');
  //     push('Email for password reset has been sent.', { variant: 'success' });
  //   } catch {
  //     push('Email for password reset has not been sent.', { variant: 'error' });
  //   }
  // };

  return (
    <AccountMain {...props}>
      <AccountContainer>
        <AccountForm>
          <AccountStack direction="horizontal">
            <Input
              type="text"
              label="First Name"
              value={state.firstName}
              onValue={(firstName) => setState({ ...state, firstName })}
              disabled
            />
            <Input
              type="text"
              label="Last Name"
              value={state.lastName}
              onValue={(lastName) => setState({ ...state, lastName })}
              disabled
            />
          </AccountStack>
          <AccountChange>
            <Input
              type="text"
              label="Email"
              value={state.email}
              onValue={(email) => setState({ ...state, email })}
              disabled
            />
            {/* <AccountSpan onClick={openCeModal}>Change Email</AccountSpan> */}
          </AccountChange>
          <AccountChange>
            <Input
              type="text"
              label="Password"
              placeholder="**********"
              value={state.password}
              onValue={(password) => setState({ ...state, password })}
              disabled
            />
            <AccountSpan onClick={openCpModal}>Change Password</AccountSpan>
          </AccountChange>
        </AccountForm>
      </AccountContainer>
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </AccountMain>
  );
};

export default AccountPage;
