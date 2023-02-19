import React, { useState, useEffect } from 'react';
import { Modal } from 'components/custom';
import { TInviteAmbassadorsModalProps } from 'features/ambassadors/role/admin/elements/invite-ambassadors/types';
import { InviteAmbassadorsModalMain } from 'features/ambassadors/role/admin/elements/invite-ambassadors/styles';
import { Button, Input } from 'components/ui';
import { IconButton } from '@mui/material';
import { CopyIcon } from 'components/svg';
import { AdminAPI } from 'api';
import { useSnackbar } from 'hooks';

const InviteAmbassadors = ({
  onClose,
  ...props
}: TInviteAmbassadorsModalProps) => {
  const [link, setLink] = useState('');
  const { push } = useSnackbar();

  const handleInviteLink = async () => {
    try {
      const { inviteLink } = await AdminAPI.createAmbassadorInviteLink();
      setLink(inviteLink);
    } catch {
      push('Something failed!', {
        variant: 'error',
      });
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      push(`Successfully copied!`, {
        variant: 'success',
      });
    } catch {
      push('Something failed!', {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    handleInviteLink();
  }, []);

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
              <CopyIcon onClick={handleCopyToClipboard} />
            </IconButton>
          }
          onValue={(v) => setLink(v)}
        />
      </InviteAmbassadorsModalMain>
    </Modal>
  );
};

export default InviteAmbassadors;
