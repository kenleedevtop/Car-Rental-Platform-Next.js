import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TInfluencerProfileModalProps } from 'features/discover-influencers/role/admin/elements/influencer-profile/types';
import { InfluencerProfileModalMain } from 'features/discover-influencers/role/admin/elements/influencer-profile/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const InfluencerProfile = ({
  onClose,
  ...props
}: TInfluencerProfileModalProps) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    socialMedia: null,
    diseaseArea: null,
    location: null,
    followers: '',

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

  // const handleFile = async () => {};

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
      <Stack>
        <Tabs tabs={['Info', 'Management']} value={tab} onValue={setTab} />
        {tab === 0 && (
          <InfluencerProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="First Name"
                placeholder="Please Enter"
                value={state.firstName}
                onValue={(firstName) => setState({ ...state, firstName })}
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Please Enter"
                value={state.lastName}
                onValue={(lastName) => setState({ ...state, lastName })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Email"
                placeholder="Please Enter"
                value={state.email}
                onValue={(email) => setState({ ...state, email })}
              />
              <Input
                type="text"
                label="Username"
                placeholder="Please Enter"
                value={state.username}
                onValue={(username) => setState({ ...state, username })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Social Media"
                placeholder="Please Enter"
                value={state.socialMedia}
                onValue={(socialMedia) => setState({ ...state, socialMedia })}
              />
              <Input
                type="text"
                label="Disease Area"
                placeholder="Please Enter"
                value={state.diseaseArea}
                onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Location"
                placeholder="Please Enter"
                value={state.location}
                onValue={(location) => setState({ ...state, location })}
              />
              <Input
                type="text"
                label="Followers"
                placeholder="Please Enter"
                value={state.followers}
                onValue={(followers) => setState({ ...state, followers })}
              />
            </Stack>
          </InfluencerProfileModalMain>
        )}
        {tab === 1 && (
          <InfluencerProfileModalMain columns={1}>
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
          </InfluencerProfileModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default InfluencerProfile;
