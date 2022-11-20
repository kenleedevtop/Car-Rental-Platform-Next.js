import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddInfluencerModalProps } from 'features/discover-influencers/elements/add-influencer-modal/types';
import { AddInfluencerModalMain } from 'features/discover-influencers/elements/add-influencer-modal/styles';
import { Button, Input } from 'components/ui';

const AddInfluencerModal = ({
  onClose,
  ...props
}: TAddInfluencerModalProps) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    socialMedia: null,
    diseaseArea: null,
    location: null,
    followers: '',
  });

  return (
    <Modal
      size="medium"
      title="Add Influencer"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
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
          label="Last Name"
          placeholder="Please Enter"
          value={state.lastName}
          onValue={(lastName) => setState({ ...state, lastName })}
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
          onValue={(socialMedia) => setState({ ...state, socialMedia })}
        />
        <Input
          type="select"
          label="Disease Area"
          placeholder="Please Select"
          value={state.diseaseArea}
          onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
        />
        <Input
          type="select"
          label="Location"
          placeholder="Please Select"
          value={state.location}
          onValue={(location) => setState({ ...state, location })}
        />
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
