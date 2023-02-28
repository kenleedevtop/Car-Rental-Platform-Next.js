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
    country: '',
    city: '',
    diseaseArea: '',
    username: '',
    socialMedia: '',
    followers: 0,
  });

  const { push } = useSnackbar();
  const [diseases, setDiseases] = useState([]);
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
      data
        .map((x: any) =>
          x.SubDiseaseAreas.map((y: any) => ({
            value: `${x.id},${y.id}`,
            label: `${y.name}, ${x.name}`,
          }))
        )
        .flat()
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
