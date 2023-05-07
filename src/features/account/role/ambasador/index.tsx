import React, { useEffect, useState } from 'react';

import {
  AccountMain,
  AccountSpan,
  AccountChange,
  AccountContainer,
  AccountForm,
  AccountStack,
} from 'features/account/style';
import { Stack } from 'components/system';
import { Input } from 'components/ui';
import {
  ChangeEmailModal,
  ChangePasswordModal,
} from 'features/account/role/ambasador/elements';
import { useModal, useSnackbar } from 'hooks';
import { CopyIcon } from 'components/svg';
import { AdminAPI } from 'api';

const AccountPage = ({ ...props }) => {
  const [filter, setFilter] = useState({
    firstname: '',
    lastName: '',
    company: '',
    role: '',
    email: '',
    password: '',
    link: '',
    list: [],
  });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  const { push } = useSnackbar();

  const handleInviteLink = async () => {
    try {
      const { link } = await AdminAPI.createAmbassadorInviteLink();
      setFilter({ ...filter, link });
    } catch {
      push('Something failed!', {
        variant: 'error',
      });
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(filter.link);
      push(`Successfully copied!`, {
        variant: 'success',
      });
    } catch {
      push('Something failed!', {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    handleInviteLink();
  }, []);

  return (
    <AccountMain {...props}>
      <AccountContainer>
        <AccountForm>
          <Stack>
            <AccountStack direction="horizontal">
              <Input
                type="text"
                label="First Name"
                placeholder="Please Enter"
                value={filter.firstname}
                onValue={(firstname) => setFilter({ ...filter, firstname })}
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Please Enter"
                value={filter.lastName}
                onValue={(lastName) => setFilter({ ...filter, lastName })}
              />
            </AccountStack>
            <AccountStack direction="horizontal">
              <Input
                type="text"
                label="Company"
                placeholder="Please Enter"
                value={filter.company}
                onValue={(company) => setFilter({ ...filter, company })}
              />
              <Input
                type="text"
                label="Role"
                placeholder="Please Enter"
                value={filter.role}
                onValue={(role) => setFilter({ ...filter, role })}
              />
            </AccountStack>
            <AccountChange>
              <Input
                type="text"
                label="Email"
                placeholder="Please Enter"
                value={filter.email}
                onValue={(email) => setFilter({ ...filter, email })}
              />
              <AccountSpan onClick={openCeModal}>Change Email</AccountSpan>
            </AccountChange>
            <AccountChange>
              <Input
                type="text"
                label="Password"
                placeholder="Please Enter"
                value={filter.password}
                onValue={(password) => setFilter({ ...filter, password })}
              />
              <AccountSpan onClick={openCpModal}>Change Password</AccountSpan>
            </AccountChange>
            <Input
              disabled
              endAdornment={<CopyIcon onClick={handleCopyToClipboard} />}
              type="text"
              label="Invite Link"
              placeholder="asdsadksa;dlsa"
              value={filter.link}
              onValue={(link) => setFilter({ ...filter, link })}
            />
            <Input
              disabled
              type="multiselect"
              label="Invited List"
              placeholder="Please Select"
              value={filter.list}
              onValue={(list) => setFilter({ ...filter, list })}
            />
          </Stack>
        </AccountForm>
      </AccountContainer>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </AccountMain>
  );
};

export default AccountPage;
