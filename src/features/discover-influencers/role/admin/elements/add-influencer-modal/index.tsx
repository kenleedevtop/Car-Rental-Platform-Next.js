import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TAddInfluencerModalProps } from 'features/discover-influencers/role/admin/elements/add-influencer-modal/types';
import { AddInfluencerModalMain } from 'features/discover-influencers/role/admin/elements/add-influencer-modal/styles';
import { Button, Input } from 'components/ui';
import { AdminAPI } from 'api';
import { useSnackbar } from 'hooks';
import { GridCell } from 'components/system';

const AddInfluencerModal = ({
  onClose,
  ...props
}: TAddInfluencerModalProps) => {
  const [state, setState] = useState({
    firstName: '',
    email: '',
    location: '',
    diseaseArea: '',
    username: '',
    socialMedia: '',
    followers: 0,
  });

  const { push } = useSnackbar();
  const [diseases, setDiseases] = useState([]);
  const [subDiseases, setSubDiseases] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [location, setLocation] = useState([]);

  const getSocialMedia = async () => {
    const data = await AdminAPI.getSocialMedia();

    setSocialMedia(
      data.socialMedia.map((x: any, id: number) => ({
        value: x.toUpperCase(),
        label: x,
      }))
    );
  };

  const getDiseases = async () => {
    const data = await AdminAPI.getDiseaseAreas();
    setDiseases(
      data
        .map((x: any) =>
          x.SubDiseaseAreas.map((y: any) => ({
            value: x.id + y.id,
            label: `${y.name}, ${x.name}`,
          }))
        )
        .flat()
    );
  };

  const getLocation = async () => {
    const data = await AdminAPI.getLocation();

    setLocation(
      data.map((x: any) => ({
        value: x.countryId + x.cityId,
        label: `${x.cityName}, ${x.countryName}`,
      }))
    );
  };

  useEffect(() => {
    getDiseases();
    getSocialMedia();
    getLocation();
  }, []);

  useEffect(() => {
    console.log('State', state);
  }, [state]);

  const isDisabled =
    !state.firstName ||
    !state.email ||
    !state.username ||
    !state.socialMedia ||
    !state.diseaseArea ||
    !state.location ||
    !state.followers;

  const handleInfluencers = async () => {
    try {
      await AdminAPI.addInfluencer(state);
      push('Successfully added Influencer!', { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  return (
    <Modal
      size="medium"
      title="Add Influencer"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={isDisabled}
          onClick={() => {
            handleInfluencers();
            onClose();
          }}
        >
          Add
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddInfluencerModalMain columns={2}>
        <Input
          type="text"
          label="First Name"
          placeholder="Please Enter"
          value={state.firstName}
          onValue={(firstName) => setState({ ...state, firstName })}
        />
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
        <Input
          type="select"
          label="Social Media"
          placeholder="Please Select"
          value={state.socialMedia}
          onValue={(socialMediaValue) =>
            setState({ ...state, socialMedia: socialMediaValue.value })
          }
          options={socialMedia}
        />
        <Input
          type="number"
          label="Followers"
          placeholder="Please Enter"
          value={state.followers}
          onValue={(followers) =>
            setState({ ...state, followers: parseInt(followers, 10) })
          }
        />
        <GridCell columnSpan={2}>
          <Input
            type="select"
            label="Disease Area"
            placeholder="Please Select"
            value={state.diseaseArea}
            onValue={(diseaseArea) =>
              setState({ ...state, diseaseArea: diseaseArea.value })
            }
            options={diseases}
          />
        </GridCell>
        <GridCell columnSpan={2}>
          <Input
            type="select"
            label="Location"
            placeholder="Please Select"
            value={state.location}
            onValue={(inputLocation) =>
              setState({ ...state, location: inputLocation.value })
            }
            options={location}
          />
        </GridCell>
      </AddInfluencerModalMain>
    </Modal>
  );
};

export default AddInfluencerModal;
