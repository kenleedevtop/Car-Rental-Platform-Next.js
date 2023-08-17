import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  AddProjectHeadline,
  AddProjectDocumentPlaceholder,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ExportFinanceModal = ({
  onClose,
  ...props
}: TExportFinanceModalProps) => {
  const [state, setState] = useState();

  return (
    <Modal
      size="small"
      title="Purchase"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Add
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain columns={1}>
        <Input
          type="text"
          label="Tokens"
          value={null}
          onValue={() => {}}
          placeholder="Please Enter"
        />
        <Input
          type="select"
          label="Payment Method"
          value={null}
          onValue={() => {}}
          placeholder="Please Select"
          options={[
            {
              value: 0,
              label: 'Card',
            },
            {
              value: 1,
              label: 'Ayden',
            },
            {
              value: 2,
              label: 'Stripe',
            },
            {
              value: 3,
              label: 'Paypal',
            },
          ]}
        />

        {/* BASED ON SELECT OPTION HERE WILL DISPLAY DIFFERENT PAYMENT METHOD API  */}
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;
