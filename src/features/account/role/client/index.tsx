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
    company: null,
    role: null,
    diseaseArea: null,
    location: null,
    industry: null,
    markets: null,
    email: '',
    password: '',
    colleagues: [],
    product: null,
    invitedBy: '',
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
              type="select"
              label="Company"
              placeholder="Please Select"
              value={filter.company}
              onValue={(company) => setFilter({ ...filter, company })}
            />
            <Input
              type="select"
              label="Role"
              placeholder="Please Select"
              value={filter.role}
              onValue={(role) => setFilter({ ...filter, role })}
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="select"
              label="Location"
              placeholder="Please Select"
              value={filter.location}
              onValue={(location) => setFilter({ ...filter, location })}
            />
            <Input
              type="select"
              label="Industry"
              placeholder="Please Select"
              value={filter.industry}
              onValue={(industry) => setFilter({ ...filter, industry })}
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="select"
              label="Disease Areas"
              placeholder="Please Select"
              value={filter.diseaseArea}
              onValue={(diseaseArea) => setFilter({ ...filter, diseaseArea })}
            />
            <Input
              type="select"
              label="Markets"
              placeholder="Please Select"
              value={filter.markets}
              onValue={(markets) => setFilter({ ...filter, markets })}
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="select"
              label="Product"
              placeholder="Please Select"
              value={filter.product}
              onValue={(product) => setFilter({ ...filter, product })}
            />
            <Input
              type="text"
              label="Invited By"
              disabled
              placeholder="Please Select"
              value={filter.invitedBy}
              onValue={(invitedBy) => setFilter({ ...filter, invitedBy })}
            />
          </AccountStack>
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
        </AccountForm>
      </AccountContainer>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </AccountMain>
  );
};

export default AccountPage;
