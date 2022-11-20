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
  },
  {
    reference: 'subject',
    label: 'Subject',
  },
  {
    reference: 'type',
    label: 'Type',
  },
  {
    reference: 'status',
    label: 'Status',
  },
  {
    reference: 'date',
    label: 'Date',
  },
  {
    reference: 'link',
    label: 'Link',
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

export const DFinanceHead2 = [
  {
    reference: 'revenue',
    label: 'Revenue',
  },
  {
    reference: 'subject',
    label: 'Subject',
  },
  {
    reference: 'status',
    label: 'Status',
  },
  {
    reference: 'date',
    label: 'Date',
  },
  {
    reference: 'amount',
    label: 'Amount',
  },
  {
    reference: 'currency',
    label: 'Currency',
  },
  {
    reference: 'actions',
    label: 'Actions',
  },
];
