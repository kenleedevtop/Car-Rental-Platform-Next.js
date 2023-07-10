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
import React, { useState } from 'react';
import { DCampaignItems } from 'features/home/role/influencer/data';
import Theme from 'theme';
import { ChartWrapper, GridCellCustom } from './styles';
import InfluencerHomeActions from './elements/actions';
import { useAppContext } from 'context';

const HomePage = () => {

  const [state, setState] = useState({	
    currency: 'CHF',	
    amount: {value:'post', label:'Post'},		
    start: null,	
    end: null,	
    save: null,	
  });
		
  const [amountQuestion, setAmountQuestion] = useState({	
    currency: 'CHF',	
    amount: '',	
    start: null,	
    end: null,	
    save: null,	
  });	
  const [amountInterview, setAmountInterview] = useState({	
    currency: 'CHF',	
    amount: {value:'30min', label:'30 min interview'},	
    start: null,	
    end: null,	
    save: null,	
  });	
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
  let selectedOption = {value:'post', label: 'Post'}
  if(state.amount.value === '' || state.amount.value === null || state.amount.value === undefined)
  {
    selectedOption.label = 'Post'
  } else{
    selectedOption.label = state.amount.label
  }


  const label = `Desired amount per ${selectedOption.label}`;

  let cost = 55;

  const [tabsC, setTabsC] = useState(0);
  const [tabsSM, setTabsSM] = useState(0);
  const [tabsS, setTabsS] = useState(0);
  const [tabsCA, setTabsCA] = useState(0);
  const [tabsI, setTabIS] = useState(0);	
  const [tabsIA, setTabsIA] = useState(0);	
  const { currency } = useAppContext();

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
  };

  return (
    <Stack>
      <HomeInfluencerPageGrid>
        <GridCell columnSpan={2} style={{ gap: '20px' }}>
          <CardWithTextNew
            title="Campaigns"
            // actions={[<DotsIcon />]}
            headerColumnTable={
              <Stack>
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
                    <Pagination count={32}/>
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
                    <Pagination count={32} style={{paddingTop:'15%'}}/>
                  </>
                )}
              </Stack>
            }
          >
            <Stack style={{gap:'0'}}>
              <Title
                title="Competitive Analysis"
                style={{
                  fontSize: ' 20px',
                  color: '#37428A',
                  fontWeight: '500',
                }}
              />
              <Tabs tabs={['Instagram']} value={tabsSM} onValue={setTabsSM} />
              <Note showIcon={false}>
                <InfoIcon style={{paddingTop: '4px',width:'17px', height:'17px', alignContent: 'center', display: 'inline-flex'}}></InfoIcon>
                  {' '}Participants asks{' '}
                Influencers with an audience your size, asks for {' '}
                <b style={{color:'#448DC9', display:'inline-flex'}}>21-25 USD{' '}</b> per {' '}
                <b style={{color:'#448DC9', display:'inline-flex'}}>{selectedOption.label}</b>{' '}on average.
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
                  label={label}
                  inputRatio="150px 79px"
                  elements={[	
                    {	
                      value: state.amount,	
                      onValue: (amount) => setState({ ...state, amount }),	
                      type: 'select',	
                      placeholder: 'Post',	
                      options: [	
                        {	
                          value: 'post',	
                          label: 'Post',	
                        },	
                        {	
                          value: 'reel',	
                          label: 'Reel',	
                        },	
                        {	
                          value: 'story',	
                          label: 'Story',	
                        },	
                      ],	
                    },	
                    {	
                      value: cost + ' ' + state.currency,	
                      onValue: (currency) => setState({ ...state, currency }),	
                      type: 'text',	
                      placeholder: 'CHF',	
                      disabled: true,
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
                >
                  Save
                </Button>
              </GridCellCustom>
              <div style={{display:'flex',font:'IBM Plex Sans', color:'#7E839F', fontSize:'11px', marginBottom: '12px'}}>	
                <div style={{width:'13px', height:'13px',alignContent:'center', justifyContent:'center', paddingTop:'2px'}}>	
                  <InfoIcon />	
                </div>	
                <p style={{paddingLeft:'3px'}}>	
                  {cost}{' '}{state.currency} is approximately 	
                </p>	
                <p style={{paddingLeft:'3px',color:'#448DC9',fontWeight:'600'}}>{handleCurrencyCalculation(55,'USD')} USD.</p>	
              </div>
            </Stack>
          </CardWithTextNew>
        </GridCell>
        <GridCell columnSpan={2}>
          <CardWithTextNew
            title="Surveys"
            // actions={[<DotsIcon />]}
            headerColumnTable={
              <Stack style={{gap:'0'}}>
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
                    <Pagination count={32} style={{paddingTop:'20%'}}/>
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
                    <Pagination count={32} style={{paddingTop:'20%', width:'400px'}}/>
                  </>
                )}
              </Stack>
            }
          >
            <Stack direction="horizontal">
              <Stack style={{gap:'0'}}>
                <Title
                  title="Competitive Analysis"
                  style={{
                    fontSize: ' 20px',
                    color: '#37428A',
                    fontWeight: '500',
                  }}
                />
                <Tabs
                  tabs={['Questionnaire', 'Interview']}
                  value={tabsIA}
                  onValue={setTabsIA}
                />
                {tabsIA === 0 && (<>
                <Note showIcon={false}>
                <InfoIcon style={{paddingTop: '4px',width:'17px', height:'17px', alignContent: 'center', display: 'inline-flex'}}></InfoIcon>
                  Patients asks for{' '}
                  <b style={{color:'#448DC9', display:'inline-flex'}}>1-2.5 USD</b> per {' '}
                  <b style={{color:'#448DC9', display:'inline-flex'}}>Question Credit</b>{' '}on average.
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
                    inputRatio="150px 79px"
                    elements={[
                      {
                        value: amountQuestion.amount,
                        onValue: (amount) => setState({ ...state, amount }),
                        type: 'select',	
                        placeholder: 'Question Credit',
                        disabled:true,
                      },
                      {
                        value: cost + ' ' + state.currency,
                        onValue: (currency) => setState({ ...state, currency }),
                        type: 'text',
                        placeholder: 'CHF',
                        disabled: true,
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
                  >
                    Save
                  </Button>
                </GridCellCustom>
                <div style={{display:'flex',font:'IBM Plex Sans', color:'#7E839F', fontSize:'11px'}}>	
                  <div style={{width:'13px', height:'13px',alignContent:'center', justifyContent:'center', paddingTop:'2px'}}>	
                    <InfoIcon />	
                  </div>	
                  <p style={{paddingLeft:'3px'}}>	
                    {cost}{' '}{state.currency} is approximately 	
                  </p>	
                  <p style={{paddingLeft:'3px',color:'#448DC9',fontWeight:'600'}}>{handleCurrencyCalculation(55,'USD')} USD.</p>	
                </div>
                </>)}

                {tabsIA === 1 && (<>	
                  
                  <Note showIcon={false}>	
                  <InfoIcon style={{paddingTop: '4px',width:'17px', height:'17px', alignContent: 'center', display: 'inline-flex'}}></InfoIcon>
                  {' '}Participants asks{' '}
                    <b style={{color:'#448DC9', display:'inline-flex'}}>23-25 USD{' '}</b> per {' '}
                    <b style={{color:'#448DC9', display:'inline-flex'}}>{amountInterview.amount.value === '30min' ? '30 min Interview' : '60 min interview'}</b>{' '}on average.
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
                  <GridCellCustom	columnSpan={4}>	
                    <InputGroup	
                      label={`Desired amount per ${	
                        amountInterview.amount.value === '30min' ? '30 min Interview' : '60 min interview'	
                      }`}	
                      inputRatio="185px 79px"	
                      elements={[	
                        {	
                          value: amountInterview.amount,	
                          onValue: (amount) => setAmountInterview({...state, amount }),	
                          type: 'select',	
                          placeholder: '30 min Interviews',	
                          options: [	
                            {	
                              value: '30min',	
                              label: '30 min Interview',	
                            },	
                            {	
                              value: '60',	
                              label: '60 min interview',	
                            },	
                          ]	
                        },	
                        {	
                          value: cost + ' ' + state.currency,	
                          onValue: (currency)=> setState({ ...state, currency }),	
                          type: 'text',	
                          placeholder: 'CHF',	
                          disabled: true,
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
                    >	
                      Save	
                    </Button>	
                  </GridCellCustom>	
                  <div style={{display:'flex',font:'IBM Plex Sans', color:'#7E839F', fontSize:'11px'}}>	

                    <p style={{paddingLeft:'3px'}}>	
                      {cost} {' '}{state.currency} is approximately 	
                    </p>	
                    <p style={{paddingLeft:'3px',color:'#448DC9',fontWeight:'600'}}>{handleCurrencyCalculation(55,'USD')} USD.</p>	
                  </div>	
                </>)}
              </Stack>
            </Stack>
          </CardWithTextNew>
        </GridCell>
      </HomeInfluencerPageGrid>
    </Stack>
  );
};

export default HomePage;
