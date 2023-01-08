export const DGenerateInfluencersFilter = () => ({
  platform: null,
  diseaseArea: null,
  location: null,
  interests: [],
  mentions: [],
  hashtags: [],
  brands: [],
  age: {
    min: '',
    max: '',
  },
  followers: {
    min: '',
    max: '',
  },
  engagement: {
    min: '',
    max: '',
  },
  averageLikes: {
    min: '',
    max: '',
  },
  averageComments: {
    min: '',
    max: '',
  },
  reachMultipler: {
    min: '',
    max: '',
  },
  realFollowers: {
    min: '',
    max: '',
  },
  campaigns: {
    min: '',
    max: '',
  },
  totalCampaigns: {
    min: '',
    max: '',
  },
});

export const DClientsHead = [
  {
    reference: 'username',
    label: 'Username',
  },
  {
    reference: 'campaigns',
    label: 'Campaigns',
  },
  {
    reference: 'cpc',
    label: 'CPC',
  },
  {
    reference: 'cpt',
    label: 'CPT',
  },
  {
    reference: 'price',
    label: 'Price',
  },
  {
    reference: 'overlap',
    label: 'Overlap',
  },
  {
    reference: 'actions',
    label: 'Actions',
  },
];
