import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddReportModalProps } from 'features/reports/role/admin/elements/create-report-modal/types';
import { AddReportModalMain } from 'features/reports/role/admin/elements/create-report-modal/styles';
import { Button, Input, Switch } from 'components/ui';
import { GridCell } from 'components/system';
import { useModal } from 'hooks';
import { ApproveReportsModal } from 'features/reports/role/admin/elements';

const AddReportModal = ({ onClose, ...props }: TAddReportModalProps) => {
  const [state, setState] = useState({
    campaign: null,
    type: null,
    budget: '',
    additional: '',
  });

  const [arModal, openArModal, closeArModal] = useModal(false);

  return (
    <Modal
      size="medium"
      title="Create Report"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={openArModal}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddReportModalMain columns={2}>
        <Input
          type="select"
          label="Campaign"
          placeholder="Select Campaign"
          value={state.campaign}
          onValue={(campaign) => setState({ ...state, campaign })}
        />
        <Input
          type="select"
          label="Report Type"
          placeholder="Basic"
          value={state.type}
          onValue={(type) => setState({ ...state, type })}
        />
        <Input
          type="text"
          label="Budget"
          placeholder="Please Enter"
          value={state.budget}
          onValue={(budget) => setState({ ...state, budget })}
        />
        <GridCell columnSpan={2}>
          <Input
            type="text"
            label="Additional Information"
            value={state.additional}
            onValue={(additional) => setState({ ...state, additional })}
            multiline
            rows={5}
          />
        </GridCell>
      </AddReportModalMain>
      {arModal && <ApproveReportsModal onClose={closeArModal} />}
    </Modal>
  );
};

export default AddReportModal;
