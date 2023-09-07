import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { Button, RadioButton } from 'components/ui';
import { TExportInfluencersModalProps } from './types';
import { ExportInfluencersModalMain } from './styles';

const ExportInfluencersModal = ({
  onClose,
  onExport,
  ...props
}: TExportInfluencersModalProps) => {
  const [radioState, setRadioState] = useState('all');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(e.target.value);
  };

  return (
    <Modal
      size="small"
      title="Do you want to export:"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => onExport(radioState)}
        >
          Export
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <ExportInfluencersModalMain columns={2}>
        <RadioButton
          checked={radioState === 'all'}
          onChange={handleChange}
          value="all"
          label="All"
        />
        <RadioButton
          checked={radioState === 'selected'}
          onChange={handleChange}
          value="selected"
          label="Selected"
        />
      </ExportInfluencersModalMain>
    </Modal>
  );
};

export default ExportInfluencersModal;
