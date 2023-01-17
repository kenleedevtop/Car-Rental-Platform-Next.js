export const DGenerateFinanceFilter = () => ({
  company: null,
  client: null,
  location: null,
  diseaseArea: null,
  industry: null,
  platform: null,
  promotionType: null,
  dataRange: null,
  influencerSize: '',
  influencers: {
    min: '',
    max: '',
  },
  budget: {
    min: '',
    max: '',
  },
  label: [],
});

export const DFinanceHead = [
  {
    reference: 'cost',
    label: 'Cost',
    visible: true,
  },
  {
    reference: 'subject',
    label: 'Subject',
    visible: true,
  },
  {
    reference: 'type',
    label: 'Type',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'link',
    label: 'Link',
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

export const DFinanceHead2 = [
  {
    reference: 'revenue',
    label: 'Revenue',
    visible: true,
  },
  {
    reference: 'subject',
    label: 'Subject',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'amount',
    label: 'Amount',
    visible: true,
  },
  {
    reference: 'currency',
    label: 'Currency',
    visible: true,
  },
  {
    reference: 'actions',
    label: 'Actions',
    visible: true,
  },
];
