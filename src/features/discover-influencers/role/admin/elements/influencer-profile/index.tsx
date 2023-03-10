import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TInfluencerProfileModalProps } from 'features/discover-influencers/role/admin/elements/influencer-profile/types';
import {
  InfluencerProfileModalMain,
  InfluencerTitle,
} from 'features/discover-influencers/role/admin/elements/influencer-profile/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { EditIcon } from 'components/svg';
import { AdminAPI } from 'api';
import { useSnackbar } from 'hooks';

const InfluencerProfile = ({
  onClose,
  influencer,
  ...props
}: TInfluencerProfileModalProps) => {
  const [state, setState] = useState({
    firstName: influencer.firstName || '',
    lastName: influencer.lastName || '',
    email: influencer.email || '',
    username: influencer.username || '',
    socialMedia: influencer.socialMedia || '',
    diseaseArea: influencer.diseaseArea || null,
    location: influencer.location || null,
    followers: influencer.followers || 0,
  });

  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState(influencer);

  const { push } = useSnackbar();

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  const handleUpdate = async () => {
    try {
      await AdminAPI.updateInfluencer(influencer.id, influencer);
      push('Influencer successfully updated!', { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  return (
    <Modal
      size="medium"
      title={
        <InfluencerTitle>
          {state.firstName} {state.lastName}{' '}
          <EditIcon style={{ cursor: 'pointer' }} onClick={handleDisabled} />
        </InfluencerTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            if (!disabled) {
              handleUpdate();
              onClose();
            }
          }}
        >
          {disabled ? 'Close' : 'Save'}
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <InfluencerProfileModalMain columns={1}>
          <Stack direction="horizontal">
            <Input
              type="text"
              label="First Name"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.firstName}
              onValue={(firstName) => setState({ ...state, firstName })}
            />
            <Input
              type="text"
              label="Last Name"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.lastName}
              onValue={(lastName) => setState({ ...state, lastName })}
            />
          </Stack>
          <Stack direction="horizontal">
            <Input
              type="text"
              label="Email"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.email}
              onValue={(email) => setState({ ...state, email })}
            />
            <Input
              type="text"
              label="Username"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.username}
              onValue={(username) => setState({ ...state, username })}
            />
          </Stack>
          <Stack direction="horizontal">
            <Input
              type="text"
              label="Social Media"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.socialMedia}
              onValue={(socialMedia) => setState({ ...state, socialMedia })}
            />
            <Input
              type="text"
              label="Disease Area"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
          </Stack>
          <Stack direction="horizontal">
            <Input
              type="text"
              label="Location"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              type="number"
              label="Followers"
              placeholder="Please Enter"
              disabled={disabled}
              value={state.followers}
              onValue={(followers) => setState({ ...state, followers })}
            />
          </Stack>
        </InfluencerProfileModalMain>
      </Stack>
    </Modal>
  );
};

export default InfluencerProfile;
