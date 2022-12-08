export const DGenerateSurveyFilter = () => ({
  company: null,
  client: null,
  location: null,
  diseaseArea: null,
  type: null,
  industry: '',
  language: '',
  dateRange: '',
  participants: {
    min: '',
    max: '',
  },
  questions: {
    min: '',
    max: '',
  },
  budget: {
    min: '',
    max: '',
  },
  amount: {
    min: '',
    max: '',
  },
  lable: [],
});

export const DSurveysHead = [
  {
    reference: 'survey',
    label: 'Survey',
  },
  {
    reference: 'language',
    label: 'Language',
  },
  {
    reference: 'type',
    label: 'Type',
  },
  {
    reference: 'startAndFinish',
    label: 'Start & Finish',
  },
  {
    reference: 'questions',
    label: 'Questions',
  },
  {
    reference: 'amount',
    label: 'Amount',
  },
  {
    reference: 'actions',
    label: 'Actions',
  },
];

export const DSurveysHead2 = [
  {
    reference: 'accepted',
    label: 'Accepted',
  },
  {
    reference: 'infoReceived',
    label: 'Info Received',
  },
  {
    reference: 'toBePosted',
    label: 'To Be Posted',
  },
  {
    reference: 'approved',
    label: 'Approved',
  },
];
