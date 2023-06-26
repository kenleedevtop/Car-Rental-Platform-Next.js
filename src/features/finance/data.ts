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

export const DGenerateFinanceAdminFilter = () => ({
  search: '',
  startDate: null,
  endDate: null,
  budget: {
    min: '',
    max: '',
  },
  type: null,
  location: null,
  diseaseArea: null,
  status: null,
  socialMediaPlatform: null,
  labels: null,
  schedule: null,

  company: null,
  client: null,
  influencer: null,
  ambassador: null,
  vendor: null,
  campaign: null,
  report: null,
  socialMediaListening: null,
  survey: null,
  product: null,
});

export const DFinanceHead = [
  {
    reference: 'name',
    label: 'Name',
    visible: true,
  },
  {
    reference: 'amount',
    label: 'Amount',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'type',
    label: 'Type',
    visible: false,
  },
  {
    reference: 'location',
    label: 'Location',
    visible: false,
  },
  {
    reference: 'diseaseArea',
    label: 'Disease Area',
    visible: false,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'socialMediaPlatform',
    label: 'Social Media Platform',
    visible: false,
  },
  {
    reference: 'promotionType',
    label: 'Promotion Type',
    visible: false,
  },
  {
    reference: 'labels',
    label: 'Labels',
    visible: false,
  },
  {
    reference: 'schedule',
    label: 'Schedule',
    visible: false,
  },
  {
    reference: 'company',
    label: 'Company',
    visible: true,
  },
  {
    reference: 'subject',
    label: 'Subject',
    visible: true,
  },
  {
    reference: 'vendor',
    label: 'Vendor',
    visible: false,
  },
  {
    reference: 'project',
    label: 'Project',
    visible: true,
  },
  {
    reference: 'product',
    label: 'Product',
    visible: false,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];

export const DFinanceHead2 = [
  {
    reference: 'subject',
    label: 'Subject',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'amount',
    label: 'Amount',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];

export const DFinanceHead3 = [
  {
    reference: 'project',
    label: 'Project',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'amount',
    label: 'Amount',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];
