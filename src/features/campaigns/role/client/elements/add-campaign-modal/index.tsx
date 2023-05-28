import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TAddCampaignsModalProps } from 'features/campaigns/role/client/elements/add-campaign-modal/types';
import { AddCampaignsModalMain } from 'features/campaigns/role/client/elements/add-campaign-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';

const AddCampaignModal = ({ onClose, ...props }: TAddCampaignsModalProps) => {
  const [state, setState] = useState({
    campaignName: '',
    product: null,
    influencers: null,
    startDate: null,
    endDate: null,
    report: null,
    currency: null,
    budget: '',
    campaignInfo: '',

    location: null,
    language: null,
    diseaseArea: null,
    stakeholders: null,
    gender: null,
    age: {
      min: '',
      max: '',
    },
    ethnicity: null,
    struggles: null,
    interests: null,
    influencerSize: null,
    targetAudienceInfo: '',

    platform: null,
    postType: null,
    image: null,
    website: '',
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
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack
        style={{ height: '500px', overflowY: 'scroll', paddingRight: '10px' }}
      >
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
              type="select"
              label="Product"
              placeholder="Please Select"
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
            />
            <InputGroup
              label="Start & Finish date"
              inputRatio="1fr 1fr"
              elements={[
                {
                  type: 'date',
                  placeholder: 'From',
                  value: state.startDate,
                  onValue: (startDate) => setState({ ...state, startDate }),
                },
                {
                  type: 'date',
                  placeholder: 'To',
                  value: state.endDate,
                  onValue: (endDate) => setState({ ...state, endDate }),
                },
              ]}
            />
            <Input
              type="select"
              label="Report"
              placeholder="Please Select"
              value={state.report}
              onValue={(report) => setState({ ...state, report })}
              options={[
                {
                  value: 0,
                  label: 'Yes',
                },
                {
                  value: 1,
                  label: 'No',
                },
              ]}
            />
            <InputGroup
              label="Budget"
              inputRatio="100px 1fr"
              elements={[
                {
                  value: state.currency,
                  onValue: (currency) => setState({ ...state, currency }),
                  type: 'select',
                  placeholder: 'CHF',
                  options: [
                    {
                      value: 'eur',
                      label: 'EUR',
                    },
                    {
                      value: 'usd',
                      label: 'USD',
                    },
                    {
                      value: 'chf',
                      label: 'CHF',
                    },
                  ],
                },
                {
                  value: state.budget,
                  onValue: (budget) => setState({ ...state, budget }),
                  type: 'text',
                  placeholder: 'Please Enter',
                },
              ]}
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
              type="select"
              label="Location"
              placeholder="Please Select"
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              type="select"
              label="Language"
              placeholder="Please Select"
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
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
              label="Stakeholders"
              placeholder="Please Select"
              value={state.stakeholders}
              onValue={(stakeholders) => setState({ ...state, stakeholders })}
            />
            <Input
              type="select"
              label="Gender"
              placeholder="Please Select"
              value={state.gender}
              onValue={(gender) => setState({ ...state, gender })}
              options={[
                {
                  value: 0,
                  label: 'Male',
                },
                {
                  value: 1,
                  label: 'Female',
                },
                {
                  value: 0,
                  label: 'Other',
                },
              ]}
            />
            <Input
              type="min-max"
              label="Age"
              placeholder="Please Select"
              value={state.age}
              onValue={(age) => setState({ ...state, age })}
            />
            <Input
              type="select"
              label="Ethnicity"
              placeholder="Please Select"
              value={state.ethnicity}
              onValue={(ethnicity) => setState({ ...state, ethnicity })}
            />
            <Input
              type="select"
              label="Struggles"
              placeholder="Please Select"
              value={state.struggles}
              onValue={(struggles) => setState({ ...state, struggles })}
            />
            <Input
              type="select"
              label="Interests"
              placeholder="Please Select"
              value={state.interests}
              onValue={(interests) => setState({ ...state, interests })}
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
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={4}
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
            <GridCell columnSpan={1}>
              <InputLabel>Image</InputLabel>
              <Button color="default" variant="contained" onClick={handleFile}>
                Upload
              </Button>
            </GridCell>
            <Input
              type="text"
              label="Website"
              placeholder="Please Enter"
              value={state.website}
              onValue={(website) => setState({ ...state, website })}
            />
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
