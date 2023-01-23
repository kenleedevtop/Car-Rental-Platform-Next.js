import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TInviteAmbassadorsModalProps } from 'features/ambassadors/role/admin/elements/invite-ambassadors/types';
import { InviteAmbassadorsModalMain } from 'features/ambassadors/role/admin/elements/invite-ambassadors/styles';
import { Button, Input } from 'components/ui';
import { IconButton } from '@mui/material';
import { CopyIcon } from 'components/svg';

const InviteAmbassadors = ({
  onClose,
  ...props
}: TInviteAmbassadorsModalProps) => {
  const [link, setLink] = useState('test');

  return (
    <Modal
      size="small"
      title="Invite Ambassador"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Close
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <InviteAmbassadorsModalMain>
        <Input
          type="text"
          label="Link"
          value={link}
          disabled
          endAdornment={
            <IconButton>
              <CopyIcon
                onClick={() => {
                  navigator.clipboard.writeText(link);
                }}
              />
            </IconButton>
          }
          onValue={(v) => setLink(v)}
        />
      </InviteAmbassadorsModalMain>
    </Modal>
  );
};

export default InviteAmbassadors;
