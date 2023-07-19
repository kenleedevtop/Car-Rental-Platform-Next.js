import React, { useCallback, useEffect, useState } from 'react';
import { CurrencyFeedback, Modal, Tabs } from 'components/custom';
import { Button, Input } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import {
  ClientAPI,
  DiseaseAreaAPI,
  EnumsApi,
  FileManagerApi,
  LocationAPI,
  ProductApi,
  SurveyAPI,
} from 'api';
import { CampaignsTitle } from 'features/campaigns/role/admin/elements/created-campaign-modal/styles';
import { EditIcon } from 'components/svg';
import { pick } from '@costorgroup/file-manager';
import UsersAPI from 'api/users';
import { useSnackbar } from 'hooks';
import { TCreateSurveysModalProps } from './types';
import { CreateSurveysModalMain } from './styles';

const CreatedSurveysModal = ({
  onClose,
  id,
  reload,
  ...props
}: TCreateSurveysModalProps) => {
  const [survey, setSurvey] = useState<any>();

  const [state, setState] = useState<any>({
    surveyName: '',
    product: [],
    participants: null,
    startDate: null,
    endDate: null,
    budget: '',
    currency: null,
    tokens: null,
    surveyInfo: '',
    client: null,

    location: [],
    language: [],
    diseaseArea: [],
    gender: [],
    ageRange: {
      min: null,
      max: null,
    },
    stakeholders: [],
    ethnicity: [],
    struggles: [],
    interests: [],
    targetAudInfo: '',
    questionsCount: null,
    questionCredits: null,
    surveyType: null,
    link: '',
    materials: [],
    instructions: '',
    symptoms: [],
  });

  const [tab, setTab] = useState(0);

  const handleFile = async () => {};

  const getSurvey = async () => {
    const result = await SurveyAPI.getSurvey(id);

    setSurvey(result);
  };

  useEffect(() => {
    getSurvey();
  }, [id]);

  useEffect(() => {
    const newState = { ...state };

    if (survey && Object.keys(survey)?.length > 0) {
      newState.surveyName = survey.name;

      if (survey.instructions) {
        newState.instructions = survey.instructionsDescription;
      }

      if (survey.surveyType) {
        newState.surveyType = {
          value: survey.surveyType,
          label: 'Questionaire',
        };
      }

      if (survey.participantCount) {
        newState.participants = survey.participantCount;
      }

      // if (survey.questionCredits) {
      //   newState.questionCredits = survey.questionCredits;
      // }

      if (survey.questionCount) {
        newState.questionsCount = survey.questionCount;
      }

      if (survey.clientSurveyTokenBalances) {
        newState.tokens = {
          value: survey.clientSurveyTokenBalances[0].tokenBalance,
          label: `${survey.clientSurveyTokenBalances[0].tokenBalance} Tokens`,
        };
      }

      if (survey.link) {
        newState.link = survey.link;
      }

      if (survey.participantsDescription) {
        newState.targetAudInfo = survey.participantsDescription;
      }

      if (survey.ageMin) {
        newState.ageRange.min = survey.ageMin;
      }

      if (survey.ageMax) {
        newState.ageRange.max = survey.ageMax;
      }

      if (survey.surveyDescription) {
        newState.surveyInfo = survey.surveyDescription;
      }

      if (survey.dateStart) {
        newState.startDate = survey.dateStart;
      }

      if (survey.dateEnd) {
        newState.endDate = survey.dateEnd;
      }

      if (survey.products) {
        newState.product = survey.products.map((x: any) => ({
          value: x.product.id,
          label: x.product.name,
        }));
      }

      if (survey.platformProductOrder.platformProductOrderLocations) {
        newState.location =
          survey.platformProductOrder.platformProductOrderLocations.map(
            (x: any) => ({
              value: x.location.id,
              label: x.location.country
                ? `${x.location.name}, ${x.location.country.name}`
                : x.location.name,
            })
          );
      }

      if (survey.platformProductOrder.platformProductOrderDiseaseAreas) {
        newState.diseaseArea =
          survey.platformProductOrder.platformProductOrderDiseaseAreas.map(
            (x: any) => ({ value: x.diseaseArea.id, label: x.diseaseArea.name })
          );
      }

      if (survey.platformProductOrder.platformProductOrderEthnicities) {
        newState.ethnicity =
          survey.platformProductOrder.platformProductOrderEthnicities.map(
            (x: any) => ({ value: x.ethnicity.id, label: x.ethnicity.name })
          );
      }

      if (survey.platformProductOrder.platformProductOrderStruggles) {
        newState.struggles =
          survey.platformProductOrder.platformProductOrderStruggles.map(
            (x: any) => ({ value: x.struggle.id, label: x.struggle.name })
          );
      }

      if (survey.platformProductOrder.platformProductOrderInterests) {
        newState.interests =
          survey.platformProductOrder.platformProductOrderInterests.map(
            (x: any) => ({ value: x.interest.id, label: x.interest.name })
          );
      }

      if (survey.platformProductOrder.platformProductOrderLanguages) {
        newState.language =
          survey.platformProductOrder.platformProductOrderLanguages.map(
            (x: any) => ({ value: x.value, label: x.name })
          );
      }

      if (survey.platformProductOrder.platformProductOrderSymptoms) {
        newState.symptoms =
          survey.platformProductOrder.platformProductOrderSymptoms.map(
            (x: any) => ({ value: x.symptom.id, label: x.symptom.name })
          );
      }

      if (survey.instructionsDescription) {
        newState.instructions = survey.instructionsDescription;
      }

      if (survey.surveyType !== null) {
        const surveyTypes = [
          'Questionaire',
          'Short Interview',
          'Long Interview',
        ];

        newState.surveyType = {
          value: survey.surveyType,
          label: surveyTypes[survey.surveyType],
        };
      }

      if (survey.platformProductOrder.budget) {
        newState.budget = survey.platformProductOrder.budget;
      }

      if (survey.platformProductOrder.platformProductOrderGenders) {
        newState.gender =
          survey.platformProductOrder.platformProductOrderGenders.map(
            (x: any) => ({
              value: x.value,
              label: x.name,
            })
          );
      }

      if (
        survey.platformProductOrder.client &&
        survey.platformProductOrder.client.user &&
        survey.platformProductOrder.client.user.lastName &&
        survey.platformProductOrder.client.user.firstName &&
        survey.platformProductOrder.client.user.id
      ) {
        newState.client = {
          value: survey.platformProductOrder.client.user.id,
          label: `${survey.platformProductOrder.client.user.firstName} ${survey.platformProductOrder.client.user.lastName}`,
        };
      }

      if (survey.stakeholderTypes) {
        newState.stakeholders = survey.stakeholderTypes.map((x: any) => ({
          value: x.value,
          label: x.name,
        }));
      }

      setState(newState);
    }
  }, [survey]);

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>([]);
  const [location, setLocation] = useState<any>([]);
  const [diseaseAreas, setDiseaseAreas] = useState<any>([]);
  const [stakeholders, setStakholders] = useState<any>();
  const [gender, setGender] = useState<any>([]);
  const [ethnicity, setEthnicity] = useState<any>([]);
  const [struggles, setStruggles] = useState<any>([]);
  const [interests, setInterests] = useState<any>([]);
  const [surveyTypes, setSurveyTypes] = useState<any>([]);
  const [tokens, setTokens] = useState<any>(null);
  const [symptoms, setSymptoms] = useState<any>();
  const [ambassador, setAmbassador] = useState<any>();

  const handleNewProductTag = (v: any) => {
    setState({ ...state, product: [...state.product, v] });
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

  const getProducts = async (s: string = '') => {
    const { result } = await ProductApi.getProducts(s);

    setProduct(
      result.map((data: any) => ({
        value: data.id,
        label: data.name,
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

  const [photo, setPhoto] = useState<any>('');
  const [photoName, setPhotoName] = useState('');

  const handlePhotos = async () => {
    const file: any = await pick();

    setPhotoName(file.name);

    const { url } = await FileManagerApi.fileUpload(file);

    setPhoto(url);
  };

  const getSurveyTypes = async () => {
    const result = await EnumsApi.getSurveyTypes();

    setSurveyTypes(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getSurveyTokens = async () => {
    const result = await SurveyAPI.getTokens();

    setTokens(
      result.map((x: any) => ({
        value: x.value,
        label: `${x.value} Tokens`,
      }))
    );
  };

  const getSymptoms = async () => {
    const response = await EnumsApi.getSymptoms();

    setSymptoms(
      response.result.map((x: any) => ({
        value: x.id,
        label: x.name,
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
    getProducts();
    getClient();
    getDiseaseAreas();
    getLocations();
    getGenders();
    getEthnicities();
    getStruggles();
    getInterests();
    getSurveyTypes();
    getSurveyTokens();
    getStakeholders();
    getSymptoms();
  }, []);

  const { push } = useSnackbar();

  const updateSurvey = useCallback(async () => {
    try {
      const body = {
        name: state.surveyName,
        budget: state.budget ? parseInt(state.budget, 10) : undefined,
        diseaseAreaIds: state.diseaseArea
          ? state.diseaseArea.map((x: any) => x.value)
          : [],
        struggleIds: state.struggles
          ? state.struggles.map((x: any) => x.value)
          : undefined,
        locationIds: state.location
          ? state.location.map((x: any) => x.value)
          : [],
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
        description: state.surveyInfo ? state.surveyInfo : undefined,
        participantsCount: state.participants
          ? parseInt(state.participants, 10)
          : undefined,
        questionsCount: state.questionsCount
          ? parseInt(state.questionsCount, 10)
          : undefined,
        ageMin: state.ageRange.min
          ? parseInt(state.ageRange.min, 10)
          : undefined,
        ageMax: state.ageRange.max
          ? parseInt(state.ageRange.max, 10)
          : undefined,
        genders: state.gender
          ? state.gender.map((x: any) => x.value)
          : undefined,
        participantsDescription: state.targetAudInfo
          ? state.targetAudInfo
          : undefined,
        surveyType: state.surveyType ? state.surveyType.value : undefined,
        exampleImageUrls: [photo] || undefined,
        instructions: state.instructions ? state.instructions : undefined,
        tokens: state.tokens ? state.tokens.value : null,
        link: state.link ? state.link : undefined,
        languages: state.language
          ? state.language.map((x: any) => x.value)
          : [],
        clientId: state.client.value || undefined,
        stakeholderTypes: state.stakeholders.map((x: any) => x.value),
        symptomIds: state.symptoms.map((x: any) => x.value),
        // questionCredits: state.questionsCredit
        //   ? parseInt(state.questionCredits, 10)
        //   : undefined,
      };

      await SurveyAPI.updateSurvey(id, body).then(() => {
        push('Survey successfully added.', { variant: 'success' });
        reload();
        onClose();
      });
    } catch (e) {
      push('Survey update failed.', { variant: 'error' });
    }
  }, [state]);

  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit((prev) => !prev);
  };

  const disabled = !state.surveyName || !state.tokens;

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
          {survey && survey?.name ? survey.name : ''}
          <EditIcon
            style={
              edit
                ? { cursor: 'pointer', color: '#7E839F' }
                : { cursor: 'pointer', color: '#448DC9' }
            }
            onClick={handleEdit}
          />
        </CampaignsTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={updateSurvey}
          disabled={disabled}
        >
          Update
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '600px', overflowY: 'scroll' }}>
        <Tabs
          tabs={['Info', 'Target', 'Instructions']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <CreateSurveysModalMain columns={2}>
            <Input
              type="text"
              label="Survey name"
              value={state.surveyName}
              disabled={!edit}
              onValue={(surveyName) => setState({ ...state, surveyName })}
              required={!edit}
            />
            {tokens && state.tokens && (
              <Input
                type="select"
                label="Tokens"
                value={state.tokens}
                disabled={!edit}
                onValue={(input) => setState({ ...state, tokens: input })}
                required={!edit}
                options={tokens}
              />
            )}
            <Input
              type="text"
              label="Client"
              placeholder="Please Select"
              value={state.client?.label}
              onValue={(client) => setState({ ...state, client })}
              disabled
            />
            <Input
              type="text"
              label="Ambassador"
              placeholder="Please Select"
              value={ambassador?.label ?? 'None'}
              onValue={(input) => setState({ ...state, ambassador: input })}
              disabled
            />
            <Input
              type="multiselect"
              label="Product"
              value={state.product}
              disabled={!edit}
              onValue={(input) => setState({ ...state, product: input })}
              options={product}
              onSearch={debounce(getProducts, 250)}
              onNewTag={handleNewProductTag}
              loading={loading}
            />
            <Input
              type="number"
              label="Participants"
              value={state.participants}
              disabled={!edit}
              onValue={(participants) => setState({ ...state, participants })}
            />
            <Input
              type="number"
              label="Questions Count"
              disabled={!edit}
              value={state.questionsCount}
              onValue={(questionsCount) =>
                setState({ ...state, questionsCount })
              }
            />
            {/* <Input
              type="number"
              label="Question Credits"
              disabled={!edit}
              value={state.questionCredits}
              onValue={(questionCredits) =>
                setState({ ...state, questionCredits })
              }
            /> */}
            <Input
              type="select"
              label="Survey Type"
              placeholder="Please Select"
              value={state.surveyType}
              disabled={!edit}
              onValue={(surveyType) => setState({ ...state, surveyType })}
              options={surveyTypes}
            />
            <Input
              type="date"
              label="Start Date"
              value={state.startDate}
              disabled={!edit}
              max={state.endDate}
              onValue={(startDate) => setState({ ...state, startDate })}
            />
            <Input
              type="date"
              label="End Date"
              value={state.endDate}
              disabled={!edit}
              min={state.startDate}
              onValue={(endDate) => setState({ ...state, endDate })}
            />
            <Stack>
              <Input
                type="number"
                value={state.budget}
                disabled={!edit}
                onValue={(budget) => setState({ ...state, budget })}
                placeholder="Please Enter"
                startAdornment="CHF"
                label="Budget"
              />
              <CurrencyFeedback value={state.budget} />
            </Stack>
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                disabled={!edit}
                type="text"
                label="Survey Info"
                value={state.surveyInfo}
                onValue={(surveyInfo) => setState({ ...state, surveyInfo })}
              />
            </GridCell>
          </CreateSurveysModalMain>
        )}
        {tab === 1 && (
          <CreateSurveysModalMain columns={2}>
            <Input
              type="multiselect"
              label="Location"
              disabled={!edit}
              value={state.location}
              onValue={(input) => setState({ ...state, location: input })}
              onSearch={debounce(getLocations, 250)}
              loading={loading}
              options={location}
            />
            <Input
              type="multiselect"
              label="Language"
              disabled={!edit}
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
              options={[
                {
                  value: 0,
                  label: 'English',
                },
                {
                  value: 1,
                  label: 'French',
                },
                {
                  value: 2,
                  label: 'German',
                },
                {
                  value: 3,
                  label: 'Spanish',
                },
                {
                  value: 4,
                  label: 'Italian',
                },
              ]}
            />
            <Input
              type="multiselect"
              label="Disease Area"
              disabled={!edit}
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
              placeholder="Please Select"
              value={state.stakeholders}
              onValue={(input) => setState({ ...state, stakeholders: input })}
              options={stakeholders}
              disabled={!edit}
              onSearch={debounce(getStakeholders, 250)}
            />
            <Input
              type="multiselect"
              label="Gender"
              placeholder="Please Select"
              value={state.gender}
              onValue={(input) => setState({ ...state, gender: input })}
              options={gender}
              disabled={!edit}
            />
            <Input
              type="min-max"
              label="Age"
              disabled={!edit}
              value={state.ageRange}
              onValue={(ageRange) => setState({ ...state, ageRange })}
            />
            <Input
              type="multiselect"
              label="Ethnicity"
              disabled={!edit}
              value={state.ethnicity}
              onValue={(input) => setState({ ...state, ethnicity: input })}
              options={ethnicity}
            />
            <Input
              type="multiselect"
              label="Struggle"
              disabled={!edit}
              value={state.struggles}
              onValue={(input) => setState({ ...state, struggles: input })}
              options={struggles}
            />
            <Input
              type="multiselect"
              label="Symptom"
              disabled={!edit}
              placeholder="Please Select"
              value={state.symptoms}
              onValue={(input) => setState({ ...state, symptoms: input })}
              options={symptoms}
            />
            <Input
              type="multiselect"
              label="Interest"
              disabled={!edit}
              value={state.interests}
              onValue={(input) => setState({ ...state, interests: input })}
              options={interests}
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                disabled={!edit}
                type="text"
                label="Target audience info"
                value={state.targetAudInfo}
                onValue={(targetAudInfo) =>
                  setState({ ...state, targetAudInfo })
                }
              />
            </GridCell>
          </CreateSurveysModalMain>
        )}
        {tab === 2 && (
          <CreateSurveysModalMain columns={1}>
            <Input
              type="text"
              label="Link"
              disabled={!edit}
              value={state.link}
              onValue={(link) => setState({ ...state, link })}
            />
            <GridCell columnSpan={1}>
              <InputLabel>Materials</InputLabel>
              <Button
                disabled={!edit}
                color="default"
                variant="contained"
                onClick={handleFile}
              >
                Upload
              </Button>
            </GridCell>
            <Input
              multiline
              rows={5}
              disabled={!edit}
              type="text"
              label="Instructions"
              value={state.instructions}
              onValue={(instructions) => setState({ ...state, instructions })}
            />
          </CreateSurveysModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default CreatedSurveysModal;
