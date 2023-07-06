import React from 'react';
import Image from 'next/image';

import { Modal } from 'components/custom';
import { Stack } from 'components/system';
import { Button } from 'components/ui';
import { TUploadedFileModalProps } from './types';

const UploadedFileModal = ({ onClose, name, url }: TUploadedFileModalProps) => (
  <Modal
    title={name}
    onClose={onClose}
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
  >
    <Stack style={{ padding: '10px' }}>
      <Image src={url} alt={name} width={100} height={100} loading="lazy" />
    </Stack>
  </Modal>
);

export default UploadedFileModal;
