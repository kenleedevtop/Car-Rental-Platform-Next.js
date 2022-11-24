import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TNotificationsSettingsModalProps } from 'features/discover-influencers/role/admin/elements/notifications-settings-modal/types';
import { NotificationsSettingsModalMain } from 'features/discover-influencers/role/admin/elements/notifications-settings-modal/styles';
import { Button } from 'components/ui';

const NotificationsSettingsModal = ({
  onClose,
  ...props
}: TNotificationsSettingsModalProps) => {
  const [state, setState] = useState({
    beforeMeeting: {
      days: '',
      hours: '',
    },
    beforeTask: {
      days: '',
      hours: '',
    },
    beforeReminder: {
      days: '',
      hours: '',
    },
    statusUnchangedMoreThan: {
      days: '',
      hours: '',
    },
    registered: false,
    verified: false,
  });

  return (
    <Modal
      size="small"
      title="Notifications Settings"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Save
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <NotificationsSettingsModalMain columns={2}>
        aa
      </NotificationsSettingsModalMain>
    </Modal>
  );
};

export default NotificationsSettingsModal;
