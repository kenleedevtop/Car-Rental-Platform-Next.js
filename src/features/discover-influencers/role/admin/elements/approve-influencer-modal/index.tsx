import React from 'react';
import { Modal } from 'components/custom';
import { DeleteInfluencerModalMain } from 'features/discover-influencers/role/admin/elements/delete-influencer-modal/styles';
import { Button } from 'components/ui';
import { TPromptInfluencerModalProps } from './types';

const PromptModal = ({
  onClose,
  handleAction,
  type = 'delete',
  ...props
}: TPromptInfluencerModalProps) => (
  <Modal
    size="small"
    title={`${type === 'delete' ? 'Delete Influencer' : 'Approve Influencer'}`}
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
        onClick={() => {
          handleAction();
          onClose();
        }}
      >
        Yes
      </Button>,
    ]}
    onClose={onClose}
    {...props}
  >
    <DeleteInfluencerModalMain>
      Are you sure that you want to {type === 'delete' ? 'remove' : 'approve'}{' '}
      influencer? <br /> Operation cannot be undone.
    </DeleteInfluencerModalMain>
  </Modal>
);

export default PromptModal;
