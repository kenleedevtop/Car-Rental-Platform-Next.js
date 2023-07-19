import React, { useCallback, useEffect, useState } from 'react';
import { Chat, CurrencyFeedback, Modal, Tabs } from 'components/custom';
import { TAddCampaignsModalProps } from 'features/campaigns/role/client/elements/created-campaign-modal/types';
import { AddCampaignsModalMain } from 'features/campaigns/role/client/elements/created-campaign-modal/styles';
import { Button, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import {
  CampaignAPI,
  ClientAPI,
  DiseaseAreaAPI,
  EnumsApi,
  FileManagerApi,
  LocationAPI,
  ProductApi,
} from 'api';
import { TState } from 'features/campaigns/role/admin/elements/created-campaign-modal/types';
import { CampaignsTitle } from 'features/campaigns/role/admin/elements/created-campaign-modal/styles';
import { EditIcon } from 'components/svg';
import { TCampaign } from 'api/campaign/types';
import { formatCurrencyIdToObject } from 'features/discover-influencers/role/admin/elements/influencer-profile/helpers';
import UsersAPI from 'api/users';
import { useModal, useSnackbar } from 'hooks';
import { pick } from '@costorgroup/file-manager';
import {
  ImageUploadContainer,
  ImageUploadMainContainer,
} from '../add-campaign-modal/styles';
import UploadedFileModal from '../uploaded-file-modal';

const CreatedCampaignModal = ({
  onClose,
  reload,
  id,
  ...props
}: TAddCampaignsModalProps) => {
  const [state, setState] = useState<TState>({
    campaignName: '',
    product: [],
    influencers: undefined,
    dateStart: null,
    dateEnd: null,
    report: undefined,
    currency: {},
    budget: undefined,
    campaignInfo: '',

    location: [],
    language: [],
    diseaseArea: [],
    symptoms: [],
    stakeholders: [],
    gender: [],
    age: {
      min: undefined,
      max: undefined,
    },
    ethnicity: [],
    struggles: [],
    interests: [],
    influencerSize: [],
    targetAudienceInfo: '',

    platform: {},
    postType: {},
    image: null,
    website: '',
    instructions: '',

    participantA: null,
    submission: null,

    participantC: null,
    reportC: null,
  });

  const handleNewProductTag = (v: any) => {
    if (state.product) {
      setState({ ...state, product: [...state.product, v] });
    }
  };

  const handleFile = async () => {};

  const [tab, setTab] = useState(0);

  const [campaign, setCampaign] = useState<TCampaign>({});

  const getCampaign = async () => {
    const result = await CampaignAPI.getSingleCampaign(id);

    setCampaign(result);
  };

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState<any>([]);
  const [report, setReport] = useState<any>();
  const [location, setLocation] = useState<any>();
  const [languages, setLanguages] = useState<any>();
  const [diseaseAreas, setDiseaseAreas] = useState<any>();
  const [stakeholders, setStakholders] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [ethnicity, setEthnicity] = useState<any>();
  const [struggles, setStruggles] = useState<any>();
  const [interests, setInterests] = useState<any>();
  const [influencerSize, setInfluencerSize] = useState<any>();
  const [symptoms, setSymptoms] = useState<any>();
  const [ambassador, setAmbassador] = useState<any>();

  const getProducts = async () => {
    const { result } = await ProductApi.getProducts('');

    setProduct(
      result.map((data: any) => ({
        value: data.id,
        label: data.name,
      }))
    );
  };

  const getClient = useCallback(async () => {
    if (state.client && state.client.value) {
      const { client } = await ClientAPI.getSingleClient(state.client.value);

      if (client && client.ambassador) {
        const response = await UsersAPI.getUser(client.ambassador.userId);

        setAmbassador({
          value: response.id,
          label: `${response.firstName} ${response.lastName}`,
        });
      } else {
        setAmbassador(null);
      }
    } else {
      setAmbassador(null);
    }
  }, [state.client?.value]);

  useEffect(() => {
    getClient();
  }, [state.client]);

  const getReportTypes = async () => {
    const result = await EnumsApi.getReportTypes();

    setReport(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getDiseaseAreas = async (s: string = '') => {
    setLoading(true);
    const { result } = await DiseaseAreaAPI.getAll(s);

    setDiseaseAreas(
      result.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    );
    setLoading(false);
  };

  const getLocations = async (s: string = '') => {
    setLoading(true);
    const { result } = await LocationAPI.getAll(s);
    setLocation(
      result.map((data: any) => ({
        value: data.id,
        label: data.country ? `${data.name}, ${data.country.name}` : data.name,
      }))
    );
    setLoading(false);
  };

  const getGenders = async () => {
    const result = await EnumsApi.getGenders();

    setGender(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getStakeholders = async () => {
    const result = await EnumsApi.getStakeholderTypes();

    setStakholders(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getEthnicities = async () => {
    const result = await EnumsApi.getEthnicities();

    setEthnicity(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getStruggles = async () => {
    const result = await EnumsApi.getStruggles();

    setStruggles(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };
  const getInterests = async () => {
    const result = await EnumsApi.getInterests();

    setInterests(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getInfluencerSizes = async () => {
    const { result } = await EnumsApi.getInfluencerSize();

    setInfluencerSize(
      result.map((x: any) => ({
        value: x.id,
        label: `${x.name}: ${x.from} - ${x.to}`,
      }))
    );
  };

  const getLanguages = async () => {
    const result = await EnumsApi.getLanguages();

    setLanguages(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getSympthoms = async () => {
    const response = await EnumsApi.getSymptoms();

    setSymptoms(
      response.result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  useEffect(() => {
    getCampaign();
  }, [id]);

  useEffect(() => {
    getProducts();
    getDiseaseAreas();
    getLocations();
    getReportTypes();
    getGenders();
    getStakeholders();
    getEthnicities();
    getStruggles();
    getInterests();
    getInfluencerSizes();
    getLanguages();
    getSympthoms();
  }, []);

  useEffect(() => {
    const newState = { ...state };

    if (newState) {
      if (campaign && Object.keys(campaign).length > 0 && campaign.name) {
        newState.campaignName = campaign.name;

        // if (campaign.campaignType) {
        //   newState.campaignType = {
        //     value: campaign.campaignType,
        //     label: 'Questionaire',
        //   };
        // }
        if (campaign.report) {
          newState.report = {
            value: campaign.report.value,
            label: campaign.report.name,
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

        if (campaign.ageMin && newState.age) {
          newState.age.min = campaign.ageMin;
        }

        if (campaign.ageMax && newState.age) {
          newState.age.max = campaign.ageMax;
        }

        if (campaign.description) {
          newState.campaignInfo = campaign.description;
        }

        if (campaign.dateStart) {
          newState.dateStart = campaign.dateStart;
        }

        if (campaign.dateEnd) {
          newState.dateEnd = campaign.dateEnd;
        }

        if (campaign.products) {
          newState.product = campaign.products.map((x: any) => ({
            value: x.product.id,
            label: x.product.name,
          }));
        }
        if (campaign.platformProductOrder) {
          if (
            campaign.platformProductOrder.currency &&
            campaign.platformProductOrder.currency.id
          ) {
            const currency = formatCurrencyIdToObject(
              campaign.platformProductOrder.currency.id - 1
            );

            if (currency) {
              newState.currency = {
                value: currency.id + 1,
                label: currency.short,
              };
            }
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
                (x: any) => ({
                  value: x.diseaseArea.id,
                  label: x.diseaseArea.name,
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

          if (
            campaign.platformProductOrder.client &&
            campaign.platformProductOrder.client.user &&
            campaign.platformProductOrder.client.user.lastName &&
            campaign.platformProductOrder.client.user.firstName &&
            campaign.platformProductOrder.client.user.id
          ) {
            newState.client = {
              value: campaign.platformProductOrder.client.user.id,
              label: `${campaign.platformProductOrder.client.user.firstName} ${campaign.platformProductOrder.client.user.lastName}`,
            };
          }
        }

        if (campaign.campaignInfluencersSizes) {
          newState.influencerSize = campaign.campaignInfluencersSizes.map(
            (x: any) => ({
              value: x.influencerSize.id,
              label: `${x.influencerSize.name}: ${x.influencerSize.from} | ${x.influencerSize.to}`,
            })
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

        if (campaign.socialPlatformId) {
          newState.platform = {
            value: campaign.socialPlatformId,
            label: 'Instagram',
          };
        }

        if (campaign.postType) {
          newState.postType = {
            value: campaign.postType.value,
            label: campaign.postType.name,
          };
        }

        if (campaign.description) {
          newState.campaignInfo = campaign.description;
        }

        if (campaign.influencersCount) {
          newState.influencerCount = campaign.influencersCount;
        }

        setState(newState);
      }
    }
  }, [campaign]);

  const [photo, setPhoto] = useState<any>(undefined);
  const [fileType, setFileType] = useState<string>('');
  const [photoName, setPhotoName] = useState('');
  const [modal, modalOpen, modalClose] = useModal(false);

  const handlePhotos = async () => {
    const file: any = await pick({
      accept: 'image/jpg, image/jpeg, image/png, application/pdf',
    });

    setPhotoName(file.name);

    const data = await FileManagerApi.fileUpload(file);

    const presignedUrl = await FileManagerApi.fileDownload(data.key);

    setPhoto(presignedUrl.data);

    setFileType(file.type);

    if (file.name && presignedUrl.data && file.type) {
      modalOpen();
    }
  };

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <Modal
      size="medium"
      title={
        <CampaignsTitle>
          {campaign && campaign?.name ? campaign.name : ''}
        </CampaignsTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={!state.campaignName}
          onClick={() => {
            onClose();
          }}
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
              required
            />
            <Input
              type="multiselect"
              label="Products"
              disabled
              value={state.product}
              onValue={(input) => setState({ ...state, product: input })}
              options={product}
              onSearch={debounce(getProducts, 250)}
              onNewTag={handleNewProductTag}
              loading={loading}
            />
            <Input
              label="Start Date"
              type="date"
              placeholder="From"
              disabled
              value={state.dateStart}
              min={state.dateStart ? state.dateStart : undefined}
              onValue={(input) => setState({ ...state, dateStart: input })}
            />
            <Input
              label="End Date"
              type="date"
              disabled
              placeholder="To"
              value={state.dateEnd}
              min={state.dateStart ? state.dateStart : undefined}
              onValue={(input) => setState({ ...state, dateEnd: input })}
            />
            <Input
              type="select"
              label="Report"
              disabled
              value={state.report}
              onValue={() => {}}
              options={report}
            />
            <Input
              type="number"
              min={0}
              label="Influencers"
              placeholder="Please Select"
              disabled
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
                type="number"
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
              onValue={(input) => setState({ ...state, location: input })}
              onSearch={debounce(getLocations, 250)}
              loading={loading}
              options={location}
            />
            <Input
              type="multiselect"
              label="Language"
              disabled
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
              options={languages}
            />
            <Input
              type="multiselect"
              label="Disease Area"
              disabled
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              onSearch={debounce(getDiseaseAreas, 250)}
              loading={loading}
              options={diseaseAreas}
              isFilterActive
            />
            <Input
              type="multiselect"
              label="Stakeholder"
              disabled
              value={state.stakeholders}
              onValue={(input) => setState({ ...state, stakeholders: input })}
              options={stakeholders}
            />
            <Input
              type="multiselect"
              label="Gender"
              disabled
              value={state.gender}
              onValue={(input) => setState({ ...state, gender: input })}
              options={gender}
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
              onValue={(input) => setState({ ...state, ethnicity: input })}
              options={ethnicity}
            />
            <Input
              type="multiselect"
              label="Struggle"
              disabled
              value={state.struggles}
              onValue={(input) => setState({ ...state, struggles: input })}
              options={struggles}
            />
            <Input
              type="multiselect"
              label="Interest"
              disabled
              value={state.interests}
              onValue={(input) => setState({ ...state, interests: input })}
              options={interests}
            />
            <Input
              type="multiselect"
              label="Influencer Size"
              disabled
              value={state.influencerSize}
              onValue={(input) => setState({ ...state, influencerSize: input })}
              options={influencerSize}
            />
            <Input
              type="multiselect"
              label="Symptom"
              disabled
              value={state.symptoms}
              onValue={(input) => setState({ ...state, symptoms: input })}
              options={symptoms}
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
              value={state.platform ? state.platform : null}
              onValue={(platform) => setState({ ...state, platform })}
              options={[
                {
                  value: 1,
                  label: 'Instagram',
                },
              ]}
            />
            <Input
              type="select"
              label="Post Type"
              disabled
              value={state.postType}
              onValue={(postType) => setState({ ...state, postType })}
              options={[
                {
                  value: 0,
                  label: 'Story',
                },
                {
                  value: 1,
                  label: 'Post',
                },
                {
                  value: 2,
                  label: 'Reel',
                },
              ]}
            />
            <GridCell columnSpan={1}>
              <ImageUploadMainContainer>
                <ImageUploadContainer>
                  <InputLabel>Image</InputLabel>
                  <Button
                    color="default"
                    variant="contained"
                    onClick={handlePhotos}
                  >
                    Upload
                  </Button>
                </ImageUploadContainer>
              </ImageUploadMainContainer>
            </GridCell>
            {modal && (
              <UploadedFileModal
                onClose={modalClose}
                name={photoName}
                url={photo}
                type={fileType}
              />
            )}
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
              disabled
              label="Participant"
              placeholder="Please Select"
              value={state.participantA}
              onValue={(participantA) => setState({ ...state, participantA })}
            />
            <Input
              type="text"
              disabled
              label="Submission"
              placeholder="www.instagram.com/link123"
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
              disabled
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
