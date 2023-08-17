import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  AddProjectHeadline,
  AddProjectDocumentPlaceholder,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';

const ExportFinanceModal = ({
  onClose,
  ...props
}: TExportFinanceModalProps) => {
  const [state, setState] = useState();

  return (
    <Modal
      size="medium"
      title="Application"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Apply
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain columns={2}>
        <Input
          type="text"
          label="Balance"
          value={null}
          onValue={() => {}}
          placeholder="Please Enter"
        />
        <Input
          type="select"
          label="Application Type"
          value={null}
          onValue={() => {}}
          placeholder="Please Select"
        />
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;
