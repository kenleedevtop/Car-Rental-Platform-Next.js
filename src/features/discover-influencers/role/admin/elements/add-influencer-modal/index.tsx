import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TAddInfluencerModalProps } from 'features/discover-influencers/role/admin/elements/add-influencer-modal/types';
import { AddInfluencerModalMain } from 'features/discover-influencers/role/admin/elements/add-influencer-modal/styles';
import { Button, Input } from 'components/ui';
import { AdminAPI } from 'api';
import { useSnackbar } from 'hooks';

const AddInfluencerModal = ({
  onClose,
  ...props
}: TAddInfluencerModalProps) => {
  const [state, setState] = useState({
    firstName: '',
    email: '',
    country: '',
    city: '',
    diseaseArea: '',
    subDiseaseArea: '',
    username: '',
    socialMedia: '',
    followers: 0,
  });

  const { push } = useSnackbar();
  const [diseases, setDiseases] = useState([]);
  const [subDiseases, setSubDiseases] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  const getSocialMedia = async () => {
    const data = await AdminAPI.getSocialMedia();

    setSocialMedia(
      data.socialMedia.map((x: any, id: number) => ({ value: id, label: x }))
    );
  };

  const getDiseases = async () => {
    const data = await AdminAPI.getDiseaseAreas();
    setDiseases(
      data.map((x: any) => ({
        value: x.id,
        label: x.name,
        SubDiseaseAreas: x.SubDiseaseAreas,
      }))
    );
  };

  const handleDiseases = (diseaseArea: any) => {
    setState({ ...state, diseaseArea: diseaseArea.value, subDiseaseArea: '' });
    setSubDiseases(
      diseaseArea.SubDiseaseAreas.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  useEffect(() => {
    getDiseases();
    getSocialMedia();
  }, []);

  const isDisabled =
    !state.firstName ||
    !state.email ||
    !state.username ||
    !state.socialMedia ||
    !state.diseaseArea ||
    !state.subDiseaseArea ||
    !state.country ||
    !state.city ||
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
          type="select"
          label="Disease Area"
          placeholder="Please Select"
          value={state.diseaseArea}
          onValue={handleDiseases}
          options={diseases}
        />
        {state.diseaseArea !== '' && (
          <Input
            type="select"
            label="Subdisease Area"
            placeholder="Please Select"
            value={state.subDiseaseArea}
            onValue={(subDiseaseArea) =>
              setState({ ...state, subDiseaseArea: subDiseaseArea.value })
            }
            options={subDiseases}
          />
        )}
        <Input
          type="select"
          label="Country"
          placeholder="Please Select"
          value={state.country}
          onValue={(country) => setState({ ...state, country: country.value })}
          options={[
            {
              value: 'vienna',
              label: 'Vienna',
            },
          ]}
        />
        {state.country !== '' && (
          <Input
            type="select"
            label="City"
            placeholder="Please Select"
            value={state.city}
            onValue={(city) => setState({ ...state, city: city.value })}
            options={[
              {
                value: 'vienna',
                label: 'Vienna',
              },
            ]}
          />
        )}
        <Input
          type="number"
          label="Followers"
          placeholder="Please Enter"
          value={state.followers}
          onValue={(followers) => setState({ ...state, followers })}
        />
      </AddInfluencerModalMain>
    </Modal>
  );
};

export default AddInfluencerModal;
