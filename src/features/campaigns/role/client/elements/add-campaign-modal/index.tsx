import React, { useEffect, useState } from 'react';
import { CurrencyFeedback, Modal, Note, Tabs } from 'components/custom';
import { TAddCampaignsModalProps } from 'features/campaigns/role/client/elements/add-campaign-modal/types';
import { AddCampaignsModalMain } from 'features/campaigns/role/client/elements/add-campaign-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import {
  CampaignAPI,
  DiseaseAreaAPI,
  FileManagerApi,
  LocationAPI,
  ProductApi,
} from 'api';
import EnumsApi from 'api/enums';
import { useSnackbar } from 'hooks';
import { pick, read } from '@costorgroup/file-manager';

const AddCampaignModal = ({
  onClose,
  refresh,
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
    budget: '',
    campaignInfo: '',

    location: null,
    language: null,
    diseaseArea: null,
    stakeholders: [],
    gender: [],
    age: {
      min: '',
      max: '',
    },
    ethnicity: [],
    struggles: [],
    interests: [],
    influencerSize: [],
    influencerCount: null,
    targetAudienceInfo: '',

    platform: null,
    postType: null,
    image: null,
    website: '',
    instructions: '',
  });

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const [tab, setTab] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleNewStruggleTag = (v: any) => {
    setState({ ...state, struggles: [...state.struggles, v] });
  };
  const handleNewStakeholderTag = (v: any) => {
    setState({ ...state, stakeholders: [...state.stakeholders, v] });
  };
  const handleNewEthnicityTag = (v: any) => {
    setState({ ...state, ethnicity: [...state.ethnicity, v] });
  };
  const handleNewInterestsTag = (v: any) => {
    setState({ ...state, interests: [...state.interests, v] });
  };

  const handleNewProductTag = (v: any) => {
    setState({ ...state, product: [...state.product, v] });
  };

  const handleNewGendersTag = (v: any) => {
    setState({ ...state, gender: [...state.gender, v] });
  };

  const [product, setProduct] = useState<any>([]);
  const [report, setReport] = useState<any>();
  const [location, setLocation] = useState<any>();
  const [languages, setLanguages] = useState<any>();
  const [diseaseAreas, setDiseaseAreas] = useState<any>();
  const [stakeholders, setStakholders] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [age, setAge] = useState<any>();
  const [ethnicity, setEthnicity] = useState<any>();
  const [struggles, setStruggles] = useState<any>();
  const [interests, setInterests] = useState<any>();
  const [influencerSize, setInfluencerSize] = useState<any>();
  const [platform, setPlatform] = useState<any>();

  const getProducts = async (s: string = '') => {
    const { result } = await ProductApi.getProducts(s);

    setProduct(
      result.map((data: any) => ({
        value: data.id,
        label: data.name,
      }))
    );
  };

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
        label: data.name,
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
        label: `${x.name}: ${x.from} | ${x.to}`,
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

  const [photo, setPhoto] = useState<any>(undefined);

  const handlePhotos = async () => {
    const file: any = await pick();

    const { url } = await FileManagerApi.fileUpload(file);

    setPhoto(url);
  };

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
  }, []);

  const { push } = useSnackbar();

  useEffect(() => {
    console.log(state);
  }, [state]);

  const createCampaign = async () => {
    try {
      const body = {
        name: state.campaignName,
        budget: state.budget ? parseInt(state.budget, 10) : undefined,
        diseaseAreaId: state.diseaseArea ? state.diseaseArea.value : undefined,
        struggleIds: state.struggles
          ? state.struggles.map((x: any) => x.value)
          : undefined,
        stakeholderTypes: state.stakeholders
          ? state.stakeholders.map((x: any) => x.value)
          : undefined,
        locationId: state.location ? state.location.value : undefined,
        languageId: state.language ? state.language.value : undefined,
        ethnicityIds: state.ethnicity
          ? state.ethnicity.map((x: any) => x.value)
          : undefined,
        interestIds: state.interests
          ? state.interests.map((x: any) => x.value)
          : undefined,
        productIds: state.product
          ? state.product.map((x: any) => x.value)
          : undefined,
        dateStart: state.startDate ? state.startDate : undefined,
        dateEnd: state.endDate ? state.endDate : undefined,
        description: state.campaignInfo ? state.campaignInfo : undefined,
        influencersCount: state.influencerCount
          ? state.influencerCount.value
          : undefined,
        influencersSizeId: state.influencerSize
          ? state.influencerSize.map((x: any) => x.value)
          : undefined,
        ageMin: state.age.min ? parseInt(state.age.min, 10) : undefined,
        ageMax: state.age.max ? parseInt(state.age.max, 10) : undefined,
        genders: state.gender
          ? state.gender.map((x: any) => x.value)
          : undefined,
        targetAudienceDescription: state.targetAudienceInfo
          ? state.targetAudienceInfo
          : undefined,
        socialPlatformId: state.platform ? state.platform.value : undefined,
        postType: state.postType ? state.postType.value : undefined,
        clientCompanyWebsite: state.website ? state.website : undefined,
        instructions: state.instructions ? state.instructions : undefined,
        report: state.report ? state.report.value : undefined,
        exampleImageUrls: photo !== undefined ? [photo] : undefined,
      };

      await CampaignAPI.addCampaign(body);

      push('Campaign successfully added.', { variant: 'success' });
    } catch (e) {
      push('Campaign add failed.', { variant: 'error' });
      console.error(e);
    }
  };

  return (
    <Modal
      size="medium"
      title="Create Campaign"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            createCampaign();
            refresh();
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
              type="multiselect"
              label="Products"
              placeholder="Please Select"
              value={state.product}
              onValue={(input) => setState({ ...state, product: input })}
              options={product}
              onSearch={debounce(getProducts, 250)}
              onNewTag={handleNewProductTag}
              loading={loading}
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
              onValue={(input) => setState({ ...state, report: input })}
              options={report}
            />
            <Stack>
              <Input
                label="Budget"
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
              onValue={(input) => setState({ ...state, location: input })}
              onSearch={debounce(getLocations, 250)}
              loading={loading}
              options={location}
            />
            <Input
              type="select"
              label="Language"
              placeholder="Please Select"
              value={state.language}
              onValue={(input) => setState({ ...state, language: input })}
              options={languages}
            />
            <Input
              type="select"
              label="Disease Area"
              placeholder="Please Select"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              onSearch={debounce(getDiseaseAreas, 250)}
              loading={loading}
              options={diseaseAreas}
            />
            <Input
              type="multiselect"
              label="Stakeholders"
              placeholder="Please Select"
              value={state.stakeholders}
              onValue={(input) => setState({ ...state, stakeholders: input })}
              options={stakeholders}
              onNewTag={handleNewStakeholderTag}
            />
            <Input
              type="multiselect"
              label="Genders"
              placeholder="Please Select"
              value={state.gender}
              onValue={(input) => setState({ ...state, gender: input })}
              options={gender}
              onNewTag={handleNewGendersTag}
            />
            <Input
              type="min-max"
              label="Age"
              placeholder="Please Select"
              value={state.age}
              onValue={(input) => setState({ ...state, age: input })}
            />
            <Input
              type="multiselect"
              label="Ethnicities"
              placeholder="Please Select"
              value={state.ethnicity}
              onValue={(input) => setState({ ...state, ethnicity: input })}
              options={ethnicity}
              onNewTag={handleNewEthnicityTag}
            />
            <Input
              type="multiselect"
              label="Struggles"
              placeholder="Please Select"
              value={state.struggles}
              onValue={(input) => setState({ ...state, struggles: input })}
              options={struggles}
              onNewTag={handleNewStruggleTag}
            />
            <Input
              type="multiselect"
              label="Interests"
              placeholder="Please Select"
              value={state.interests}
              onValue={(input) => setState({ ...state, interests: input })}
              options={interests}
              onNewTag={handleNewInterestsTag}
            />
            <Input
              type="multiselect"
              label="Influencer Size"
              placeholder="Please Select"
              value={state.influencerSize}
              onValue={(input) => setState({ ...state, influencerSize: input })}
              options={influencerSize}
            />
            <Input
              type="number"
              min={0}
              label="Influencer Count"
              placeholder="Please Select"
              value={state.influencerCount}
              onValue={(input) =>
                setState({ ...state, influencerCount: input > 0 ? input : 0 })
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
              onValue={(input) => setState({ ...state, platform: input })}
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
              placeholder="Please Select"
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
              <InputLabel>Image</InputLabel>
              <Button
                color="default"
                variant="contained"
                onClick={handlePhotos}
              >
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
                value={state.instructions}
                onValue={(instructions) => setState({ ...state, instructions })}
              />
            </GridCell>
          </AddCampaignsModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default AddCampaignModal;
