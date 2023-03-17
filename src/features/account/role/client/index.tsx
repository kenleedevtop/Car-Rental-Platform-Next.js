import React, { useState } from 'react';

import {
  AccountChange,
  AccountMain,
  AccountSpan,
  AccountContainer,
  AccountForm,
  AccountStack,
} from 'features/account/style';
import { Input } from 'components/ui';
import {
  ChangeEmailModal,
  ChangePasswordModal,
} from 'features/account/role/client/elements';
import { useModal } from 'hooks';

const AccountPage = ({ ...props }) => {
  const [filter, setFilter] = useState({
    firstname: '',
    lastName: '',
    company: '',
    role: '',
    diseaseArea: null,
    location: '',
    markets: '',
    email: '',
    password: '',
    colleagues: [],
  });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  return (
    <AccountMain {...props}>
      <AccountContainer>
        <AccountForm>
          <AccountStack direction="horizontal">
            <Input
              type="text"
              label="First Name"
              placeholder="John"
              value={filter.firstname}
              onValue={(firstname) => setFilter({ ...filter, firstname })}
            />
            <Input
              type="text"
              label="Last Name"
              placeholder="Doe"
              value={filter.lastName}
              onValue={(lastName) => setFilter({ ...filter, lastName })}
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="text"
              label="Company"
              placeholder="John"
              value={filter.company}
              onValue={(company) => setFilter({ ...filter, company })}
            />
            <Input
              type="text"
              label="Role"
              placeholder="Doe"
              value={filter.role}
              onValue={(role) => setFilter({ ...filter, role })}
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="select"
              label="Disease Areas"
              placeholder="Male"
              value={filter.diseaseArea}
              onValue={(diseaseArea) => setFilter({ ...filter, diseaseArea })}
            />
            <Input
              type="text"
              label="Markets"
              placeholder="John"
              value={filter.markets}
              onValue={(markets) => setFilter({ ...filter, markets })}
            />
          </AccountStack>
          <Input
            type="select"
            label="Location"
            placeholder="Please select"
            value={filter.location}
            onValue={(location) => setFilter({ ...filter, location })}
          />
          <AccountChange>
            <Input
              type="text"
              label="Email"
              placeholder="johndoe@gmail.com"
              value={filter.email}
              onValue={(email) => setFilter({ ...filter, email })}
            />
            <AccountSpan onClick={openCeModal}>Change Email</AccountSpan>
          </AccountChange>
          <AccountChange>
            <Input
              type="text"
              label="Password"
              placeholder="**********"
              value={filter.password}
              onValue={(password) => setFilter({ ...filter, password })}
            />
            <AccountSpan onClick={openCpModal}>Change Password</AccountSpan>
          </AccountChange>
          <Input
            type="multiselect"
            label="Add Colleagues"
            placeholder="name@company.com;"
            value={filter.colleagues}
            onValue={(colleagues) => setFilter({ ...filter, colleagues })}
          />
        </AccountForm>
      </AccountContainer>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </AccountMain>
  );
};

export default AccountPage;
