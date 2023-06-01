import React, { useEffect, useState } from 'react';

import {
  AccountChange,
  AccountMain,
  AccountSpan,
  AccountContainer,
  AccountForm,
  AccountStack,
} from 'features/account/style';
import { Button, Input } from 'components/ui';
import {
  ChangeEmailModal,
  ChangeInfoModal,
  ChangePasswordModal,
} from 'features/account/role/client/elements';
import { useModal } from 'hooks';
import { useAppContext } from 'context';
import { ClientAPI, CompanyAPI, IndustryApi, LocationAPI } from 'api';

const AccountPage = ({ ...props }) => {
  const { user } = useAppContext();

  const [id, setId] = useState(user.id);
  const [data, setData] = useState<any>({});

  const [state, setState] = useState<any>({
    firstName: null,
    lastName: null,
    company: null,
    role: null,
    diseaseArea: [],
    location: null,
    industry: null,
    markets: [],
    email: null,
    password: '',
    colleagues: [],
    product: [],
    invitedBy: '',
  });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);

  const getClient = async () => {
    const result = await ClientAPI.getSingleClient(id);

    setData(result);
  };

  useEffect(() => {
    getClient();
  }, []);

  // useEffect(() => {
  //   console.log(data);

  //   if (Object.keys(data).length > 0) {
  //     setState({
  //       ...state,
  //       firstName: data.firstName,
  //       lastName: data.lastName,
  //       email: data.email,
  //       company: {
  //         value: data.client.company.id,
  //         label: data.client.company.name,
  //       },
  //       role: {
  //         value: data.client.companyTitle.id,
  //         label: data.client.companyTitle.name,
  //       },
  //     });

  //     if (data.client.clientDiseaseAreas) {
  //       setState({
  //         ...state,
  //         diseaseArea: data.client.clientDiseaseAreas.map((x: any) => ({
  //           value: x.diseaseArea.id,
  //           label: x.diseaseArea.name,
  //         })),
  //       });
  //     }

  //     if (data.location) {
  //       setState({
  //         ...state,
  //         location: { value: data.location.id, label: data.location.name },
  //       });
  //     }

  //     if (data.client.industry) {
  //       setState({
  //         ...state,
  //         industry: {
  //           value: data.client.industry.id,
  //           label: data.client.industry.name,
  //         },
  //       });
  //     }

  //     if (data.client.clientMarkets) {
  //       setState({
  //         ...state,
  //         markets: data.client.clientMarkets.map((x: any) => ({
  //           value: x.location.id,
  //           label: x.location.name,
  //         })),
  //       });
  //     }

  //     if (data.client.clientProducts) {
  //       setState({
  //         ...state,
  //         product: data.client.clientProducts.map((x: any) => ({
  //           value: x.product.id,
  //           label: x.product.name,
  //         })),
  //       });
  //     }
  //   }
  // }, [data]);

  useEffect(() => {
    console.log(data);

    if (Object.keys(data).length > 0) {
      const newState = { ...state }; // Create a new state object to hold all the updates

      newState.firstName = data.firstName;
      newState.lastName = data.lastName;
      newState.email = data.email;

      if (data.client.company) {
        newState.company = {
          value: data.client.company.id,
          label: data.client.company.name,
        };
      }

      if (data.client.companyTitle) {
        newState.role = {
          value: data.client.companyTitle.id,
          label: data.client.companyTitle.name,
        };
      }

      if (data.client.clientDiseaseAreas) {
        newState.diseaseArea = data.client.clientDiseaseAreas.map((x: any) => ({
          value: x.diseaseArea.id,
          label: x.diseaseArea.name,
        }));
      }

      if (data.location) {
        newState.location = {
          value: data.location.id,
          label: data.location.name,
        };
      }

      if (data.client.industry) {
        newState.industry = {
          value: data.client.industry.id,
          label: data.client.industry.name,
        };
      }

      if (data.client.clientMarkets) {
        newState.markets = data.client.clientMarkets.map((x: any) => ({
          value: x.location.id,
          label: x.location.name,
        }));
      }

      if (data.client.clientProducts) {
        newState.product = data.client.clientProducts.map((x: any) => ({
          value: x.product.id,
          label: x.product.name,
        }));
      }

      setState(newState); // Update the state with all the merged updates
    }
  }, [data]);

  return (
    <AccountMain {...props}>
      <AccountContainer>
        <AccountForm>
          <AccountStack direction="horizontal">
            <Input
              type="text"
              label="First Name"
              placeholder="Please Enter"
              value={state.firstName}
              onValue={(firstName) => setState({ ...state, firstName })}
              disabled
            />
            <Input
              type="text"
              label="Last Name"
              placeholder="Please Enter"
              value={state.lastName}
              onValue={(lastName) => setState({ ...state, lastName })}
              disabled
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="select"
              label="Company"
              placeholder="Please Select"
              value={state.company}
              onValue={(company) => setState({ ...state, company })}
              disabled
            />
            <Input
              type="select"
              label="Role"
              placeholder="Please Select"
              value={state.role}
              onValue={(role) => setState({ ...state, role })}
              disabled
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="select"
              label="Location"
              placeholder="Please Select"
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
              disabled
            />
            <Input
              type="select"
              label="Industry"
              placeholder="Please Select"
              value={state.industry}
              onValue={(industry) => setState({ ...state, industry })}
              disabled
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="multiselect"
              label="Disease Areas"
              placeholder="Please Select"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              disabled
            />
            <Input
              type="multiselect"
              label="Markets"
              placeholder="Please Select"
              value={state.markets}
              onValue={(markets) => setState({ ...state, markets })}
              disabled
            />
          </AccountStack>
          <AccountStack direction="horizontal">
            <Input
              type="multiselect"
              label="Product"
              placeholder="Please Select"
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
              disabled
            />
            <Input
              type="text"
              label="Invited By"
              disabled
              placeholder="Please Select"
              value={state.invitedBy}
              onValue={(invitedBy) => setState({ ...state, invitedBy })}
            />
          </AccountStack>
          <AccountSpan onClick={openCiModal}>Change Info</AccountSpan>
          <AccountChange>
            <Input
              type="text"
              label="Email"
              placeholder="johndoe@gmail.com"
              value={state.email}
              onValue={(email) => setState({ ...state, email })}
              disabled
            />
            <AccountSpan onClick={openCeModal}>Change Email</AccountSpan>
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
          {/* <Button color="primary" variant="contained" onClick={() => {}}>
            Save
          </Button> */}
        </AccountForm>
      </AccountContainer>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
      {ciModal && (
        <ChangeInfoModal
          data={state}
          onClose={() => {
            getClient();
            closeCiModal();
          }}
        />
      )}
    </AccountMain>
  );
};

export default AccountPage;
