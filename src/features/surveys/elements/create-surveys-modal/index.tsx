import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TCreateSurveysModalProps } from 'features/surveys/elements/create-surveys-modal/types';
import { CreateSurveysModalMain } from 'features/surveys/elements/create-surveys-modal/styles';
import { Button, Input, Switch } from 'components/ui';
import { GridCell, Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';

const CreateSurveysModal = ({
  onClose,
  ...props
}: TCreateSurveysModalProps) => {
  const [state, setState] = useState({
    surveyName: '',
    type: null,
    client: '',
    language: null,
    budget: '',
    surveyInfo: '',
    startFinishDate: {
      min: '',
      max: '',
    },

    numberOfParticipants: null,
    numberOfQuestions: null,
    diseaseArea: null,
    location: null,
    ageRange: null,
    gender: null,
    targetAudInfo: '',

    link: '',
    materials: null,
    survey: '',
  });

  const [tab, setTab] = useState(0);

  const handleFile = async () => {};

  return (
    <Modal
      size="medium"
      title="Create Survey"
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
      <Stack>
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
              onValue={(surveyName) => setState({ ...state, surveyName })}
            />
            <Input
              type="select"
              label="Type"
              placeholder="Please Select"
              value={state.type}
              onValue={(type) => setState({ ...state, type })}
            />
            <Input
              type="text"
              label="Client"
              placeholder="Please Enter"
              value={state.client}
              onValue={(client) => setState({ ...state, client })}
            />
            <Input
              type="min-max"
              label="Start & Finish date"
              placeholder="Please Select"
              value={state.startFinishDate}
              onValue={(startFinishDate) =>
                setState({ ...state, startFinishDate })
              }
            />
            <Input
              type="select"
              label="Language"
              placeholder="Please Select"
              value={state.language}
              onValue={(language) => setState({ ...state, language })}
            />
            <Input
              type="text"
              label="Budget"
              placeholder="Please Enter"
              value={state.budget}
              onValue={(budget) => setState({ ...state, budget })}
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
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
              type="text"
              label="Number of Participants"
              placeholder="Please Enter"
              value={state.numberOfParticipants}
              onValue={(numberOfParticipants) =>
                setState({ ...state, numberOfParticipants })
              }
            />
            <Input
              type="select"
              label="Number of Questions"
              placeholder="Please Select"
              value={state.numberOfQuestions}
              onValue={(numberOfQuestions) =>
                setState({ ...state, numberOfQuestions })
              }
            />
            <Input
              type="select"
              label="Disease area"
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
              label="Age range"
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
            />
            <GridCell columnSpan={2}>
              <Input
                multiline
                rows={5}
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
              placeholder="Please Enter"
              value={state.link}
              onValue={(link) => setState({ ...state, link })}
            />
            <GridCell columnSpan={1}>
              <InputLabel>Materials</InputLabel>
              <Button color="default" variant="contained" onClick={handleFile}>
                Upload
              </Button>
            </GridCell>
            <Input
              multiline
              rows={5}
              type="text"
              label="Survey"
              placeholder="Please Enter"
              value={state.survey}
              onValue={(survey) => setState({ ...state, survey })}
            />
          </CreateSurveysModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default CreateSurveysModal;
