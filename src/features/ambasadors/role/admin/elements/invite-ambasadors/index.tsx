import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TInviteAmbasadorsModalProps } from 'features/ambasadors/role/admin/elements/invite-ambasadors/types';
import { InviteAmbasadorsModalMain } from 'features/ambasadors/role/admin/elements/invite-ambasadors/styles';
import { Button, Input } from 'components/ui';
import { IconButton } from '@mui/material';
import { CopyIcon } from 'components/svg';

const InviteAmbasadors = ({
  onClose,
  ...props
}: TInviteAmbasadorsModalProps) => {
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
      <InviteAmbasadorsModalMain>
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
      </InviteAmbasadorsModalMain>
    </Modal>
  );
};

export default InviteAmbasadors;
