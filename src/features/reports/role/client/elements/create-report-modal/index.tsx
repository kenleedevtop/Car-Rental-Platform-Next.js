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
        <Switch label="Reach" helper="?" />
        <Switch label="Cost per Target" helper="?" />
        <Switch label="Number of Likes" helper="?" />
        <Switch label="Cost per Click" helper="?" />
        <Switch label="Number of Comments" helper="?" />
        <Switch label="Overlap" helper="?" />
        <Switch label="Website Clicks" helper="?" />
        <Switch label="Brand Mentions" helper="?" />
        <Switch label="Engagement" helper="?" />
        <Switch label="New Followers" helper="?" />
        <Switch label="Comments" helper="?" />
        <Switch label="Social Media Listening" helper="?" />
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
