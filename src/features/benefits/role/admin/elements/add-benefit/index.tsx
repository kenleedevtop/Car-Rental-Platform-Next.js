import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddBenefitModalProps } from 'features/benefits/role/admin/elements/add-benefit/types';
import { AddBenefitModalMain } from 'features/benefits/role/admin/elements/add-benefit/styles';
import { Button, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';

const AddBenefitModal = ({ onClose, ...props }: TAddBenefitModalProps) => {
  const [state, setState] = useState({
    name: '',
    website: '',
    category: '',
    location: '',
    benefit: '',
  });

  return (
    <Modal
      size="medium"
      title="Add Benefit"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Confirm
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <AddBenefitModalMain columns={2}>
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
            type="text"
            label="Category"
            value={state.category}
            onValue={(category) => setState({ ...state, category })}
          />
          <Input
            type="text"
            label="Location"
            value={state.location}
            onValue={(location) => setState({ ...state, location })}
          />
          <GridCell columnSpan={2}>
            <Input
              multiline
              rows={3}
              type="text"
              label="Benefit"
              value={state.benefit}
              onValue={(benefit) => setState({ ...state, benefit })}
            />
          </GridCell>
        </AddBenefitModalMain>
      </Stack>
    </Modal>
  );
};

export default AddBenefitModal;
