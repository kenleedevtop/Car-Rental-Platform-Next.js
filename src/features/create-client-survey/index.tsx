import { CardWithText, Chat, CheckboxTable, Tabs } from 'components/custom';
import React, { useEffect, useState } from 'react';
import {
  InfluencerProfile,
  Question,
  QuestionsModal,
} from 'features/create-client-survey/elements';
import {
  CreateSurveyPageMain,
  AddQuestion,
  QuestionContainer,
  CreateSurveyActions,
  CreditContainer,
} from 'features/create-survey/styles';
import { Button, Card, Input, InputGroup, Label } from 'components/ui';
import { AddIcon, SlidersHorizontalIcon } from 'components/svg';
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
import { Collapse, Grid, GridCell, Stack } from 'components/system';
import { Response } from 'features/create-survey/elements';
import { useModal } from 'hooks';
import { DGenerateManageSMLFilter } from 'features/manage-sml/data';
import { InputLabel } from 'components/ui/input/styles';
import { BarChart, PieChart } from 'components/csr';
import Theme from 'theme';
import {
  ManageSMLFilterActions,
  ManageSMLPageFilter,
} from 'features/manage-sml/styles';

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
    updateCredit();
  }, [questions]);

  const changeType = (id: string) => (income: any) => {
    const questionTypes = {
      short: DQuestionShortConstructor,
      paragraph: DQuestionParagraphConstructor,
      multichoice: DQuestionMultichoiceConstructor,
      multiselect: DQuestionMultiselectConstructor,
    };

    const smh: TSurveyQuestionType = income.value;

    const newQuestion = questionTypes[smh]();
    setQuestions((prev) => prev.map((el) => (el.id === id ? newQuestion : el)));
  };

  const submitSurvey = () => {};

  const [ifModal, openIfModal, closeIfModal] = useModal(false);
  const [qmModal, openQmModal, closeQmModal] = useModal(false);

  const [filterTabs, setFilterTabs] = useState(0);

  const [filter, setFilter] = useState<any>(DGenerateManageSMLFilter());
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateManageSMLFilter());
  };

  return (
    <CreateSurveyPageMain>
      <Tabs
        value={tab}
        onValue={setTab}
        tabs={[
          'Questions',
          'Responses',
          'Participants',
          'Demographics',
          'AI Consultant',
        ]}
      />

      {tab === 0 && (
        <CardWithText title="Survey Name">
          <Stack>
            <Label>
              Question credits <CreditContainer>{credit}</CreditContainer>
            </Label>
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
          </Stack>
        </CardWithText>
      )}
      {tab === 1 && (
        <CardWithText
          title="Survey Name"
          description={
            <Label>
              Question credits <CreditContainer>{credit}</CreditContainer>
            </Label>
          }
        >
          <Stack>
            <Input
              type="select"
              label="Question"
              placeholder="Please Select"
              value={0}
              onValue={() => {}}
            />
            <Stack>
              {questions.map((el, index) => (
                <Response data={el} />
              ))}
            </Stack>
          </Stack>
        </CardWithText>
      )}

      {tab === 2 && (
        <CardWithText title="Survey" description="Influencers">
          <Stack>
            <CheckboxTable
              head={[
                {
                  reference: 'userID',
                  label: 'User ID',
                  visible: true,
                },
                {
                  reference: 'experienceAs',
                  label: 'Experience As',
                  visible: false,
                },
                {
                  reference: 'diseaseArea',
                  label: 'Disease Area',
                  visible: false,
                },
                {
                  reference: 'location',
                  label: 'Location',
                  visible: false,
                },
                {
                  reference: 'age',
                  label: 'Age',
                  visible: true,
                },
                {
                  reference: 'gender',
                  label: 'Gender',
                  visible: true,
                },
                {
                  reference: 'ethnicity',
                  label: 'Ethnicity',
                  visible: false,
                },
                {
                  reference: 'brands',
                  label: 'Brands',
                  visible: false,
                },
                {
                  reference: 'products',
                  label: 'Products',
                  visible: false,
                },
                {
                  reference: 'interests',
                  label: 'Interests',
                  visible: false,
                },
                {
                  reference: 'struggles',
                  label: 'Struggles',
                  visible: false,
                },
                {
                  reference: 'language',
                  label: 'Language',
                  visible: false,
                },
                {
                  reference: 'questionCreditAmount',
                  label: 'Question Credit Amount',
                  visible: false,
                },
                {
                  reference: 'surveyStatus',
                  label: 'Survey - Status',
                  visible: true,
                },
                {
                  reference: 'statusChanged',
                  label: 'Status Changed',
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
            <Stack direction="horizontal">
              <Button color="primary" variant="contained" onClick={openIfModal}>
                Influencer Profile
              </Button>
              <Button color="primary" variant="contained" onClick={openQmModal}>
                Questions Modal
              </Button>
            </Stack>
          </Stack>
        </CardWithText>
      )}
      {tab === 3 && (
        <Card>
          <Grid columns={2}>
            <GridCell columnSpan={2}>
              <Stack>
                <InputLabel>Total Mentions - Brand</InputLabel>
                <div style={{ width: '100%', height: 300, margin: '50px 0px' }}>
                  <BarChart
                    labels={[
                      '#multiple',
                      '#ms',
                      '#pain',
                      '#awareness',
                      '#hashtag',
                      '#hashtag',
                      '#hashtag',
                      '#hashtag',
                      '#hashtag',
                      '#hashtag',
                    ]}
                    data={[
                      {
                        color: `${Theme.palette.primary.main}`,
                        values: [
                          1000, 760, 660, 620, 504, 500, 300, 200, 100, 50,
                        ],
                      },
                    ]}
                    verticalLabel="Number of mentions"
                  />
                </div>
              </Stack>
            </GridCell>
            <Stack>
              <InputLabel>Sentiment Analysis - Brand</InputLabel>
              <PieChart
                labels={['Positive', 'Negative', 'Neutral']}
                data={[52, 23, 14]}
              />
            </Stack>
            <Stack>
              <InputLabel>Sentiment Analysis - Product</InputLabel>
              <PieChart
                labels={['Positive', 'Negative', 'Neutral']}
                data={[52, 23, 14]}
              />
            </Stack>
            <Stack>
              <InputLabel>Total Mentions - Brand</InputLabel>
              <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                <BarChart
                  labels={[
                    '#multiple',
                    '#ms',
                    '#pain',
                    '#awareness',
                    '#hashtag',
                  ]}
                  data={[
                    {
                      color: `${Theme.palette.primary.main}`,
                      values: [50, 30, 20, 10, 5],
                    },
                  ]}
                  verticalLabel="Number of mentions"
                />
              </div>
            </Stack>
            <Stack>
              <InputLabel>Total Mentions - Brand</InputLabel>
              <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                <BarChart
                  labels={[
                    '#multiple',
                    '#ms',
                    '#pain',
                    '#awareness',
                    '#hashtag',
                  ]}
                  data={[
                    {
                      color: `${Theme.palette.primary.main}`,
                      values: [50, 30, 20, 10, 5],
                    },
                  ]}
                  verticalLabel="Number of mentions"
                />
              </div>
            </Stack>
            <Stack>
              <InputLabel>Total Mentions - Brand</InputLabel>
              <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                <BarChart
                  labels={[
                    '#multiple',
                    '#ms',
                    '#pain',
                    '#awareness',
                    '#hashtag',
                  ]}
                  data={[
                    {
                      color: `${Theme.palette.primary.main}`,
                      values: [50, 30, 20, 10, 5],
                    },
                  ]}
                  verticalLabel="Number of mentions"
                />
              </div>
            </Stack>
            <Stack>
              <InputLabel>Total Mentions - Brand</InputLabel>
              <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                <BarChart
                  labels={[
                    '#multiple',
                    '#ms',
                    '#pain',
                    '#awareness',
                    '#hashtag',
                  ]}
                  data={[
                    {
                      color: `${Theme.palette.primary.main}`,
                      values: [50, 30, 20, 10, 5],
                    },
                  ]}
                  verticalLabel="Number of mentions"
                />
              </div>
            </Stack>
            <Stack>
              <InputLabel>Total Mentions - Brand</InputLabel>
              <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                <BarChart
                  labels={[
                    '#multiple',
                    '#ms',
                    '#pain',
                    '#awareness',
                    '#hashtag',
                  ]}
                  data={[
                    {
                      color: `${Theme.palette.primary.main}`,
                      values: [50, 30, 20, 10, 5],
                    },
                  ]}
                  verticalLabel="Number of mentions"
                />
              </div>
            </Stack>
          </Grid>
        </Card>
      )}
      {tab === 4 && (
        <>
          <CardWithText
            title="AI Consultant"
            description="More than 30.7k posts"
            actions={[
              <Button
                color={filterOpen ? 'secondary' : 'default'}
                variant="contained"
                onClick={toggleFilter}
                startIcon={<SlidersHorizontalIcon width="18" height="18" />}
              >
                Filters
              </Button>,
            ]}
          >
            <Collapse in={filterOpen}>
              <ManageSMLPageFilter>
                <Tabs
                  tabs={['Author', 'Post']}
                  value={filterTabs}
                  onValue={setFilterTabs}
                />
                {filterTabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Stakeholder"
                      placeholder="Please Select"
                      value={filter.stakeholder}
                      onValue={(stakeholder) =>
                        setFilter({ ...filter, stakeholder })
                      }
                    />
                    <Input
                      type="select"
                      label="Gender"
                      placeholder="Please Select"
                      value={filter.gender}
                      onValue={(gender) => setFilter({ ...filter, gender })}
                      options={[
                        { value: 0, label: 'Male' },
                        { value: 1, label: 'Female' },
                        { value: 2, label: 'Other' },
                      ]}
                    />
                    <Input
                      type="select"
                      label="Disease Area"
                      placeholder="Please Select"
                      value={filter.diseaseArea}
                      onValue={(diseaseArea) =>
                        setFilter({ ...filter, diseaseArea })
                      }
                    />
                    <Input
                      type="select"
                      label="Location"
                      placeholder="Please Select"
                      value={filter.location}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="select"
                      label="Ethnicity"
                      placeholder="Please Select"
                      value={filter.ethnicity}
                      onValue={(ethnicity) =>
                        setFilter({ ...filter, ethnicity })
                      }
                      options={[
                        { value: 0, label: 'Male' },
                        { value: 1, label: 'Female' },
                        { value: 2, label: 'Other' },
                      ]}
                    />
                    <Input
                      type="min-max"
                      label="Age"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="select"
                      label="Struggles"
                      placeholder="Please Select"
                      value={filter.struggles}
                      onValue={(struggles) =>
                        setFilter({ ...filter, struggles })
                      }
                    />
                    <Input
                      type="select"
                      label="Symptoms"
                      placeholder="Please Select"
                      value={filter.symptoms}
                      onValue={(symptoms) => setFilter({ ...filter, symptoms })}
                    />
                    <Input
                      type="select"
                      label="Interests"
                      placeholder="Please Select"
                      value={filter.interests}
                      onValue={(interests) =>
                        setFilter({ ...filter, interests })
                      }
                    />
                    <Input
                      type="text"
                      label="Bio"
                      placeholder="Please Enter"
                      value={filter.bio}
                      onValue={(bio) => setFilter({ ...filter, bio })}
                    />
                  </Grid>
                )}
                {filterTabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Social Media"
                      placeholder="Select Select"
                      value={filter.socialMedia}
                      onValue={(socialMedia) =>
                        setFilter({ ...filter, socialMedia })
                      }
                    />
                    <Input
                      type="select"
                      label="Theme"
                      placeholder="Select Select"
                      value={filter.theme}
                      onValue={(theme) => setFilter({ ...filter, theme })}
                    />
                    <Input
                      type="select"
                      label="Disease Area (HCP)"
                      placeholder="Select Select"
                      value={filter.diseaseAreaBA}
                      onValue={(diseaseAreaBA) =>
                        setFilter({ ...filter, diseaseAreaBA })
                      }
                    />
                    <Input
                      type="select"
                      label="Struggle"
                      placeholder="Select Select"
                      value={filter.struggle}
                      onValue={(struggle) => setFilter({ ...filter, struggle })}
                    />
                    <Input
                      type="select"
                      label="Symptom"
                      placeholder="Select Select"
                      value={filter.symptom}
                      onValue={(symptom) => setFilter({ ...filter, symptom })}
                    />
                    <Input
                      type="select"
                      label="Interests"
                      placeholder="Select Select"
                      value={filter.interestBA}
                      onValue={(interestBA) =>
                        setFilter({ ...filter, interestBA })
                      }
                    />
                    <Input
                      type="select"
                      label="Sentiment"
                      placeholder="Select Select"
                      value={filter.sentiment}
                      onValue={(sentiment) =>
                        setFilter({ ...filter, sentiment })
                      }
                    />
                    <Input
                      type="select"
                      label="Language"
                      placeholder="Select Select"
                      value={filter.language}
                      onValue={(language) => setFilter({ ...filter, language })}
                    />
                    <Input
                      type="select"
                      label="Brand"
                      placeholder="Select Select"
                      value={filter.brand}
                      onValue={(brand) => setFilter({ ...filter, brand })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Select Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                    <Input
                      type="min-max"
                      label="Likes"
                      value={filter.likes}
                      onValue={(likes) => setFilter({ ...filter, likes })}
                    />
                    <Input
                      type="min-max"
                      label="Comments"
                      value={filter.comments}
                      onValue={(comments) => setFilter({ ...filter, comments })}
                    />
                    <InputGroup
                      label="Date"
                      inputRatio="1fr 1fr"
                      elements={[
                        {
                          value: filter.startDate,
                          onValue: (startDate) =>
                            setFilter({ ...filter, startDate }),
                          type: 'date',
                          placeholder: 'From',
                        },
                        {
                          value: filter.endDate,
                          onValue: (endDate) =>
                            setFilter({ ...filter, endDate }),
                          type: 'date',
                          placeholder: 'To',
                        },
                      ]}
                    />
                    <Input
                      type="text"
                      label="Keyword"
                      placeholder="Select Enter"
                      value={filter.keyword}
                      onValue={(keyword) => setFilter({ ...filter, keyword })}
                    />
                  </Grid>
                )}
                <ManageSMLFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </ManageSMLFilterActions>
              </ManageSMLPageFilter>
            </Collapse>
          </CardWithText>
          <CardWithText title="Remaining Tokens">
            <Chat />
          </CardWithText>
        </>
      )}

      {ifModal && <InfluencerProfile onClose={closeIfModal} />}
      {qmModal && (
        <QuestionsModal
          firstName="John"
          lastName="Doe"
          questions={questions}
          onClose={closeQmModal}
        />
      )}
    </CreateSurveyPageMain>
  );
};

export default CreateSurveyPage;
