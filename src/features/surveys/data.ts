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
    visible: true,
  },
  {
    reference: 'language',
    label: 'Language',
    visible: true,
  },
  {
    reference: 'type',
    label: 'Type',
    visible: true,
  },
  {
    reference: 'startAndFinish',
    label: 'Start & Finish',
    visible: true,
  },
  {
    reference: 'questions',
    label: 'Questions',
    visible: true,
  },
  {
    reference: 'amount',
    label: 'Amount',
    visible: true,
  },
  {
    reference: 'actions',
    label: 'Actions',
    visible: true,
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
