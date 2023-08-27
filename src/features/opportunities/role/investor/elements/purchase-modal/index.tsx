import React, { useState, Children } from 'react';
import { CallendlyWidget, Modal } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  RTEContainer,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import { GridCell } from 'components/system';

const ExportFinanceModal = ({
  onClose,
  ...props
}: TExportFinanceModalProps) => {
  const [state, setState] = useState();

  return (
    <Modal
      size="medium"
      title="Sell Shares?"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Sell
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain>
        <Input
          type="select"
          label="Boat"
          value=""
          onValue={() => {}}
          placeholder="Please Enter"
        />
        <Input
          type="select"
          label="Shares"
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
