export const DGenerateCampaignsFilter = () => ({
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

export const DCampaignsHead = [
  {
    reference: 'campaign',
    label: 'Campaign',
  },
  {
    reference: 'client',
    label: 'Client',
  },
  {
    reference: 'diseaseArea',
    label: 'Disease Area',
  },
  {
    reference: 'market',
    label: 'Market',
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
    reference: 'budget',
    label: 'Budget',
  },
  {
    reference: 'actions',
    label: 'Actions',
  },
];
