import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TApproveFinanceModalProps } from 'features/finance/role/admin/elements/approve-finance-modal/types';
import {
  ApproveFinanceModalMain,
  ApproveFinanceText,
} from 'features/finance/role/admin/elements/approve-finance-modal/styles';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const ApproveFinanceModal = ({
  onClose,
  ...props
}: TApproveFinanceModalProps) => {
  const [state, setState] = useState({
    message: '',
  });

  return (
    <Modal
      size="small"
      title="Are you sure?"
      actions={[
        <Button
          color="default"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          No
        </Button>,
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Yes
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <ApproveFinanceModalMain columns={1}>
          <ApproveFinanceText>
            Are you sure you want to approve &lt;Cost&gt; <br />
            Operation cannot be undone.
          </ApproveFinanceText>
          <Input
            type="text"
            label="Message"
            multiline
            placeholder="Write Comment"
            value={state.message}
            onValue={(message) => setState({ ...state, message })}
          />
        </ApproveFinanceModalMain>
      </Stack>
    </Modal>
  );
};

export default ApproveFinanceModal;
