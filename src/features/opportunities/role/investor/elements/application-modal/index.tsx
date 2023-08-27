import React, { useState, Children } from 'react';
import { CallendlyWidget, Modal, Tabs } from 'components/custom';
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
