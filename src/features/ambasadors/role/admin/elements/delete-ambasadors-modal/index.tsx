import React from 'react';
import { Modal } from 'components/custom';
import { TDeleteAmbasadorsModalProps } from 'features/ambasadors/role/admin/elements/delete-ambasadors-modal/types';
import { DeleteAmbasadorsModalMain } from 'features/ambasadors/role/admin/elements/delete-ambasadors-modal/styles';
import { Button } from 'components/ui';

const DeleteAmbasadorsModal = ({
  onClose,
  ...props
}: TDeleteAmbasadorsModalProps) => (
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
    <DeleteAmbasadorsModalMain>
      Are you sure that you want to remove ambasador? <br /> Operation cannot be
      undone.
    </DeleteAmbasadorsModalMain>
  </Modal>
);

export default DeleteAmbasadorsModal;
