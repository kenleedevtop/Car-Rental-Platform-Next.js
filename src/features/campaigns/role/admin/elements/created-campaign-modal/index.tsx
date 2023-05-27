import React, { useState } from 'react';
import { Chat, Modal, Tabs } from 'components/custom';
import { TAddInfluencerModalProps } from 'features/campaigns/role/admin/elements/created-campaign-modal/types';
import {
  AddInfluencerModalMain,
  CampaignsTitle,
} from 'features/campaigns/role/admin/elements/created-campaign-modal/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import { CopyIcon, EditIcon } from 'components/svg';
import { useSnackbar } from 'hooks';

const AddInfluencerModal = ({
  onClose,
  ...props
}: TAddInfluencerModalProps) => {
  const [state, setState] = useState({
    campaignName: '',
    client: null,
    product: '',
    ambassador: null,
    startDate: null,
    finishDate: null,
    report: null,
    budget: '',
    campaignInfo: '',

    numberOfInfluencers: '',
    influencerSize: null,
    diseaseArea: null,
    location: null,
    ageRange: {
      min: '',
      max: '',
    },
    gender: null,
    ethnicity: [],
    interests: [],
    targetAudienceInfo: '',

    platform: null,
    postType: null,
    image: null,
    instructions: '',

    contract: '',
    contractCheck: false,

    chat: null,
    submission: 'dsadas',
  });

  const handleFile = async () => {};

  const [tab, setTab] = useState(0);

  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  const { push } = useSnackbar();

  const [link, setLink] = useState('dsadsadsada');

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      push(`Successfully copied!`, {
        variant: 'success',
      });
    } catch {
      push('Something failed!', {
        variant: 'error',
      });
    }
  };

  return (
    <Modal
      size="medium"
      title={
        <CampaignsTitle>
          Create Campaign
          <EditIcon
            style={
              disabled
                ? { cursor: 'pointer', color: '#7E839F' }
                : { cursor: 'pointer', color: '#448DC9' }
            }
            onClick={handleDisabled}
          />
        </CampaignsTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          {disabled ? 'Close' : 'Confirm'}
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack
        style={{ height: '500px', overflowY: 'scroll', paddingRight: '10px' }}
      >
        <Tabs
          tabs={['Info', 'Target', 'Instructions', 'Contract', 'Chat']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <AddInfluencerModalMain columns={2}>
            <Input
              disabled={disabled}
              type="text"
              label="Campaign Name"
              placeholder="Please Enter"
              value={state.campaignName}
              onValue={(campaignName) => setState({ ...state, campaignName })}
            />
            <Input
              disabled={disabled}
              type="select"
              label="Client"
              placeholder="Please Select"
              value={state.client}
              onValue={(client) => setState({ ...state, client })}
            />
            <Input
              disabled={disabled}
              type="select"
              label="Product"
              placeholder="Please Enter"
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
            />
            <Input
              disabled={disabled}
              type="select"
              label="Ambassador"
              placeholder="Please Select"
              value={state.ambassador}
              onValue={(ambassador) => setState({ ...state, ambassador })}
            />
            <Input
              disabled={disabled}
              type="date"
              label="Start Date"
              placeholder="Please Enter"
              value={state.startDate}
              onValue={(startDate) => setState({ ...state, startDate })}
            />
            <Input
              disabled={disabled}
              type="date"
              label="Finish Date"
              placeholder="Please Enter"
              value={state.finishDate}
              onValue={(finishDate) => setState({ ...state, finishDate })}
            />
            <Input
              disabled={disabled}
              type="select"
              label="Report"
              placeholder="Please Select"
              value={state.report}
              onValue={(report) => setState({ ...state, report })}
            />
            <Input
              disabled={disabled}
              type="number"
              label="Budget"
              placeholder="Please Select"
              value={state.budget}
              onValue={(budget) => setState({ ...state, budget })}
            />
            <GridCell columnSpan={2}>
              <Input
                disabled={disabled}
                multiline
                rows={5}
                type="text"
                label="Campaign Info"
                placeholder="Please Enter"
                value={state.campaignInfo}
                onValue={(campaignInfo) => setState({ ...state, campaignInfo })}
              />
            </GridCell>
          </AddInfluencerModalMain>
        )}
        {tab === 1 && (
          <AddInfluencerModalMain columns={2}>
            <Input
              disabled={disabled}
              type="number"
              label="Number of Influencers"
              placeholder="Please Enter"
              value={state.numberOfInfluencers}
              onValue={(numberOfInfluencers) =>
                setState({ ...state, numberOfInfluencers })
              }
            />
            <Input
              disabled={disabled}
              type="select"
              label="Influencer Size"
              placeholder="Please Select"
              value={state.influencerSize}
              onValue={(influencerSize) =>
                setState({ ...state, influencerSize })
              }
            />
            <Input
              disabled={disabled}
              type="select"
              label="Disease Area"
              placeholder="Please Select"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
            <Input
              disabled={disabled}
              type="select"
              label="Location"
              placeholder="Please Select"
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              disabled={disabled}
              type="min-max"
              label="Age Range"
              placeholder="Please Select"
              value={state.ageRange}
              onValue={(ageRange) => setState({ ...state, ageRange })}
            />
            <Input
              disabled={disabled}
              type="select"
              label="Gender"
              placeholder="Please Select"
              value={state.gender}
              onValue={(gender) => setState({ ...state, gender })}
              options={[
                {
                  label: 'Male',
                  value: 'male',
                },
                {
                  label: 'Female',
                  value: 'female',
                },
              ]}
            />
            <Input
              disabled={disabled}
              type="multiselect"
              label="Ethnicity"
              placeholder="Please Select"
              value={state.ethnicity}
              onValue={(ethnicity) => setState({ ...state, ethnicity })}
            />
            <Input
              disabled={disabled}
              type="multiselect"
              label="Interests"
              placeholder="Please Select"
              value={state.interests}
              onValue={(interests) => setState({ ...state, interests })}
            />
            <GridCell columnSpan={2}>
              <Input
                disabled={disabled}
                multiline
                rows={5}
                type="text"
                label="Target Audience Info"
                placeholder="Please Enter"
                value={state.targetAudienceInfo}
                onValue={(targetAudienceInfo) =>
                  setState({ ...state, targetAudienceInfo })
                }
              />
            </GridCell>
          </AddInfluencerModalMain>
        )}
        {tab === 2 && (
          <AddInfluencerModalMain columns={2}>
            <Input
              disabled={disabled}
              type="select"
              label="Platform"
              placeholder="Please Select"
              value={state.platform}
              onValue={(platform) => setState({ ...state, platform })}
            />
            <Input
              disabled={disabled}
              type="select"
              label="Post Type"
              placeholder="Please Select"
              value={state.postType}
              onValue={(postType) => setState({ ...state, postType })}
            />
            <GridCell columnSpan={2}>
              <InputLabel>Image</InputLabel>
              <Button color="default" variant="contained" onClick={handleFile}>
                Upload
              </Button>
            </GridCell>
            <GridCell columnSpan={2}>
              <Input
                disabled={disabled}
                multiline
                rows={5}
                type="text"
                label="Instructions"
                placeholder="Please Enter"
                value={state.campaignInfo}
                onValue={(campaignInfo) => setState({ ...state, campaignInfo })}
              />
            </GridCell>
          </AddInfluencerModalMain>
        )}

        {tab === 3 && (
          <AddInfluencerModalMain columns={1}>
            <Stack>
              <Input
                disabled={disabled}
                type="text"
                multiline
                value={state.contract}
                rows={8}
                onValue={(contract) => setState({ ...state, contract })}
              />
              <Checkbox label="I've written and approved the Contract: <Campaign Name>" />
            </Stack>
          </AddInfluencerModalMain>
        )}

        {tab === 4 && (
          <AddInfluencerModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                type="select"
                label="Chat"
                placeholder="Please Select"
                value={state.chat}
                onValue={(chat) => setState({ ...state, chat })}
              />
              <Input
                type="text"
                label="Submission"
                disabled
                placeholder="Please Select"
                value={link}
                endAdornment={<CopyIcon />}
                onClick={handleCopyToClipboard}
                onValue={(submission) => setState({ ...state, submission })}
              />
            </Stack>
            <Chat />
          </AddInfluencerModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default AddInfluencerModal;
