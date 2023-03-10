import React from 'react';
import { Modal } from 'components/custom';
import { TDeleteInfluencerModalProps } from 'features/discover-influencers/role/admin/elements/delete-influencer-modal/types';
import { DeleteInfluencerModalMain } from 'features/discover-influencers/role/admin/elements/delete-influencer-modal/styles';
import { Button } from 'components/ui';
import { AdminAPI } from 'api';
import { useSnackbar } from 'hooks';

const DeleteInfluencerModal = ({
  onClose,
  id,
  ...props
}: TDeleteInfluencerModalProps) => {
  const { push } = useSnackbar();

  const handleDelete = async () => {
    try {
      await AdminAPI.deleteInfluencer(id);
      push('Influencer successfully deleted!', { variant: 'success' });
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  return (
    <Modal
      size="small"
      title="Delete Influencer"
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
            handleDelete();
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
        Are you sure that you want to remove influencer? <br /> Operation cannot
        be undone.
      </DeleteInfluencerModalMain>
    </Modal>
  );
};

export default DeleteInfluencerModal;
