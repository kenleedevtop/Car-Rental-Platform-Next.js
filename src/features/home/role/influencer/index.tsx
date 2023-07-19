import { Tooltip } from '@mui/material';
import { BarChart, ExtendedLineChart, MatrixChart } from 'components/csr';
import {
  CardWithText,
  Note,
  ProgressDisplay,
  Status,
  CheckboxTable,
  Tabs,
  CampaignsCard,
  Title,
  Table,
  CardWithTextNew,
} from 'components/custom';
import { HomeInfluencerPageGrid } from 'features/home/styles';
import { TColor } from 'components/custom/status/types';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { DotsIcon, InfoIcon } from 'components/svg';
import { Grid, GridCell, Stack } from 'components/system';
import { Button, InputGroup, Pagination } from 'components/ui';
import React, { useEffect, useState } from 'react';
import { DCampaignItems } from 'features/home/role/influencer/data';
import Theme from 'theme';
import { useAppContext } from 'context';
import { IInfluencer } from 'api/influencer/types';
import { IUser } from 'api/users/types';
import { useSnackbar } from 'hooks';
import {
  TPostTypeResult,
  TSelectFieldType,
} from 'features/discover-influencers/role/admin/elements/influencer-profile/types';
import { ISelectFieldType } from 'features/account/role/ambasador/types';
import { EnumsApi } from 'api';
import { ChartWrapper, CustomStack, GridCellCustom } from './styles';
import InfluencerHomeActions from './elements/actions';
import InfluencerAPI from '../../../../api/influencer';

type TPostAmount = {
  id: number;
  desiredAmount: number;
  postType: number;
};

type TSurveyAmount = {
  id: number;
  desiredAmount: number;
  surveyType: number;
};

const HomePage = () => {
  const initialSelectedPostOption = {
    value: 0,
    label: 'Post',
  };

  const initialSelectedQuestionnaireOption = {
    value: 0,
    label: 'Questionnaire',
  };

  const initialSelectedInterviewOption = {
    value: 1,
    label: '30 min Interview',
  };

  const [selectedPostOption, setSelectedPostOption] = useState(
    initialSelectedPostOption
  );

  const [selectedQuestionnaireOption, setSelectedQuestionnaireOption] =
    useState(initialSelectedQuestionnaireOption);

  const [selectedInterviewOption, setSelectedInterviewOption] = useState(
    initialSelectedInterviewOption
  );
  const [post, setPost] = useState<ISelectFieldType>();
  const [interview, setInterview] = useState<ISelectFieldType>();
  const [questionnaire, setQuestionnaire] = useState<ISelectFieldType>();

  const [postAmountToSend, setPostAmountToSend] = useState(0);
  const [interviewAmountToSend, setInterviewAmountToSend] = useState(0);
  const [questionnaireAmountToSend, setQuestionnaireAmountToSend] = useState(0);

  const handleCurrencyCalculation = (
    amount: number,
    currency: 'EUR' | 'USD' | 'CHF' = 'CHF'
  ): number => {
    let formattedAmount = 0;

    if (currency === 'EUR') {
      formattedAmount = amount * 1.03;
    }
    if (currency === 'USD') {
      formattedAmount = amount * 1.11;
    }

    if (currency === 'CHF') {
      formattedAmount = amount; // Assumes the amount is already in euros for other currencies
    }

    return +formattedAmount.toFixed(0);
  };

  const [tabsC, setTabsC] = useState(0);
  const [tabsSM, setTabsSM] = useState(0);
  const [tabsS, setTabsS] = useState(0);
  const [tabsCA, setTabsCA] = useState(0);
  const [tabsI, setTabIS] = useState(0);
  const [tabsIA, setTabsIA] = useState(0);

  const { push } = useSnackbar();

  const { currency, user } = useAppContext();

  const [postAmounts, setPostAmounts] = useState<TSelectFieldType[]>();
  const [questionaireAmounts, setQuestionaireAmounts] =
    useState<TSelectFieldType[]>();
  const [interviewAmounts, setInterviewAmounts] =
    useState<TSelectFieldType[]>();

  const [influencer, setInfluencer] = useState<IUser>();

  const formatPostAmounts = (
    influencerData: IInfluencer,
    postTypes: TPostTypeResult[],
    surveyTypes: TPostTypeResult[]
  ) => {
    const { influencerCampaignAmounts, influencerSurveyAmounts } =
      influencerData;

    const postAmountsResults: TSelectFieldType[] = [];
    const questionnaireAmountResult: ISelectFieldType[] = [];
    const interviewAmountResult: ISelectFieldType[] = [];

    influencerCampaignAmounts.map((campaign) =>
      postAmountsResults.push({
        label: `${campaign.desiredAmount}`,
        value: campaign.postType,
      })
    );

    influencerSurveyAmounts.map((survey) => {
      if (surveyTypes[survey.surveyType].name === 'Questionnaire') {
        return questionnaireAmountResult.push({
          label: `${survey.desiredAmount}`,
          value: survey.surveyType,
        });
      }
      return interviewAmountResult.push({
        label: `${survey.desiredAmount}`,
        value: survey.surveyType,
      });
    });

    setPostAmounts(postAmountsResults);
    setQuestionaireAmounts(questionnaireAmountResult);
    setInterviewAmounts(interviewAmountResult);
  };

  const getInfluencerData = async () => {
    try {
      const { id } = user;
      const influencerResponse = await InfluencerAPI.getSingleInfluencer(id);
      setInfluencer(influencerResponse);
    } catch (error) {
      push('Something went wrong.', { variant: 'error' });
    }
  };

  const getPostTypes = async (userId: number) => {
    const postResults = await EnumsApi.getPostTypes(userId);

    return postResults;
  };

  const getSurveyTypes = async () => {
    const surveyResults = await EnumsApi.getSurveyTypes();

    return surveyResults;
  };

  const updatePostAmount = async () => {
    const postAmountObj =
      influencer?.influencer.influencerCampaignAmounts?.find(
        (campaignEl) => campaignEl.postType === selectedPostOption.value
      );
    if (postAmountObj && influencer) {
      const postAmountQuery: TPostAmount = {
        desiredAmount: +postAmountToSend,
        id: postAmountObj.id,
        postType: selectedPostOption.value,
      };

      try {
        await InfluencerAPI.addCampaignDesiredIncome(influencer.id, [
          postAmountQuery,
        ]);
        push(`Sucessfully Updated ${selectedPostOption.label}.`, {
          variant: 'success',
        });
        getInfluencerData();
      } catch {
        push('Something went wrong!', { variant: 'error' });
      }
    }
  };

  const updateInterviewAmount = async () => {
    const interviewAmountObj =
      influencer?.influencer.influencerSurveyAmounts?.find(
        (surveyEl) => surveyEl.surveyType === selectedInterviewOption.value
      );
    if (interviewAmountObj && influencer) {
      const interviewAmountQuery: TSurveyAmount = {
        desiredAmount: +interviewAmountToSend,
        id: interviewAmountObj.id,
        surveyType: selectedInterviewOption.value,
      };

      try {
        await InfluencerAPI.addSurveyDesiredIncome(influencer.id, [
          interviewAmountQuery,
        ]);
        push(`Sucessfully Updated ${selectedInterviewOption.label}.`, {
          variant: 'success',
        });
        getInfluencerData();
      } catch {
        push('Something went wrong!', { variant: 'error' });
      }
    }
  };

  const updateQuestionnaireAmount = async () => {
    const questionnaireAmountObj =
      influencer?.influencer.influencerSurveyAmounts?.find(
        (surveyEl) => surveyEl.surveyType === selectedQuestionnaireOption.value
      );
    if (questionnaireAmountObj && influencer) {
      const questionnaireAmountQuery: TSurveyAmount = {
        desiredAmount: +questionnaireAmountToSend,
        id: questionnaireAmountObj.id,
        surveyType: selectedQuestionnaireOption.value,
      };

      try {
        await InfluencerAPI.addSurveyDesiredIncome(influencer.id, [
          questionnaireAmountQuery,
        ]);
        push(`Sucessfully Updated ${selectedQuestionnaireOption.label}.`, {
          variant: 'success',
        });
        getInfluencerData();
      } catch {
        push('Something went wrong!', { variant: 'error' });
      }
    }
  };

  useEffect(() => {
    getInfluencerData();
  }, []);

  useEffect(() => {
    if (selectedPostOption) {
      if (postAmounts && postAmounts.length) {
        const selectPost = postAmounts.find(
          (posts) => +selectedPostOption.value === posts.value
        );
        setPost(selectPost);
      }

      if (questionaireAmounts && questionaireAmounts.length) {
        const selectQuestionaire = questionaireAmounts.find(
          (questionnaires) =>
            +selectedQuestionnaireOption.value === questionnaires.value
        );
        setQuestionnaire(selectQuestionaire);
      }

      if (interviewAmounts && interviewAmounts.length) {
        const selectedInterview = interviewAmounts.find(
          (interviews) => +selectedInterviewOption.value === interviews.value
        );
        setInterview(selectedInterview);
      }
    }
  }, [selectedPostOption, postAmounts, questionaireAmounts, interviewAmounts]);

  useEffect(() => {
    if (selectedQuestionnaireOption) {
      if (questionaireAmounts && questionaireAmounts.length) {
        const selectQuestionaire = questionaireAmounts.find(
          (questionnaires) =>
            +selectedQuestionnaireOption.value === questionnaires.value
        );
        setQuestionnaire(selectQuestionaire);
      }
    }
  }, [selectedQuestionnaireOption, questionaireAmounts]);

  useEffect(() => {
    if (selectedInterviewOption) {
      if (interviewAmounts && interviewAmounts.length) {
        const selectedInterview = interviewAmounts.find(
          (interviews) => +selectedInterviewOption.value === interviews.value
        );
        setInterview(selectedInterview);
      }
    }
  }, [selectedInterviewOption, interviewAmounts]);

  useEffect(() => {
    if (post) {
      setPostAmountToSend(+post.label);
    }

    if (interview) {
      setInterviewAmountToSend(+interview.label);
    }

    if (questionnaire) {
      setQuestionnaireAmountToSend(+questionnaire.label);
    }
  }, [post, interview, questionnaire]);

  useEffect(() => {
    if (influencer) {
      const postTypes = getPostTypes(influencer.id);
      const surveyTypes = getSurveyTypes();

      Promise.allSettled([postTypes, surveyTypes]).then((typesResults) => {
        const postTypesResult = typesResults[0] as PromiseSettledResult<
          TPostTypeResult[]
        >;
        const surveyTypesResult = typesResults[1] as PromiseSettledResult<
          TPostTypeResult[]
        >;

        if (
          postTypesResult.status === 'fulfilled' &&
          surveyTypesResult.status === 'fulfilled'
        ) {
          formatPostAmounts(
            influencer.influencer,
            postTypesResult.value,
            surveyTypesResult.value
          );
        }
      });
    }
  }, [influencer]);

  const renderItem = ({ headItem, cell }: TTableRenderItemObject) => {
    if (headItem.reference === 'campaign') {
      return (
        <CampaignsCard
          image={cell.data.image}
          company={cell.data.company}
          app={cell.data.app}
        />
      );
    }
    if (headItem.reference === 'status') {
      const statuses = [
        {
          id: 0,
          text: 'Posted',
          color: 'success',
        },
        {
          id: 1,
          text: 'To be Posted',
          color: 'warning',
        },
        {
          id: 2,
          text: 'Reel',
          color: 'primary',
        },
        {
          id: 3,
          text: 'Post',
          color: 'primary',
        },
      ];
      const statusData = statuses[cell.data as number];

      return (
        <Status color={statusData.color as TColor} text={statusData.text} />
      );
    }

    if (headItem.reference === 'actions') {
      return <InfluencerHomeActions data={cell.data.user.id} />;
    }

    return '';
  };

  useEffect(() => {
    console.log(currency !== 'CHF', postAmountToSend, postAmountToSend !== 0);
  }, [currency, postAmountToSend]);

  return (
    <Stack>
      <HomeInfluencerPageGrid>
        <GridCell columnSpan={2} style={{ gap: '20px' }}>
          <CardWithTextNew
            title="Campaigns"
            headerColumnTable={
              <CustomStack>
                <Tabs
                  tabs={['Available', 'In Progress']}
                  value={tabsC}
                  onValue={setTabsC}
                />
                {tabsC === 0 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={0} />
                  </>
                )}
                {tabsC === 1 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                        {
                          reference: 'status',
                          label: 'Status',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={0} />
                  </>
                )}
              </CustomStack>
            }
          >
            <CustomStack>
              <>
                <Title
                  title="Competitive Analysis"
                  style={{
                    fontSize: '20px',
                    color: '#37428A',
                    fontWeight: '500',
                  }}
                />
                <Tabs
                  style={{ minHeight: 'unset' }}
                  tabs={['Instagram']}
                  value={tabsSM}
                  onValue={setTabsSM}
                />
                <Note showIcon={false} style={{ minHeight: '48px' }}>
                  <InfoIcon
                    style={{
                      marginRight: '5px',
                      width: '17px',
                      height: '17px',
                      alignContent: 'center',
                      display: 'inline-flex',
                      position: 'absolute',
                      top: '2px',
                    }}
                  />
                  <span style={{ marginLeft: '25px' }}>
                    Influencers with an audience your size, asks for for
                    <span style={{ color: '#448DC9' }}>21-25 {currency}</span>
                    per
                    <span style={{ color: '#448DC9' }}>
                      {selectedPostOption.label}
                    </span>
                    on average.
                  </span>
                </Note>
                <ChartWrapper>
                  <BarChart
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
                        color: `${Theme.palette.secondary.main}40`,
                        values: [5, 10, 15, 20, 25, 18, 13, 8, 3, 1],
                      },
                    ]}
                    verticalLabel="Number of Influencers"
                    horizontalLabel="Amount Per Post"
                  />
                </ChartWrapper>
                <GridCellCustom columnSpan={4}>
                  <InputGroup
                    label={`Desired amount per ${selectedPostOption.label}`}
                    inputRatio="150px 100px"
                    inputGroupElementStyle={{ gap: '5px' }}
                    elements={[
                      {
                        value: selectedPostOption,
                        onValue: (postOption) => {
                          if (postOption) {
                            setSelectedPostOption(postOption);
                          } else {
                            setSelectedPostOption(initialSelectedPostOption);
                          }
                        },

                        type: 'select',
                        placeholder: 'Post',
                        options: [
                          {
                            value: 0,
                            label: 'Post',
                          },
                          {
                            value: 1,
                            label: 'Reel',
                          },
                          {
                            value: 2,
                            label: 'Story',
                          },
                        ],
                      },
                      {
                        value: postAmountToSend,
                        onValue: (currencyVal) => {
                          setPostAmountToSend(currencyVal);
                        },

                        type: 'number',
                        placeholder: 'CHF',
                        endAdornment: '₣',
                      },
                    ]}
                  />
                  <Button
                    style={{
                      width: '150px',
                      height: '39px',
                      marginLeft: '10px',
                    }}
                    variant="contained"
                    color="primary"
                    onClick={updatePostAmount}
                  >
                    Save
                  </Button>
                </GridCellCustom>
                {currency !== 'CHF' && +postAmountToSend !== 0 ? (
                  <div
                    style={{
                      display: 'flex',
                      font: 'IBM Plex Sans',
                      color: '#7E839F',
                      fontSize: '11px',
                      marginBottom: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '13px',
                        height: '13px',
                        alignContent: 'center',
                        justifyContent: 'center',
                        paddingTop: '2px',
                      }}
                    >
                      <InfoIcon />
                    </div>
                    <p style={{ paddingLeft: '3px' }}>
                      {postAmountToSend} CHF is approximately
                    </p>
                    <p
                      style={{
                        paddingLeft: '3px',
                        color: '#448DC9',
                        fontWeight: '600',
                      }}
                    >
                      {handleCurrencyCalculation(
                        postAmountToSend,
                        currency as 'CHF' | 'EUR' | 'USD'
                      )}{' '}
                      {currency}.
                    </p>
                  </div>
                ) : undefined}
              </>
            </CustomStack>
          </CardWithTextNew>
        </GridCell>
        <GridCell columnSpan={2} style={{ gap: '20px' }}>
          <CardWithTextNew
            title="Surveys"
            headerColumnTable={
              <CustomStack>
                <Tabs
                  tabs={['Available', 'In Progress']}
                  value={tabsS}
                  onValue={setTabsS}
                />
                {tabsS === 0 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={0} />
                  </>
                )}
                {tabsS === 1 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                        {
                          reference: 'status',
                          label: 'Status',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={32} />
                  </>
                )}
              </CustomStack>
            }
          >
            <CustomStack>
              <Title
                title="Competitive Analysis"
                style={{
                  fontSize: ' 20px',
                  color: '#37428A',
                  fontWeight: '500',
                }}
              />
              <Tabs
                style={{ minHeight: 'unset' }}
                tabs={['Questionnaire', 'Interview']}
                value={tabsIA}
                onValue={setTabsIA}
              />
              {tabsIA === 0 && (
                <>
                  <Note showIcon={false} style={{ minHeight: '48px' }}>
                    <InfoIcon
                      style={{
                        marginRight: '5px',
                        width: '17px',
                        height: '17px',
                        alignContent: 'center',
                        display: 'inline-flex',
                        position: 'absolute',
                        top: '2px',
                      }}
                    />
                    <span style={{ marginLeft: '25px' }}>
                      Patients asks for{' '}
                      <span style={{ color: '#448DC9' }}>1-2.5 {currency}</span>{' '}
                      per{' '}
                      <span style={{ color: '#448DC9' }}>Question Credit</span>{' '}
                      on average.
                    </span>
                  </Note>
                  <ChartWrapper>
                    <BarChart
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
                          color: `${Theme.palette.secondary.main}40`,
                          values: [5, 10, 15, 20, 25, 18, 13, 8, 3, 1],
                        },
                      ]}
                      verticalLabel="Number of Influencers"
                      horizontalLabel="Amount Per Post"
                    />
                  </ChartWrapper>
                  <GridCellCustom columnSpan={4}>
                    <InputGroup
                      label="Desired amount per Question credit"
                      inputRatio="150px 100px"
                      inputGroupElementStyle={{ gap: '5px' }}
                      elements={[
                        {
                          value: selectedQuestionnaireOption,
                          onValue: (questionnaireOption) => {
                            if (questionnaireOption) {
                              setSelectedQuestionnaireOption(
                                questionnaireOption
                              );
                            } else {
                              setSelectedQuestionnaireOption(
                                initialSelectedQuestionnaireOption
                              );
                            }
                          },
                          type: 'select',
                          placeholder: 'Question Credit',
                        },
                        {
                          value: questionnaireAmountToSend,
                          onValue: (currencyVal) =>
                            setQuestionnaireAmountToSend(currencyVal),
                          type: 'number',
                          placeholder: 'CHF',
                          endAdornment: '₣',
                        },
                      ]}
                    />
                    <Button
                      style={{
                        width: '150px',
                        height: '39px',
                        marginLeft: '10px',
                      }}
                      variant="contained"
                      color="primary"
                      onClick={updateQuestionnaireAmount}
                    >
                      Save
                    </Button>
                  </GridCellCustom>
                  {currency !== 'CHF' && +questionnaireAmountToSend ? (
                    <div
                      style={{
                        display: 'flex',
                        font: 'IBM Plex Sans',
                        color: '#7E839F',
                        fontSize: '11px',
                        marginBottom: '12px',
                      }}
                    >
                      <div
                        style={{
                          width: '13px',
                          height: '13px',
                          alignContent: 'center',
                          justifyContent: 'center',
                          paddingTop: '2px',
                        }}
                      >
                        <InfoIcon />
                      </div>
                      <p style={{ paddingLeft: '3px' }}>
                        {questionnaireAmountToSend} CHF is approximately
                      </p>
                      <p
                        style={{
                          paddingLeft: '3px',
                          color: '#448DC9',
                          fontWeight: '600',
                        }}
                      >
                        {handleCurrencyCalculation(
                          questionnaireAmountToSend,
                          currency as 'CHF' | 'EUR' | 'USD'
                        )}{' '}
                        {currency}.
                      </p>
                    </div>
                  ) : undefined}
                </>
              )}

              {tabsIA === 1 && (
                <>
                  <Note showIcon={false} style={{ minHeight: '48px' }}>
                    <InfoIcon
                      style={{
                        marginRight: '5px',
                        width: '17px',
                        height: '17px',
                        alignContent: 'center',
                        display: 'inline-flex',
                        position: 'absolute',
                        top: '2px',
                      }}
                    />
                    <span style={{ marginLeft: '25px' }}>
                      Participants asks
                      <span style={{ color: '#448DC9' }}>23-25 USD</span>
                      per
                      <span style={{ color: '#448DC9' }}>
                        {selectedInterviewOption.label === '30 min Interview'
                          ? '30 min Interview'
                          : '60 min interview'}
                      </span>
                      on average.
                    </span>
                  </Note>
                  <ChartWrapper>
                    <BarChart
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
                          color: `${Theme.palette.secondary.main}40`,
                          values: [5, 10, 15, 20, 25, 18, 13, 8, 3, 1],
                        },
                      ]}
                      verticalLabel="Number of Influencers"
                      horizontalLabel="Amount Per Post"
                    />
                  </ChartWrapper>
                  <GridCellCustom columnSpan={4}>
                    <InputGroup
                      label={`Desired amount per ${
                        selectedInterviewOption.label === '30 min Interview'
                          ? '30 min Interview'
                          : '60 min interview'
                      }`}
                      inputRatio="185px 100px"
                      elements={[
                        {
                          value: selectedInterviewOption,
                          onValue: (interviewOption) => {
                            if (interviewOption) {
                              setSelectedInterviewOption(interviewOption);
                            } else {
                              setSelectedInterviewOption(
                                initialSelectedInterviewOption
                              );
                            }
                          },
                          type: 'select',
                          placeholder: '30 min Interviews',
                          options: [
                            {
                              value: 1,
                              label: '30 min Interview',
                            },
                            {
                              value: 2,
                              label: '60 min interview',
                            },
                          ],
                        },
                        {
                          value: interviewAmountToSend,
                          onValue: (currencyVal) =>
                            setInterviewAmountToSend(currencyVal),
                          type: 'number',
                          placeholder: 'CHF',
                          endAdornment: '₣',
                        },
                      ]}
                    />
                    <Button
                      style={{
                        width: '150px',
                        height: '39px',
                        marginLeft: '10px',
                      }}
                      onClick={updateInterviewAmount}
                      variant="contained"
                      color="primary"
                    >
                      Save
                    </Button>
                  </GridCellCustom>
                  {currency !== 'CHF' && +interviewAmountToSend ? (
                    <div
                      style={{
                        display: 'flex',
                        font: 'IBM Plex Sans',
                        color: '#7E839F',
                        fontSize: '11px',
                      }}
                    >
                      <p style={{ paddingLeft: '3px' }}>
                        {interviewAmountToSend} CHF is approximately
                      </p>
                      <p
                        style={{
                          paddingLeft: '3px',
                          color: '#448DC9',
                          fontWeight: '600',
                        }}
                      >
                        {handleCurrencyCalculation(
                          interviewAmountToSend,
                          currency as 'CHF' | 'EUR' | 'USD'
                        )}{' '}
                        {currency}.
                      </p>
                    </div>
                  ) : undefined}
                </>
              )}
            </CustomStack>
          </CardWithTextNew>
        </GridCell>
      </HomeInfluencerPageGrid>
    </Stack>
  );
};

export default HomePage;
