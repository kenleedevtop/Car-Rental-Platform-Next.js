import React, { useEffect, useState } from 'react';
import { Modal } from 'components/custom';
import { TAddReportModalProps } from 'features/reports/role/client/elements/create-report-modal/types';
import { AddReportModalMain } from 'features/reports/role/client/elements/create-report-modal/styles';
import { Button, Input } from 'components/ui';
import { GridCell } from 'components/system';
import { CampaignAPI, EnumsApi } from 'api';
import { useSnackbar } from 'hooks';

const AddReportModal = ({
  onClose,
  refresh,
  ...props
}: TAddReportModalProps) => {
  const [state, setState] = useState<any>({
    campaign: null,
    reportType: null,
    budget: '',
    additional: '',
  });

  const [reportTypes, setReportTypes] = useState<any>([]);
  const [campaigns, setCampaigns] = useState<any>([]);

  const getReportTypes = async () => {
    const result = await EnumsApi.getReportTypes();

    setReportTypes(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getCampaigns = async (s: string = '') => {
    const { result } = await CampaignAPI.getCampaigns(s);

    setCampaigns(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const { push } = useSnackbar();

  useEffect(() => {
    getReportTypes();
    getCampaigns();
  }, []);

  const createReport = async () => {
    try {
      await CampaignAPI.createReport({
        campaignId: state.campaign.value,
        budget: parseInt(state.budget, 10),
        reportType: state.reportType.value,
        description: state.additional,
      });
      push('Successfully createad a report.', { variant: 'success' });
    } catch {
      push('Report creation failed.', { variant: 'error' });
    }
  };

  return (
    <Modal
      size="medium"
      title="Create Report"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={async () => {
            createReport();
            refresh();
            onClose();
          }}
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
          label="Campaign"
          placeholder="Please Select"
          value={state.campaign}
          onValue={(campaign) => setState({ ...state, campaign })}
          options={campaigns}
        />
        <Input
          type="select"
          label="Report Type"
          placeholder="Basic"
          value={state.reportType}
          onValue={(reportType) => setState({ ...state, reportType })}
          options={reportTypes}
        />
        <Input
          type="number"
          label="Budget"
          placeholder="Please Enter"
          value={state.budget}
          onValue={(budget) => setState({ ...state, budget })}
        />

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
