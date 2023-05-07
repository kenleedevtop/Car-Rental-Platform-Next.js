import { CardWithText, CheckboxTable, Tabs, Title } from 'components/custom';
import React, { useEffect, useState } from 'react';
import { Question } from 'features/create-survey/elements';
import {
  CreateSurveyPageMain,
  AddQuestion,
  QuestionContainer,
  CreateSurveyActions,
  CreditContainer,
  CreateSurveyButtons,
} from 'features/create-survey/styles';
import { Button, Card, Input, Label } from 'components/ui';
import { AddIcon } from 'components/svg';
import { v4 } from 'uuid';
import {
  DQuestionMultichoiceConstructor,
  DQuestionMultiselectConstructor,
  DQuestionParagraphConstructor,
  DQuestionShortConstructor,
} from 'features/create-survey/elements/question/data';
import {
  TSurveyQuestionData,
  TSurveyQuestionType,
} from 'features/create-survey/types';
import { BubbleChart, PieChart } from 'components/csr';
import { Stack } from 'components/system';
import { InputLabel } from 'components/ui/input/styles';
import Theme from 'theme';

const CreateSurveyPage = () => {
  const [tab, setTab] = useState(0);

  const [questions, setQuestions] = useState<Array<TSurveyQuestionData>>([
    {
      id: v4(),
      credit: '',
      type: 'short',
      optional: false,
      question: '',
    },
  ]);

  const [variables, setVariables] = useState('');

  const [credit, setCredit] = useState(0);

  // const handleTab = e => {}

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: v4(),
        credit: '',
        type: 'short',
        optional: false,
        question: '',
      },
    ]);
  };

  const deleteQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((el) => el.id !== id));
  };

  const copyQuestion = (id: string) => {
    const helperId = questions.findIndex((el) => el.id === id);
    const helper = questions.find((el) => el.id === id);
    if (helper && helperId > -1) {
      const copiedQuestion = { ...helper, id: v4() };
      const copiedArray = [...questions];
      copiedArray.splice(helperId, 0, copiedQuestion);
      setQuestions(copiedArray);
    }
  };

  // type fix
  const updateQuestion = (id: string) => (a: any) => {
    setQuestions(questions.map((x) => (x.id === id ? { ...x, ...a } : x)));
  };

  const updateCredit = () => {
    let sum: number = 0;
    questions.forEach((x) => {
      sum += Number(x.credit);
    });
    setCredit(sum);
  };

  useEffect(() => {
    console.log(questions);
    updateCredit();
  }, [questions]);

  const changeType = (id: string) => (value: TSurveyQuestionType) => {
    const questionTypes = {
      short: DQuestionShortConstructor,
      paragraph: DQuestionParagraphConstructor,
      multichoice: DQuestionMultichoiceConstructor,
      multiselect: DQuestionMultiselectConstructor,
    };
    const newQuestion = questionTypes[value]();
    setQuestions((prev) => prev.map((el) => (el.id === id ? newQuestion : el)));
  };

  const submitSurvey = () => {};

  return (
    <CreateSurveyPageMain>
      <Tabs
        value={tab}
        onValue={setTab}
        tabs={['Questions', 'Responses', 'Participants']}
      />

      {tab === 0 && (
        <>
          <CardWithText title="Survey Name">
            <Label>
              Question credits <CreditContainer>{credit}</CreditContainer>
            </Label>
          </CardWithText>
          <Card>
            <QuestionContainer>
              {questions.map((el, index) => (
                <Question
                  questionId={index + 1}
                  copy={copyQuestion}
                  remove={deleteQuestion}
                  updateQuestion={updateQuestion(el.id)}
                  changeType={changeType(el.id)}
                  question={el}
                />
              ))}
            </QuestionContainer>
            <CreateSurveyActions>
              <AddQuestion onClick={addQuestion}>
                <AddIcon />
                Add new question
              </AddQuestion>
              <Button
                size="large"
                color="primary"
                variant="contained"
                onClick={submitSurvey}
              >
                Submit Survey
              </Button>
            </CreateSurveyActions>
          </Card>
        </>
      )}
      {tab === 1 && (
        <Card>
          <Stack>
            {questions.map((el, index) => (
              <Question
                questionId={index + 1}
                copy={copyQuestion}
                remove={deleteQuestion}
                updateQuestion={updateQuestion(el.id)}
                changeType={changeType(el.id)}
                question={el}
              />
            ))}
            <Stack direction="horizontal">
              <Stack
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <InputLabel> Results </InputLabel>
                <PieChart
                  style={{ width: '50%' }}
                  labels={['Patients', 'Doctors', 'Nurses', 'Muggles']}
                  data={[21, 52, 23, 14]}
                />
              </Stack>
              <Stack>
                <Input
                  type="select"
                  label="Variable"
                  placeholder="Please Select"
                  value={variables}
                  onValue={(updated) => setVariables(updated)}
                />
                <div style={{ width: '100%', height: 400 }}>
                  <BubbleChart
                    labels={[
                      '0-5',
                      '6-10',
                      '11-15',
                      '16-20',
                      '21-25',
                      '26-30',
                      '31-35',
                      '36-40',
                      '41-45',
                      '46-50',
                    ]}
                    data={[
                      {
                        color: `${Theme.palette.primary.main}`,
                        values: [
                          { x: 1, y: 1, r: 20 },
                          { x: 2, y: 2, r: 5 },
                          { x: 3, y: 3, r: 50 },
                        ],
                      },
                      {
                        color: `${Theme.palette.secondary.main}`,
                        values: [
                          { x: 3, y: 1, r: 1 },
                          { x: 4, y: 2, r: 2 },
                          { x: 5, y: 3, r: 8 },
                        ],
                      },
                    ]}
                    verticalLabel="Number of Influencers"
                    horizontalLabel="Amount Per Post"
                  />
                </div>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      )}

      {tab === 2 && (
        <CardWithText title="Survey" description="Influencers">
          <CheckboxTable
            head={[
              {
                reference: 'username',
                label: 'Username',
                visible: true,
              },
              {
                reference: 'status',
                label: 'Status',
                visible: true,
              },
              {
                reference: 'statusChange',
                label: 'Status change',
                visible: true,
              },
              {
                reference: 'hyperlink',
                label: 'Hyperlinks',
                visible: true,
              },
              {
                reference: 'actions',
                label: 'Actions',
                visible: true,
              },
            ]}
            items={[]}
            renderItem={() => {}}
          />
          <CreateSurveyButtons>
            <Button variant="contained" color="default">
              Back
            </Button>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </CreateSurveyButtons>
        </CardWithText>
      )}
    </CreateSurveyPageMain>
  );
};

export default CreateSurveyPage;
