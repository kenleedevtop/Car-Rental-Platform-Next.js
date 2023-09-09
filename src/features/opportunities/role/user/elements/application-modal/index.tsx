import React, { useState, Children } from 'react';
import { CallendlyWidget, Modal } from 'components/custom';
import { TApplyModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  RTEContainer,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';

const ExportFinanceModal = ({ onClose, ...props }: TApplyModalProps) => {
  const [state, setState] = useState();

  return (
    <Modal
      size="medium"
      title="Application"
      actions={Children.toArray([
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Apply
        </Button>,
      ])}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain>
        <Input
          type="text"
          label="Shares"
          value=""
          onValue={() => {}}
          placeholder="Please Select"
        />
        <Input
          type="select"
          label="Total Price"
          value=""
          onValue={() => {}}
          placeholder="Please Select"
        />
        <RTEContainer>
          <CallendlyWidget />
        </RTEContainer>
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;