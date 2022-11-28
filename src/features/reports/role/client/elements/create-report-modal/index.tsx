import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TAddReportModalProps } from 'features/reports/role/admin/elements/create-report-modal/types';
import { AddReportModalMain } from 'features/reports/role/admin/elements/create-report-modal/styles';
import { Button, Input, Switch } from 'components/ui';
import { GridCell } from 'components/system';

const AddReportModal = ({ onClose, ...props }: TAddReportModalProps) => {
  const [state, setState] = useState({
    reportType: null,
    additional: '',
  });

  return (
    <Modal
      size="medium"
      title="Create Report"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create Report
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <AddReportModalMain columns={2}>
        <Input
          type="select"
          label="Report Type"
          placeholder="Basic"
          value={state.reportType}
          onValue={(reportType) => setState({ ...state, reportType })}
        />
        <br />
        <Switch label="Reach" />
        <Switch label="Cost per Target" />
        <Switch label="Number of Likes" />
        <Switch label="Cost per Click" />
        <Switch label="Number of Comments" />
        <Switch label="Overlap" />
        <Switch label="Website Clicks" />
        <Switch label="Brand Mentions" />
        <Switch label="Engagement" />
        <Switch label="New Followers" />
        <Switch label="Comments" />
        <Switch label="Social Media Listening" />
        <GridCell columnSpan={2}>
          <Input
            type="text"
            label="Additional Information"
            value={state.additional}
            onValue={(additional) => setState({ ...state, additional })}
            multiline
            rows={5}
          />
        </GridCell>
      </AddReportModalMain>
    </Modal>
  );
};

export default AddReportModal;
