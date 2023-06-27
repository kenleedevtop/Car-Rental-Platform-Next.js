import React from 'react';
import { Modal } from 'components/custom';
import { DeleteInfluencerModalMain } from 'features/discover-influencers/role/admin/elements/delete-influencer-modal/styles';
import { Button } from 'components/ui';
import { TPromptInfluencerModalProps } from './types';

const PromptModal = ({
  onClose,
  handleAction,
  type = 'delete',
  plural = false,
  ...props
}: TPromptInfluencerModalProps) => {
  const action = type === 'delete' ? 'Delete' : 'Approve';
  const entity = plural ? 'Influencers' : 'Influencer';
  return (
    <Modal
      size="small"
      title={`${action} ${entity}`}
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
            handleAction().then(() => {
              onClose();
            });
          }}
        >
          Yes
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <DeleteInfluencerModalMain>
        Are you sure that you want to {action.toLowerCase()}{' '}
        {plural ? 'selected influencers' : 'selected influencer'}? <br />{' '}
        Operation cannot be undone.
      </DeleteInfluencerModalMain>
    </Modal>
  );
};

export default PromptModal;
