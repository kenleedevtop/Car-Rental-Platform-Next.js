import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddCampaignsModalProps } from 'features/campaigns/role/client/elements/add-campaign-modal/types';
import { AddCampaignsModalMain } from 'features/campaigns/role/client/elements/add-campaign-modal/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { Stack } from 'components/system';

const AddCampaignModal = ({ onClose, ...props }: TAddCampaignsModalProps) => {
  const [state, setState] = useState({
    name: '',
    website: '',
    argument: '',
    outcome: '',
  });

  return (
    <Modal
      size="medium"
      title="Suggestion"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Make Suggestion
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <AddCampaignsModalMain>
          <Input
            type="text"
            label="Company Name"
            placeholder="Please Enter"
            value={state.name}
            onValue={(name) => setState({ ...state, name })}
          />
          <Input
            type="text"
            label="Company website"
            placeholder="Please Enter"
            value={state.website}
            onValue={(website) => setState({ ...state, website })}
          />
          <Input
            multiline
            rows={3}
            type="text"
            label="Argument"
            value={state.argument}
            onValue={(argument) => setState({ ...state, argument })}
          />
          <Input
            multiline
            rows={3}
            type="text"
            label="Desired outcome"
            value={state.outcome}
            onValue={(outcome) => setState({ ...state, outcome })}
          />
        </AddCampaignsModalMain>
      </Stack>
    </Modal>
  );
};

export default AddCampaignModal;
