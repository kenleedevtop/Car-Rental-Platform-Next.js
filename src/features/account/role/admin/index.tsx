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
import { useModal } from 'hooks';
import { useAppContext } from 'context';
import ChangePasswordModal from './elements/change-password-modal';

const AccountPage = ({ ...props }) => {
  const { user } = useAppContext();
  const [state, setState] = useState<any>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: '',
  });

  const [cpModal, openCpModal, closeCpModal] = useModal(false);

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
              type="password"
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
      {cpModal && <ChangePasswordModal onClose={closeCpModal} car={null}/>}
    </AccountMain>
  );
};

export default AccountPage;
