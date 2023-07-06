import React, { useEffect, useState } from 'react';
import { Chat, CurrencyFeedback, Modal, Note, Tabs } from 'components/custom';
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

    location: [],
    language: [],
    diseaseArea: [],
    symptoms: [],
    stakeholders: [],
    gender: null,
    age: {
      min: '',
      max: '',
    },
    ethnicity: [],
    struggles: [],
    interests: [],
    influencerSize: [],
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
          label: campaign.report === 0 ? 'No' : 'Yes',
        };
      }

      if (campaign.stakeholderTypes) {
        newState.stakeholders = campaign.stakeholderTypes.map((x: any) => ({
          value: x.value,
          label: x.name,
        }));
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

      if (campaign.platformProductOrder.platformProductOrderLocations) {
        newState.location =
          campaign.platformProductOrder.platformProductOrderLocations.map(
            (x: any) => ({
              value: x.location.id,
              label: x.location.country
                ? `${x.location.name}, ${x.location.country.name}`
                : x.location.name,
            })
          );
      }

      if (campaign.platformProductOrder.platformProductOrderDiseaseAreas) {
        newState.diseaseArea =
          campaign.platformProductOrder.platformProductOrderDiseaseAreas.map(
            (x: any) => ({ value: x.diseaseArea.id, label: x.diseaseArea.name })
          );
      }

      if (campaign.campaignInfluencersSizes) {
        newState.influencerSize = campaign.campaignInfluencersSizes.map(
          (x: any) => ({
            value: x.influencerSize.id,
            label: `${x.influencerSize.name}: ${x.influencerSize.from} | ${x.influencerSize.to}`,
          })
        );
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

      if (campaign.platformProductOrder.platformProductOrderLanguages) {
        newState.language =
          campaign.platformProductOrder.platformProductOrderLanguages.map(
            (x: any) => ({ value: x.value, label: x.name })
          );
      }

      if (campaign.platformProductOrder.platformProductOrderSymptoms) {
        newState.symptoms =
          campaign.platformProductOrder.platformProductOrderSymptoms.map(
            (x: any) => ({ value: x.symptom.id, label: x.symptom.name })
          );
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
            <Input
              type="text"
              label="Campaign Name"
              disabled
              value={state.campaignName}
              onValue={(campaignName) => setState({ ...state, campaignName })}
            />
            <Input
              type="multiselect"
              label="Products"
              disabled
              value={state.product}
              onValue={(product) => setState({ ...state, product })}
            />
            <Input
              label="Start Date"
              type="date"
              placeholder="From"
              value={state.startdate}
              onValue={(startDate) => setState({ ...state, startDate })}
            />
            <Input
              label="End Date"
              type="date"
              placeholder="To"
              value={state.endDate}
              onValue={(endDate) => setState({ ...state, endDate })}
            />
            <Input
              type="select"
              label="Report"
              disabled
              value={state.report}
              onValue={(report) => setState({ ...state, report })}
            />
            <Input
              type="number"
              min={0}
              label="Influencers"
              placeholder="Please Select"
              value={state.influencerCount}
              onValue={(input) =>
                setState({ ...state, influencerCount: input > 0 ? input : 0 })
              }
            />
            <Stack>
              <Input
                label="Budget"
                disabled
                value={state.budget}
                onValue={(budget) => setState({ ...state, budget })}
                type="text"
                placeholder="Please Enter"
                startAdornment="CHF"
              />
              <CurrencyFeedback value={state.budget} />
            </Stack>
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
              type="multiselect"
              label="Location"
              disabled
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              type="multiselect"
              label="Language"
              disabled
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
            />
            <Input
              type="multiselect"
              label="Disease Area"
              disabled
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
            <Input
              type="multiselect"
              label="Stakeholder"
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
              label="Struggle"
              disabled
              value={state.struggles}
              onValue={(struggles) => setState({ ...state, struggles })}
            />
            <Input
              type="multiselect"
              label="Interest"
              disabled
              value={state.interests}
              onValue={(interests) => setState({ ...state, interests })}
            />
            <Input
              type="multiselect"
              label="Influencer Size"
              disabled
              value={state.influencerSize}
              onValue={(influencerSize) =>
                setState({ ...state, influencerSize })
              }
            />
            <Input
              type="multiselect"
              label="Symptom"
              disabled
              value={state.symptoms}
              onValue={(symptoms) => setState({ ...state, symptoms })}
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
