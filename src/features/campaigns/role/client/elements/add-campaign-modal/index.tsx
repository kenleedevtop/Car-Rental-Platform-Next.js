import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TAddCampaignsModalProps } from 'features/campaigns/role/client/elements/add-campaign-modal/types';
import { AddCampaignsModalMain } from 'features/campaigns/role/client/elements/add-campaign-modal/styles';
import { Button, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';

const AddCampaignModal = ({ onClose, ...props }: TAddCampaignsModalProps) => {
  const [state, setState] = useState({
    campaignName: '',
    product: '',
    startNFinishDate: {
      min: '',
      max: '',
    },
    report: null,
    budget: '',
    campaignInfo: '',

    numberOfInfluencers: '',
    influencerSize: null,
    diseaseArea: null,
    location: null,
    ageRange: null,
    gender: null,
    targetAudienceInfo: '',

    platform: null,
    postType: null,
    image: null,
    instructions: '',
  });

  const handleFile = async () => {};

  const [tab, setTab] = useState(0);

  return (
    <Modal
      size="medium"
      title="Create Campaign"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create Campaign
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '550px' }}>
        <Tabs
          tabs={['Info', 'Target', 'Instructions']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <AddCampaignsModalMain columns={2}>
            <GridCell columnSpan={2}>
              <Input
                type="text"
                label="Campaign Name"
                placeholder="Please Enter"
                value={state.campaignName}
                onValue={(campaignName) => setState({ ...state, campaignName })}
              />
            </GridCell>
            <Input
              type="text"
              label="Product"
              placeholder="Please Enter Product Name"
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
            />
            <Input
              type="min-max"
              label="Start & Finish Date"
              placeholder="Please Select"
              value={state.startNFinishDate}
              onValue={(startNFinishDate) =>
                setState({ ...state, startNFinishDate })
              }
            />
            <Input
              type="select"
              label="Report"
              placeholder="Please Select"
              value={state.report}
              onValue={(report) => setState({ ...state, report })}
            />
            <Input
              type="select"
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
          </AddCampaignsModalMain>
        )}
        {tab === 1 && (
          <AddCampaignsModalMain columns={2}>
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
              type="select"
              label="Age Range"
              placeholder="Please Select"
              value={state.ageRange}
              onValue={(ageRange) => setState({ ...state, ageRange })}
            />
            <Input
              type="date"
              label="Gender"
              placeholder="Please Select"
              value={state.gender}
              onValue={(gender) => setState({ ...state, gender })}
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
          </AddCampaignsModalMain>
        )}
        {tab === 2 && (
          <AddCampaignsModalMain columns={2}>
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
          </AddCampaignsModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default AddCampaignModal;
