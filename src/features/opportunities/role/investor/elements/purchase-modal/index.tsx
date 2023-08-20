import React, { useState } from 'react';
import { CallendlyWidget, Modal } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/elements/export-finance-modal/types';
import { AddProjectModalMain } from 'features/opportunities/role/admin/elements/add-project-modal/style';
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
      <AddProjectModalMain columns={2}>
        <Input
          type="select"
          label="House"
          value={null}
          onValue={() => {}}
          placeholder="Please Enter"
        />
        <Input
          type="select"
          label="Shares"
          value={null}
          onValue={() => {}}
          placeholder="Please Select"
        />
        <GridCell columnSpan={2}>
          <CallendlyWidget />
        </GridCell>
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;
