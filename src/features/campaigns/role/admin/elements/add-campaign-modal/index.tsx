import React, { useEffect, useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TAddInfluencerModalProps } from 'features/campaigns/role/admin/elements/add-campaign-modal/types';
import {
  AddInfluencerModalMain,
  CampaignsTitle,
} from 'features/campaigns/role/admin/elements/add-campaign-modal/styles';
import { Button, Checkbox, Input, InputGroup } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import { EditIcon } from 'components/svg';
import { CampaignAPI } from 'api';

const AddInfluencerModal = ({
  onClose,
  ...props
}: TAddInfluencerModalProps) => {
  const [state, setState] = useState({
    budget: null,
    name: '',
    clientId: null,
    currencyId: null,
    stakeholderTypes: [],
    strugglesIds: [],
    locationId: null,
    languageId: null,
    ethnicityIds: [],
    interestIds: [],
    productId: null,
    dateStart: null,
    dateEnd: null,
    description: '',
    influencerCount: null,
    influencerSizeId: null,
    ageMin: null,
    ageMax: null,
    genderIds: [],
    targetAudienceDescription: '',
    socialPlatformId: null,
    postType: null,
    exampleImageUrls: [],
    clientCompanyWebiste: '',
    instructions: '',
    reportId: null,
  });

  const handleFile = async () => {};

  const [tab, setTab] = useState(0);

  const addCampaign = async () => {
    await CampaignAPI.addCampaign(state);
  };

  const [reports, setReports] = useState<any>();

  const getReportTypes = async () => {
    const data = await CampaignAPI.getCampaignsReportTypes();

    setReports(data);
  };

  useEffect(() => {
    getReportTypes();

    console.log(reports);
  }, []);

  return (
    <Modal
      size="medium"
      title="Create Campaign "
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            addCampaign();
            onClose();
          }}
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
          <AddInfluencerModalMain columns={2}>
            <Input
              type="text"
              label="Campaign Name"
              placeholder="Please Enter"
              value={state.name}
              onValue={(name) => setState({ ...state, name })}
            />
            <Input
              type="select"
              label="Client"
              placeholder="Please Select"
              value={state.clientId}
              onValue={(clientId) => setState({ ...state, clientId })}
            />
            <Input
              type="select"
              label="Product"
              placeholder="Please Enter"
              value={state.productId}
              onValue={(productId) => setState({ ...state, productId })}
            />
            <Input
              type="number"
              label="Influencers"
              placeholder="Please Select"
              value={state.influencerCount}
              onValue={(influencerCount) =>
                setState({ ...state, influencerCount })
              }
            />
            <Input
              type="date"
              label="Start Date"
              placeholder="Please Enter"
              value={state.dateStart}
              onValue={(dateStart) => setState({ ...state, dateStart })}
            />
            <Input
              type="date"
              label="Finish Date"
              placeholder="Please Enter"
              value={state.dateEnd}
              onValue={(dateEnd) => setState({ ...state, dateEnd })}
            />
            <Input
              type="select"
              label="Report"
              placeholder="Please Select"
              value={state.reportId}
              onValue={(reportId) => setState({ ...state, reportId })}
            />
            <InputGroup
              label="Amount"
              inputRatio="100px 1fr"
              elements={[
                {
                  value: state.currencyId,
                  onValue: (currencyId) => setState({ ...state, currencyId }),
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
                value={state.description}
                onValue={(description) => setState({ ...state, description })}
              />
            </GridCell>
          </AddInfluencerModalMain>
        )}
        {tab === 1 && (
          <AddInfluencerModalMain columns={2}>
            <Input
              type="select"
              label="Location"
              placeholder="Please Enter"
              value={state.locationId}
              onValue={(locationId) => setState({ ...state, locationId })}
            />
            <Input
              type="select"
              label="Language"
              placeholder="Please Select"
              value={state.languageId}
              onValue={(languageId) => setState({ ...state, languageId })}
            />
            <Input
              type="select"
              label="Stakeholder"
              placeholder="Please Select"
              value={state.stakeholderTypes}
              onValue={(stakeholderTypes) =>
                setState({ ...state, stakeholderTypes })
              }
            />
            <Input
              type="select"
              label="Gender"
              placeholder="Please Select"
              value={state.genderIds}
              onValue={(genderIds) => setState({ ...state, genderIds })}
              options={[
                {
                  label: 'Male',
                  value: 'male',
                },
                {
                  label: 'Female',
                  value: 'female',
                },
                {
                  label: 'Other',
                  value: 'other',
                },
              ]}
            />
            <Input
              type="number"
              label="Age Min"
              placeholder="Please Select"
              value={state.ageMin}
              onValue={(ageMin) => setState({ ...state, ageMin })}
            />
            <Input
              type="number"
              label="Age Max"
              placeholder="Please Select"
              value={state.ageMax}
              onValue={(ageMax) => setState({ ...state, ageMax })}
            />
            <Input
              type="select"
              label="Ethnicity"
              placeholder="Please Select"
              value={state.ethnicityIds}
              onValue={(ethnicityIds) => setState({ ...state, ethnicityIds })}
            />
            <Input
              type="select"
              label="Interests"
              placeholder="Please Select"
              value={state.interestIds}
              onValue={(interestIds) => setState({ ...state, interestIds })}
            />
            <Input
              type="select"
              label="Influencer size"
              placeholder="Please Select"
              value={state.influencerSizeId}
              onValue={(influencerSizeId) =>
                setState({ ...state, influencerSizeId })
              }
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                type="text"
                label="Target Audience Info"
                placeholder="Please Enter"
                value={state.targetAudienceDescription}
                onValue={(targetAudienceDescription) =>
                  setState({ ...state, targetAudienceDescription })
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
              value={state.socialPlatformId}
              onValue={(socialPlatformId) =>
                setState({ ...state, socialPlatformId })
              }
            />
            <Input
              type="select"
              label="Post Type"
              placeholder="Please Select"
              value={state.postType}
              onValue={(postType) => setState({ ...state, postType })}
            />
            <GridCell columnSpan={2}>
              <Stack direction="horizontal">
                <div style={{ width: '50%' }}>
                  <InputLabel>Image</InputLabel>
                  <Button
                    color="default"
                    variant="contained"
                    onClick={handleFile}
                  >
                    Upload
                  </Button>
                </div>
                <Input
                  type="text"
                  label="Website"
                  placeholder="Please Enter"
                  value={state.clientCompanyWebiste}
                  onValue={(clientCompanyWebiste) =>
                    setState({ ...state, clientCompanyWebiste })
                  }
                  style={{ width: '50%' }}
                />
              </Stack>
            </GridCell>
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                type="text"
                label="Instructions"
                placeholder="Please Enter"
                value={state.instructions}
                onValue={(instructions) => setState({ ...state, instructions })}
              />
            </GridCell>
          </AddInfluencerModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default AddInfluencerModal;
