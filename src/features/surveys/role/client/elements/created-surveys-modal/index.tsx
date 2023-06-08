import React, { useEffect, useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TCreateSurveysModalProps } from 'features/surveys/role/client/elements/created-surveys-modal/types';
import { CreateSurveysModalMain } from 'features/surveys/role/client/elements/created-surveys-modal/styles';
import { Button, Input, InputGroup } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import { SurveyAPI } from 'api';

const CreateSurveysModal = ({
  onClose,
  id,
  ...props
}: TCreateSurveysModalProps) => {
  const [survey, setSurvey] = useState<any>(null);

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

    location: null,
    language: null,
    diseaseArea: null,
    gender: [],
    ageRange: {
      min: null,
      max: null,
    },
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

    if (survey && Object.keys(survey).length > 0) {
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

      if (survey.questionCredits) {
        newState.questionCredits = survey.questionCredits;
      }

      if (survey.questionCount) {
        newState.questionCount = survey.questionCount;
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

      if (survey.platformProductOrder.platformProductOrderLocations?.[0]) {
        newState.location = {
          value:
            survey.platformProductOrder.platformProductOrderLocations?.[0]
              .location.id,
          label:
            survey.platformProductOrder.platformProductOrderLocations?.[0]
              .location.name,
        };
        // survey.platformProductOrder.platformProductOrderLocations.map(
        //   (x: any) => ({ value: x.location.id, label: x.location.name })
        // );
      }

      if (survey.platformProductOrder.platformProductOrderDiseaseAreas?.[0]) {
        newState.diseaseArea = {
          value:
            survey.platformProductOrder.platformProductOrderDiseaseAreas?.[0]
              .diseaseArea.id,
          label:
            survey.platformProductOrder.platformProductOrderDiseaseAreas?.[0]
              .diseaseArea.name,
        };
        // survey.platformProductOrder.platformProductOrderDiseaseAreas.map(
        //   (x: any) => ({ value: x.diseaseArea.id, label: x.diseaseArea.name })
        // );
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

      if (survey.language) {
        switch (survey.language) {
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

      if (survey.instructionsDescription) {
        newState.instructions = survey.instructionsDescription;
      }

      if (survey.surveyType !== null) {
        newState.surveyType = {
          value: 0,
          label: 'Questionaire',
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

      setState(newState);
    }
  }, [survey]);

  return (
    <Modal
      size="medium"
      title={survey && survey.name ? survey.name : ''}
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
              placeholder="Please Enter"
              value={state.surveyName}
              disabled
              onValue={(surveyName) => setState({ ...state, surveyName })}
            />
            <Input
              type="multiselect"
              label="Product"
              placeholder="Please Select"
              value={state.product}
              disabled
              onValue={(product) => setState({ ...state, product })}
            />
            <Input
              type="number"
              label="Participants"
              placeholder="Please Select"
              value={state.participants}
              disabled
              onValue={(participants) => setState({ ...state, participants })}
            />
            <Input
              type="number"
              label="Questions Count"
              disabled
              placeholder="Please Enter"
              value={state.questionsCount}
              onValue={(questionsCount) =>
                setState({ ...state, questionsCount })
              }
            />
            <Input
              type="number"
              label="Question Credits"
              placeholder="Please Enter"
              disabled
              value={state.questionCredits}
              onValue={(questionCredits) =>
                setState({ ...state, questionCredits })
              }
            />
            <Input
              type="select"
              label="Survey Type"
              placeholder="Please Select"
              value={state.surveyType}
              disabled
              onValue={(surveyType) => setState({ ...state, surveyType })}
            />
            <Input
              type="date"
              label="Start Date"
              placeholder="Please Select"
              value={state.startDate}
              disabled
              onValue={(startDate) => setState({ ...state, startDate })}
            />
            <Input
              type="date"
              label="End Date"
              placeholder="Please Select"
              value={state.endDate}
              disabled
              onValue={(endDate) => setState({ ...state, endDate })}
            />
            <Input
              type="select"
              label="Tokens"
              placeholder="Please Select"
              value={state.tokens}
              disabled
              onValue={(tokens) => setState({ ...state, tokens })}
            />
            <InputGroup
              label="Budget"
              inputRatio="100px 1fr"
              disabled
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
                disabled
                type="text"
                label="Survey Info"
                placeholder="Please Enter"
                value={state.surveyInfo}
                onValue={(surveyInfo) => setState({ ...state, surveyInfo })}
              />
            </GridCell>
          </CreateSurveysModalMain>
        )}
        {tab === 1 && (
          <CreateSurveysModalMain columns={2}>
            <Input
              type="select"
              label="Location"
              disabled
              placeholder="Please Select"
              value={state.location}
              onValue={(location) => setState({ ...state, location })}
            />
            <Input
              type="select"
              label="Language"
              disabled
              placeholder="Please Select"
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
            />
            <Input
              type="select"
              label="Disease area"
              disabled
              placeholder="Please Select"
              value={state.diseaseArea}
              onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
            />
            <Input
              type="multiselect"
              label="Gender"
              disabled
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
                  value: 2,
                  label: 'Other',
                },
              ]}
            />
            <Input
              type="min-max"
              label="Age"
              disabled
              placeholder="Please Select"
              value={state.ageRange}
              onValue={(ageRange) => setState({ ...state, ageRange })}
            />
            <Input
              type="multiselect"
              label="Ethnicity"
              disabled
              placeholder="Please Select"
              value={state.ethnicity}
              onValue={(ethnicity) => setState({ ...state, ethnicity })}
            />
            <Input
              type="multiselect"
              label="Struggles"
              disabled
              placeholder="Please Select"
              value={state.struggles}
              onValue={(struggles) => setState({ ...state, struggles })}
            />
            <Input
              type="multiselect"
              label="Interests"
              disabled
              placeholder="Please Select"
              value={state.interests}
              onValue={(interests) => setState({ ...state, interests })}
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
                disabled
                type="text"
                label="Target audience info"
                placeholder="Please Enter"
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
              disabled
              placeholder="Please Enter"
              value={state.link}
              onValue={(link) => setState({ ...state, link })}
            />
            <GridCell columnSpan={1}>
              <InputLabel>Materials</InputLabel>
              <Button
                disabled
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
              disabled
              type="text"
              label="Instructions"
              placeholder="Please Enter"
              value={state.instructions}
              onValue={(instructions) => setState({ ...state, instructions })}
            />
          </CreateSurveysModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default CreateSurveysModal;
