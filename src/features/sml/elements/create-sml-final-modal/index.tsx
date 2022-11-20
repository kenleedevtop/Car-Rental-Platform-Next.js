import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TCreateSmlFinalProps } from 'features/sml/elements/create-sml-final-modal/types';
import { CreateSmlFinalMain } from 'features/sml/elements/create-sml-final-modal/style';
import { Button, Input, Switch } from 'components/ui';

const CreateSmlFinal = ({ onClose, ...props }: TCreateSmlFinalProps) => {
  const [state, setState] = useState({});

  return (
    <Modal
      size="small"
      title="Are you sure?"
      actions={[
        <Button
          color="default"
          size="large"
          variant="contained"
          onClick={onClose}
        >
          No
        </Button>,
        <Button
          color="primary"
          size="large"
          variant="contained"
          onClick={onClose}
        >
          Yes
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      SML report hasn&apos;t been created yet. Are you sure you want to create
      it? Operation cannot be undone.
    </Modal>
  );
};

export default CreateSmlFinal;
