import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportInfluencersModalProps } from 'features/discover-influencers/role/admin/elements/export-influencers-modal/types';
import { ExportInfluencersModalMain } from 'features/discover-influencers/role/admin/elements/export-influencers-modal/styles';
import { Button, Checkbox, RadioButton } from 'components/ui';

const ExportInfluencersModal = ({
  onClose,
  ...props
}: TExportInfluencersModalProps) => {
  const [state, setState] = useState({
    identified: false,
    registered: false,
    contacted: false,
    toBeApproved: false,
  });

  const [radioState, setRadioState] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(e.target.value);
  };

  return (
    <Modal
      size="small"
      title="Do you want to export:"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Export
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <ExportInfluencersModalMain columns={2}>
        <RadioButton
          checked={radioState === 'all'}
          onChange={handleChange}
          value="all"
          label="All"
        />
        <RadioButton
          checked={radioState === 'selected'}
          onChange={handleChange}
          value="selected"
          label="Selected"
        />
        <Checkbox
          color="secondary"
          label="Identified"
          size="large"
          value={state.identified}
          onValue={(identified) => setState({ ...state, identified })}
        />
        <Checkbox
          color="secondary"
          label="Registered"
          size="large"
          value={state.registered}
          onValue={(registered) => setState({ ...state, registered })}
        />
        <Checkbox
          color="secondary"
          label="Contacted"
          size="large"
          value={state.contacted}
          onValue={(contacted) => setState({ ...state, contacted })}
        />
        <Checkbox
          color="secondary"
          label="To Be Approved"
          size="large"
          value={state.toBeApproved}
          onValue={(toBeApproved) => setState({ ...state, toBeApproved })}
        />
      </ExportInfluencersModalMain>
    </Modal>
  );
};

export default ExportInfluencersModal;
