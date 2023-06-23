import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TInfluencerProfileModalProps } from 'features/discover-influencers/role/admin/elements/influencer-profile/types';
import {
  InfluencerProfileModalMain,
  InfluencerTitle,
} from 'features/discover-influencers/role/admin/elements/influencer-profile/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { EditIcon } from 'components/svg';
import { InfluencerAPI, LocationAPI, DiseaseAreaAPI } from 'api';
import { useSnackbar } from 'hooks';

const InfluencerProfile = ({
  onClose,
  influencerId,
  ...props
}: TInfluencerProfileModalProps) => {
  const [influencer, setInfluencer] = useState<any>();
  const [locations, setLocations] = useState<any>([]);
  const [diseaseArea, setDiseaseArea] = useState<any>([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    locationId: null,
    followers: null,
    diseaseAreas: [],
    socialPlatforms: [
      {
        socialPlatformId: null,
        authorizationCode: '',
      },
    ],
  });

  const { push } = useSnackbar();

  const getInfluencer = async () => {
    const data = await InfluencerAPI.getSingleInfluencer(influencerId);
    setInfluencer(data);
  };

  const getLocations = async (s: string = '') => {
    setLoading(true);
    const { result } = await LocationAPI.getAll(s);
    setLocations(
      result.map((data: any) => ({
        value: data.id,
        label: data.country ? `${data.name}, ${data.country.name}` : data.name,
      }))
    );
    setLoading(false);
  };

  const getDiseaseArea = async (s: string = '') => {
    setLoading(true);
    const { result } = await DiseaseAreaAPI.getAll(s);

    setDiseaseArea(
      result.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    );
    setLoading(false);
  };

  const updateInfluencer = async (body: any, id: any) => {
    if (!disabled) {
      const { locationId, diseaseAreas, socialPlatforms, ...rest } = body;

      const newBody = {
        ...rest,
        locationId: locationId.value,
        diseaseAreas: diseaseAreas.map((x: any) => x.value),
        socialPlatforms: [
          {
            authorizationCode: socialPlatforms[0].authorizationCode,
            socialPlatformId: socialPlatforms[0].socialPlatformId.value,
          },
        ],
      };

      try {
        await InfluencerAPI.updateInfluencer(newBody, id);
        push('Successfully updated Influencer', { variant: 'success' });
        onClose();
      } catch {
        push('Something went wrong.', { variant: 'error' });
      }
    }
  };

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  useEffect(() => {
    getInfluencer();
    getLocations();
    getDiseaseArea();
  }, []);

  useEffect(() => {
    if (influencer) {
      console.log(influencer);

      setState({
        ...state,
        firstName: influencer.firstName,
        lastName: influencer.lastName,
        email: influencer.email,
        locationId: influencer.locationId,
      });
    }
  }, [influencer]);

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleNewTag = (v: any) => {
    setState({ ...state, diseaseAreas: [...state.diseaseAreas, v] });
  };

  return (
    <Modal
      size="medium"
      title={
        <InfluencerTitle>
          {state.firstName} {state.lastName}
          <EditIcon
            style={
              disabled
                ? { cursor: 'pointer', color: '#7E839F' }
                : { cursor: 'pointer', color: '#448DC9' }
            }
            onClick={handleDisabled}
          />
        </InfluencerTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => updateInfluencer(state, influencerId)}
        >
          {disabled ? 'Close' : 'Save'}
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <InfluencerProfileModalMain columns={2}>
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
          <Input
            type="text"
            label="Email"
            placeholder="Please Enter"
            disabled={disabled}
            value={state.email}
            onValue={(email) => setState({ ...state, email })}
          />
          <Input
            type="select"
            label="Social Media"
            placeholder="Please Enter"
            disabled={disabled}
            value={state.socialPlatforms[0].socialPlatformId}
            onValue={(socialMedia) => {
              setState({
                ...state,
                socialPlatforms: [
                  {
                    socialPlatformId: socialMedia,
                    authorizationCode: '',
                  },
                ],
              });
            }}
            options={[
              {
                value: 0,
                label: 'Instagram',
              },
              {
                value: 1,
                label: 'Twitter',
              },
              {
                value: 2,
                label: 'Facebook',
              },
            ]}
          />
          <Input
            type="text"
            label="Username"
            placeholder="Please Enter"
            disabled={disabled}
            value={state.username}
            onValue={(username) => setState({ ...state, username })}
          />
          <Input
            type="multiselect"
            label="Disease Area"
            placeholder="Please Enter"
            disabled={disabled}
            value={state.diseaseAreas}
            onSearch={debounce(getDiseaseArea, 250)}
            onValue={(input) => {
              setState({ ...state, diseaseAreas: input });
            }}
            onNewTag={handleNewTag}
            loading={loading}
            options={diseaseArea}
          />
          <Input
            type="select"
            label="Location"
            placeholder="Please Enter"
            disabled={disabled}
            value={state.locationId}
            onSearch={debounce(getLocations, 250)}
            onValue={(input) => setState({ ...state, locationId: input })}
            loading={loading}
            options={locations}
          />
          <Input
            type="number"
            label="Followers"
            placeholder="Please Enter"
            disabled={disabled}
            value={state.followers}
            onValue={(followers) => setState({ ...state, followers })}
          />
        </InfluencerProfileModalMain>
      </Stack>
    </Modal>
  );
};

export default InfluencerProfile;
