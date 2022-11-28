export const DGenerateCampaignsFilter = () => ({
  company: null,
  client: null,
  location: null,
  diseaseArea: null,
  industry: null,
  platform: null,
  promotionType: null,
  dataRange: null,
  startDate: null,
  endDate: null,
  product: null,
  influencerSize: '',
  numberOfIfluencers: {
    min: '',
    max: '',
  },
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

export const DCampaignsHead = [
  {
    reference: 'campaignName',
    label: 'Campaign name',
  },
  {
    reference: 'product',
    label: 'Product',
  },
  {
    reference: 'platform',
    label: 'Platform',
  },
  {
    reference: 'startAndFinish',
    label: 'Start & Finish',
  },
  {
    reference: 'influencers',
    label: 'Influencers',
  },
  {
    reference: 'report',
    label: 'Report',
  },
  {
    reference: 'budget',
    label: 'Budget',
  },
  {
    reference: 'actions',
    label: 'Actions',
  },
];
