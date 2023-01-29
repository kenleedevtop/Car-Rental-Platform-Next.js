import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TAddInfluencerModalProps } from 'features/campaigns/role/admin/elements/add-campaign-modal/types';
import {
  AddInfluencerModalMain,
  CampaignsTitle,
} from 'features/campaigns/role/admin/elements/add-campaign-modal/styles';
import { Button, Checkbox, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import { EditIcon } from 'components/svg';

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
    targetAudienceInfo: '',

    platform: null,
    postType: null,
    image: null,
    instructions: '',

    contract: '',
    contractCheck: false,

    comments: [],
    labels: [],
    meetings: [],
    reminders: [],
    tasks: [],
    created: null,
    status: null,
    statusChanged: null,
  });

  const handleFile = async () => {};

  const [tab, setTab] = useState(0);

  return (
    <Modal
      size="medium"
      title={
        <CampaignsTitle>
          Create Campaign <EditIcon />
        </CampaignsTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '650px' }}>
        <Tabs
          tabs={['Info', 'Target', 'Instructions', 'Contract', 'Management']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <AddInfluencerModalMain columns={2}>
            <Input
              type="text"
              label="Campaign Name"
              placeholder="Please Enter"
              value={state.campaignName}
              onValue={(campaignName) => setState({ ...state, campaignName })}
            />
            <Input
              type="select"
              label="Client"
              placeholder="Please Select"
              value={state.client}
              onValue={(client) => setState({ ...state, client })}
            />
            <Input
              type="select"
              label="Product"
              placeholder="Please Enter"
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
            />
            <Input
              type="select"
              label="Ambassador"
              placeholder="Please Select"
              value={state.ambassador}
              onValue={(ambassador) => setState({ ...state, ambassador })}
            />
            <Input
              type="date"
              label="Start Date"
              placeholder="Please Enter"
              value={state.startDate}
              onValue={(startDate) => setState({ ...state, startDate })}
            />
            <Input
              type="date"
              label="Finish Date"
              placeholder="Please Enter"
              value={state.finishDate}
              onValue={(finishDate) => setState({ ...state, finishDate })}
            />
            <Input
              type="select"
              label="Report"
              placeholder="Please Select"
              value={state.report}
              onValue={(report) => setState({ ...state, report })}
            />
            <Input
              type="number"
              label="Budget"
              placeholder="Please Select"
              value={state.budget}
              onValue={(budget) => setState({ ...state, budget })}
            />
            <GridCell columnSpan={2}>
              <Input
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
              type="number"
              label="Number of Influencers"
              placeholder="Please Enter"
              value={state.numberOfInfluencers}
              onValue={(numberOfInfluencers) =>
                setState({ ...state, numberOfInfluencers })
              }
            />
            <Input
              type="select"
              label="Influencer Size"
              placeholder="Please Select"
              value={state.influencerSize}
              onValue={(influencerSize) =>
                setState({ ...state, influencerSize })
              }
            />
            <Input
              type="select"
              label="Disease Area"
              placeholder="Please Select"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
            <Input
              type="select"
              label="Location"
              placeholder="Please Select"
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              type="min-max"
              label="Age Range"
              placeholder="Please Select"
              value={state.ageRange}
              onValue={(ageRange) => setState({ ...state, ageRange })}
            />
            <Input
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
            <GridCell columnSpan={2}>
              <Input
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
              type="select"
              label="Platform"
              placeholder="Please Select"
              value={state.platform}
              onValue={(platform) => setState({ ...state, platform })}
            />
            <Input
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
                type="text"
                multiline
                value={state.contract}
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
                type="multiselect"
                label="Comments"
                placeholder="Please Enter"
                value={state.comments}
                onValue={(comments) => setState({ ...state, comments })}
              />
              <Input
                type="multiselect"
                label="Labels"
                placeholder="Please Enter"
                value={state.labels}
                onValue={(labels) => setState({ ...state, labels })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="multiselect"
                label="Meetings"
                placeholder="Please Enter"
                value={state.meetings}
                onValue={(meetings) => setState({ ...state, meetings })}
              />
              <Input
                type="multiselect"
                label="Reminders"
                placeholder="Please Enter"
                value={state.reminders}
                onValue={(reminders) => setState({ ...state, reminders })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="multiselect"
                label="Tasks"
                placeholder="Please Enter"
                value={state.tasks}
                onValue={(tasks) => setState({ ...state, tasks })}
              />
              <Input
                type="date"
                label="On Platform Since"
                placeholder="Please Enter"
                value={state.created}
                onValue={(created) => setState({ ...state, created })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Status"
                placeholder="Please Enter"
                value={state.status}
                onValue={(status) => setState({ ...state, status })}
              />
              <Input
                type="date"
                label="Status Changed"
                placeholder="Please Enter"
                value={state.statusChanged}
                onValue={(statusChanged) =>
                  setState({ ...state, statusChanged })
                }
              />
            </Stack>
          </AddInfluencerModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default AddInfluencerModal;
