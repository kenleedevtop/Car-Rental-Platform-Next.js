import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportInfluencersModalProps } from 'features/discover-influencers/role/admin/elements/export-influencers-modal/types';
import { ExportInfluencersModalMain } from 'features/discover-influencers/role/admin/elements/export-influencers-modal/styles';
import { Button, Checkbox } from 'components/ui';

const ExportInfluencersModal = ({
  onClose,
  ...props
}: TExportInfluencersModalProps) => {
  const [state, setState] = useState({
    all: false,
    selected: false,
    identified: false,
    registered: false,
    contacted: false,
    toBeApproved: false,
  });

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
        <Checkbox
          color="secondary"
          label="All"
          size="large"
          value={state.all}
          onValue={(all) => setState({ ...state, all })}
        />
        <Checkbox
          color="secondary"
          label="Selected"
          size="large"
          value={state.selected}
          onValue={(selected) => setState({ ...state, selected })}
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
