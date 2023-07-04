import React, { useEffect, useState, useRef } from 'react';

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
import { AmbassadorAPI, AuthorizationAPI, CompanyAPI } from 'api';
import { useAppContext } from 'context';
import { ISingleAmbassadorResponse } from 'api/ambassador/types';
import { IUserAmbassador } from './types';

const AccountPage = ({ ...props }) => {
  const { user }: { user: IUserAmbassador } = useAppContext();

  const [filter, setFilter] = useState({
    firstname: user.firstName,
    lastName: user.lastName,
    company: '',
    role: '',
    email: user.email,
    password: '************',
    link: '',
    list: [],
  });

  const isMounted = useRef(false);

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  const { push } = useSnackbar();

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

  const getAffiliateLink = async () => {
    const { affiliateLink } = await AuthorizationAPI.getAffiliateLink(user.id);
    return affiliateLink;
  };

  const getAmbassador = async () => {
    const data = await AmbassadorAPI.getSingleAmbassador(user.id);

    return data;
  };

  useEffect(() => {
    if (isMounted.current === true) {
      Promise.allSettled([getAffiliateLink(), getAmbassador()]).then(
        (results) => {
          let affiliateLink: string | null = null;
          let ambassadorUser: ISingleAmbassadorResponse | null = null;

          const [affiliateLinkResult, ambassadorResult] = results;

          if (affiliateLinkResult.status === 'fulfilled') {
            affiliateLink = affiliateLinkResult.value;
          }

          if (ambassadorResult.status === 'fulfilled') {
            ambassadorUser = ambassadorResult.value;
          }

          setFilter((prevState: any) => ({
            ...prevState,
            link: affiliateLink || '',
            company: ambassadorUser?.ambassador.company.name || '',
            role: ambassadorUser?.ambassador.companyTitle.name || '',
          }));
        }
      );
    }
    return () => {
      isMounted.current = true;
    };
  }, []);

  return (
    <AccountMain {...props}>
      <AccountContainer>
        <AccountForm>
          <Stack>
            <AccountStack direction="horizontal">
              <Input
                disabled
                type="text"
                label="First Name"
                placeholder="Please Enter"
                value={filter.firstname}
                onValue={(firstname) => setFilter({ ...filter, firstname })}
              />
              <Input
                disabled
                type="text"
                label="Last Name"
                placeholder="Please Enter"
                value={filter.lastName}
                onValue={(lastName) => setFilter({ ...filter, lastName })}
              />
            </AccountStack>
            <AccountStack direction="horizontal">
              <Input
                disabled
                type="text"
                label="Company"
                placeholder="Please Enter"
                value={filter.company}
                onValue={(company) => setFilter({ ...filter, company })}
              />
              <Input
                disabled
                type="text"
                label="Role"
                placeholder="Please Enter"
                value={filter.role}
                onValue={(role) => setFilter({ ...filter, role })}
              />
            </AccountStack>
            <AccountChange>
              <Input
                disabled
                type="text"
                label="Email"
                placeholder="Please Enter"
                value={filter.email}
                onValue={(email) => setFilter({ ...filter, email })}
              />
            </AccountChange>
            <AccountChange>
              <Input
                disabled
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
