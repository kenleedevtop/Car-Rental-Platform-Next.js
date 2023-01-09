import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TClientsProfileModalProps } from 'features/clients/role/admin/elements/clients-profile/types';
import { ClientsProfileModalMain } from 'features/clients/role/admin/elements/clients-profile/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ClientsProfile = ({ onClose, ...props }: TClientsProfileModalProps) => {
  const [state, setState] = useState({
    clientName: '',
    email: '',
    role: '',
    phone: '',
    company: '',
    product: '',
    industry: null,
    diseaseArea: null,
    location: null,
    market: null,

    totalCampaigns: '',
    campaignsLastMonth: '',
    totalReports: '',
    reportsLastMonth: '',
    totalSMLReports: '',
    smlLastMonth: '',
    totalSurveys: '',
    surveysLastMonth: '',

    comments: [],
    labels: [],
    meetings: [],
    reminders: [],
    tasks: [],
    onPlatformSince: null,
    status: '',
    statusChange: null,
  });

  const [tab, setTab] = useState(0);

  return (
    <Modal
      size="medium"
      title="First Name Last Name"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '500px' }}>
        <Tabs
          tabs={['Info', 'Campaigns', 'Management']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <ClientsProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Client Name"
                placeholder="Please Enter"
                value={state.clientName}
                onValue={(clientName) => setState({ ...state, clientName })}
              />
              <Input
                type="text"
                label="Email"
                placeholder="Please Enter"
                value={state.email}
                onValue={(email) => setState({ ...state, email })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Role"
                placeholder="Please Enter"
                value={state.role}
                onValue={(role) => setState({ ...state, role })}
              />
              <Input
                type="text"
                label="Phone Number"
                placeholder="Please Enter"
                value={state.phone}
                onValue={(phone) => setState({ ...state, phone })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Company"
                placeholder="Please Enter"
                value={state.company}
                onValue={(company) => setState({ ...state, company })}
              />
              <Input
                type="text"
                label="Product"
                placeholder="Please Enter"
                value={state.product}
                onValue={(product) => setState({ ...state, product })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="select"
                label="Industry"
                placeholder="Please Enter"
                value={state.industry}
                onValue={(industry) => setState({ ...state, industry })}
              />
              <Input
                type="select"
                label="Disease Area"
                placeholder="Please Enter"
                value={state.diseaseArea}
                onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="select"
                label="Location"
                placeholder="Please Enter"
                value={state.location}
                onValue={(location) => setState({ ...state, location })}
              />
              <Input
                type="select"
                label="Market"
                placeholder="Please Enter"
                value={state.market}
                onValue={(market) => setState({ ...state, market })}
              />
            </Stack>
          </ClientsProfileModalMain>
        )}
        {tab === 1 && (
          <ClientsProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Total Campaigns"
                placeholder="Please Enter"
                value={state.totalCampaigns}
                onValue={(totalCampaigns) =>
                  setState({ ...state, totalCampaigns })
                }
              />
              <Input
                type="text"
                label="Campaigns in Last 30 Days"
                placeholder="Please Enter"
                value={state.campaignsLastMonth}
                onValue={(campaignsLastMonth) =>
                  setState({ ...state, campaignsLastMonth })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Total Reports"
                placeholder="Please Enter"
                value={state.totalReports}
                onValue={(totalReports) => setState({ ...state, totalReports })}
              />
              <Input
                type="text"
                label="Reports in Last 30 Days"
                placeholder="Please Enter"
                value={state.reportsLastMonth}
                onValue={(reportsLastMonth) =>
                  setState({ ...state, reportsLastMonth })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Total SML Reports"
                placeholder="Please Enter"
                value={state.totalSMLReports}
                onValue={(totalSMLReports) =>
                  setState({ ...state, totalSMLReports })
                }
              />
              <Input
                type="text"
                label="SML Reports in Last 30 Days"
                placeholder="Please Enter"
                value={state.smlLastMonth}
                onValue={(smlLastMonth) => setState({ ...state, smlLastMonth })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Total Surveys"
                placeholder="Please Enter"
                value={state.totalSurveys}
                onValue={(totalSurveys) => setState({ ...state, totalSurveys })}
              />
              <Input
                type="text"
                label="Surveys in Last 30 Days"
                placeholder="Please Enter"
                value={state.surveysLastMonth}
                onValue={(surveysLastMonth) =>
                  setState({ ...state, surveysLastMonth })
                }
              />
            </Stack>
          </ClientsProfileModalMain>
        )}
        {tab === 2 && (
          <ClientsProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                type="multiselect"
                label="Comments"
                placeholder="Please Enter"
                value={state.comments}
                onValue={(comments) => setState({ ...state, comments })}
              />
              <Input
                type="multiselect"
                label="Labels"
                placeholder="Please Enter"
                value={state.labels}
                onValue={(labels) => setState({ ...state, labels })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="multiselect"
                label="Meetings"
                placeholder="Please Enter"
                value={state.meetings}
                onValue={(meetings) => setState({ ...state, meetings })}
              />
              <Input
                type="multiselect"
                label="Reminders"
                placeholder="Please Enter"
                value={state.reminders}
                onValue={(reminders) => setState({ ...state, reminders })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="multiselect"
                label="Tasks"
                placeholder="Please Enter"
                value={state.tasks}
                onValue={(tasks) => setState({ ...state, tasks })}
              />
              <Input
                type="date"
                label="On Platform Since"
                placeholder="Please Enter"
                value={state.onPlatformSince}
                onValue={(onPlatformSince) =>
                  setState({ ...state, onPlatformSince })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Status"
                placeholder="Please Enter"
                value={state.status}
                onValue={(status) => setState({ ...state, status })}
              />
              <Input
                type="date"
                label="Status Change"
                placeholder="Please Enter"
                value={state.statusChange}
                onValue={(statusChange) => setState({ ...state, statusChange })}
              />
            </Stack>
          </ClientsProfileModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default ClientsProfile;
