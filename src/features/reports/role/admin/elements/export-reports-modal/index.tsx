import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TExportReportsModalProps } from 'features/reports/role/admin/elements/export-reports-modal/types';
import { ExportReportsModalMain } from 'features/reports/role/admin/elements/export-reports-modal/styles';
import { Button, RadioButton } from 'components/ui';

const ExportReportsModal = ({
  onClose,
  ...props
}: TExportReportsModalProps) => {
  const [radioState, setRadioState] = useState('');

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
          onClick={onClose}
        >
          Export
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <ExportReportsModalMain columns={2}>
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
      </ExportReportsModalMain>
    </Modal>
  );
};

export default ExportReportsModal;
