import React, { useEffect, useState } from 'react';
import { Chat, Modal, Tabs } from 'components/custom';
import { TAddCampaignsModalProps } from 'features/campaigns/role/client/elements/created-campaign-modal/types';
import { AddCampaignsModalMain } from 'features/campaigns/role/client/elements/created-campaign-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import { CampaignAPI } from 'api';

const CreatedCampaignModal = ({
  onClose,
  id,
  ...props
}: TAddCampaignsModalProps) => {
  const [state, setState] = useState<any>({
    campaignName: '',
    product: [],
    influencers: null,
    startDate: null,
    endDate: null,
    report: null,
    currency: null,
    budget: null,
    campaignInfo: '',

    location: null,
    language: null,
    diseaseArea: null,
    stakeholders: [],
    gender: null,
    age: {
      min: '',
      max: '',
    },
    ethnicity: [],
    struggles: [],
    interests: [],
    influencerSize: null,
    targetAudienceInfo: '',

    platform: null,
    postType: null,
    image: null,
    website: '',
    instructions: '',

    participantA: null,
    submission: null,

    participantC: null,
    reportC: null,
  });

  const handleFile = async () => {};

  const [tab, setTab] = useState(0);

  const [campaign, setCampaign] = useState<any>(null);

  const getCampaign = async () => {
    const result = await CampaignAPI.getSingleCampaign(id);

    setCampaign(result);
  };

  useEffect(() => {
    getCampaign();
  }, [id]);

  useEffect(() => {
    const newState = { ...state };

    if (campaign && Object.keys(campaign).length > 0) {
      newState.campaignName = campaign.name;

      // if (campaign.campaignType) {
      //   newState.campaignType = {
      //     value: campaign.campaignType,
      //     label: 'Questionaire',
      //   };
      // }

      if (campaign.report) {
        newState.report = {
          value: campaign.report,
          label: campaign.report === 1 ? 'No' : 'Yes',
        };
      }

      if (campaign.influencersCount) {
        newState.influencers = campaign.influencersCount;
      }

      if (campaign.targetAudienceDescription) {
        newState.targetAudienceInfo = campaign.targetAudienceDescription;
      }

      // if (campaign.participantsDescription) {
      //   newState.targetAudInfo = campaign.participantsDescription;
      // }

      if (campaign.ageMin) {
        newState.age.min = campaign.ageMin;
      }

      if (campaign.ageMax) {
        newState.age.max = campaign.ageMax;
      }

      if (campaign.campaignDescription) {
        newState.campaignInfo = campaign.campaignDescription;
      }

      if (campaign.dateStart) {
        newState.startDate = campaign.dateStart;
      }

      if (campaign.dateEnd) {
        newState.endDate = campaign.dateEnd;
      }

      if (campaign.products) {
        newState.product = campaign.products.map((x: any) => ({
          value: x.product.id,
          label: x.product.name,
        }));
      }

      if (campaign.platformProductOrder.platformProductOrderLocations?.[0]) {
        newState.location = {
          value:
            campaign.platformProductOrder.platformProductOrderLocations?.[0]
              .location.id,
          label:
            campaign.platformProductOrder.platformProductOrderLocations?.[0]
              .location.name,
        };
        // campaign.platformProductOrder.platformProductOrderLocations.map(
        //   (x: any) => ({ value: x.location.id, label: x.location.name })
        // );
      }

      if (campaign.platformProductOrder.platformProductOrderDiseaseAreas?.[0]) {
        newState.diseaseArea = {
          value:
            campaign.platformProductOrder.platformProductOrderDiseaseAreas?.[0]
              .diseaseArea.id,
          label:
            campaign.platformProductOrder.platformProductOrderDiseaseAreas?.[0]
              .diseaseArea.name,
        };
        // campaign.platformProductOrder.platformProductOrderDiseaseAreas.map(
        //   (x: any) => ({ value: x.diseaseArea.id, label: x.diseaseArea.name })
        // );
      }

      if (campaign.platformProductOrder.platformProductOrderEthnicities) {
        newState.ethnicity =
          campaign.platformProductOrder.platformProductOrderEthnicities.map(
            (x: any) => ({ value: x.ethnicity.id, label: x.ethnicity.name })
          );
      }

      if (campaign.platformProductOrder.platformProductOrderStruggles) {
        newState.struggles =
          campaign.platformProductOrder.platformProductOrderStruggles.map(
            (x: any) => ({ value: x.struggle.id, label: x.struggle.name })
          );
      }

      if (campaign.platformProductOrder.platformProductOrderInterests) {
        newState.interests =
          campaign.platformProductOrder.platformProductOrderInterests.map(
            (x: any) => ({ value: x.interest.id, label: x.interest.name })
          );
      }

      if (campaign.language) {
        switch (campaign.language) {
          case 0:
            newState.language = { value: 0, label: 'English' };
            break;
          case 1:
            newState.language = { value: 1, label: 'French' };
            break;
          case 2:
            newState.language = { value: 2, label: 'German' };
            break;
          case 3:
            newState.language = { value: 3, label: 'Spanish' };
            break;
          case 4:
            newState.language = { value: 4, label: 'Italian' };
            break;
          default:
            newState.language = null;
            break;
        }
      }

      if (campaign.instructions) {
        newState.instructions = campaign.instructions;
      }

      if (campaign.clientCompanyWebsite) {
        newState.website = campaign.clientCompanyWebsite;
      }

      // if (campaign.campaignType !== null) {
      //   newState.campaignType = {
      //     value: 0,
      //     label: 'Questionaire',
      //   };
      // }

      if (campaign.platformProductOrder.budget) {
        newState.budget = campaign.platformProductOrder.budget;
      }

      if (campaign.platformProductOrder.platformProductOrderGenders) {
        newState.gender =
          campaign.platformProductOrder.platformProductOrderGenders.map(
            (x: any) => ({
              value: x.value,
              label: x.name,
            })
          );
      }

      if (campaign.socialPlatformId) {
        newState.platform = {
          value: campaign.socialPlatformId,
          label: 'Instagram',
        };
      }

      if (campaign.postType !== null) {
        newState.postType = {
          value: campaign.postType.value,
          label: campaign.postType.name,
        };
      }

      if (campaign.description) {
        newState.campaignInfo = campaign.description;
      }

      setState(newState);
    }
  }, [campaign]);

  return (
    <Modal
      size="medium"
      title={campaign && campaign.name ? campaign.name : ''}
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
      onClose={onClose}
      {...props}
    >
      <Stack
        style={{ height: '500px', overflowY: 'scroll', paddingRight: '10px' }}
      >
        {/* 'Admin Chat', 'Chat' */}
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
                disabled
                value={state.campaignName}
                onValue={(campaignName) => setState({ ...state, campaignName })}
              />
            </GridCell>
            <Input
              type="multiselect"
              label="Product"
              disabled
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
            />
            <InputGroup
              label="Start & Finish date"
              inputRatio="1fr 1fr"
              disabled
              elements={[
                {
                  type: 'date',
                  value: state.startDate,
                  onValue: (startDate) => setState({ ...state, startDate }),
                },
                {
                  type: 'date',
                  value: state.endDate,
                  onValue: (endDate) => setState({ ...state, endDate }),
                },
              ]}
            />
            <Input
              type="select"
              label="Report"
              disabled
              value={state.report}
              onValue={(report) => setState({ ...state, report })}
            />
            <InputGroup
              label="Budget"
              disabled
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
                },
              ]}
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                disabled
                rows={5}
                type="text"
                label="Campaign Info"
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
              disabled
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              type="select"
              label="Language"
              disabled
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
            />
            <Input
              type="select"
              label="Disease Area"
              disabled
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
            <Input
              type="multiselect"
              label="Stakeholders"
              disabled
              value={state.stakeholders}
              onValue={(stakeholders) => setState({ ...state, stakeholders })}
            />
            <Input
              type="multiselect"
              label="Gender"
              disabled
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
              disabled
              value={state.age}
              onValue={(age) => setState({ ...state, age })}
            />
            <Input
              type="multiselect"
              label="Ethnicity"
              disabled
              value={state.ethnicity}
              onValue={(ethnicity) => setState({ ...state, ethnicity })}
            />
            <Input
              type="multiselect"
              label="Struggles"
              disabled
              value={state.struggles}
              onValue={(struggles) => setState({ ...state, struggles })}
            />
            <Input
              type="multiselect"
              label="Interests"
              disabled
              value={state.interests}
              onValue={(interests) => setState({ ...state, interests })}
            />
            <Input
              type="select"
              label="Influencer Size"
              disabled
              value={state.influencerSize}
              onValue={(influencerSize) =>
                setState({ ...state, influencerSize })
              }
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                type="text"
                disabled
                style={{ marginBottom: '20px' }}
                label="Target Audience Info"
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
              disabled
              value={state.platform}
              onValue={(platform) => setState({ ...state, platform })}
            />
            <Input
              type="select"
              label="Post Type"
              disabled
              value={state.postType}
              onValue={(postType) => setState({ ...state, postType })}
            />
            <GridCell columnSpan={1}>
              <InputLabel>Image</InputLabel>
              <Button
                color="default"
                disabled
                variant="contained"
                onClick={handleFile}
              >
                Upload
              </Button>
            </GridCell>
            <Input
              type="text"
              label="Website"
              disabled
              value={state.website}
              onValue={(website) => setState({ ...state, website })}
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                type="text"
                disabled
                label="Instructions"
                value={state.instructions}
                onValue={(instructions) => setState({ ...state, instructions })}
              />
            </GridCell>
          </AddCampaignsModalMain>
        )}
        {tab === 3 && (
          <AddCampaignsModalMain columns={2}>
            <Input
              type="select"
              label="Participant"
              placeholder="Please Select"
              value={state.participantA}
              onValue={(participantA) => setState({ ...state, participantA })}
            />
            <Input
              type="text"
              label="Submission"
              placeholder="www.instagram.com/link123"
              disabled
              value={state.submission}
              onValue={(submission) => setState({ ...state, submission })}
            />
            <GridCell columnSpan={2}>
              <Chat />
            </GridCell>
          </AddCampaignsModalMain>
        )}
        {tab === 4 && (
          <AddCampaignsModalMain columns={2}>
            <Input
              type="select"
              label="Participant"
              placeholder="Please Select"
              value={state.participantC}
              onValue={(participantC) => setState({ ...state, participantC })}
            />
            <Input
              type="text"
              label="Report"
              placeholder="Report Name"
              disabled
              value={state.reportC}
              onValue={(reportC) => setState({ ...state, reportC })}
            />
            <GridCell columnSpan={2}>
              <Chat />
            </GridCell>
          </AddCampaignsModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default CreatedCampaignModal;
