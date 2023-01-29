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

  audienceAge: {
    min: '',
    max: '',
  },
  gender: null,
  genderPercent: null,
  country: null,
  countryPercent: null,
  city: null,
  cityPercent: null,
  language: null,
  languagePercent: null,
  ethnicity: null,
  ethnicityPercent: null,
  patients: null,
  patientsPercent: null,
  brandAffinity: null,
  brandAffinityPercent: null,
  symptoms: null,
  symptomsPercent: null,

  costPerClick: {
    min: '',
    max: '',
  },
  costPerTarget: {
    min: '',
    max: '',
  },
  postType: null,

  influencersNeeded: {
    min: '',
    max: '',
  },
  audienceOverlap: {
    min: '',
    max: '',
  },
  priority: null,
});

export const DClientsHead = [
  {
    reference: 'username',
    label: 'Username',
    visible: true,
  },
  {
    reference: 'campaigns',
    label: 'Campaigns',
    visible: true,
  },
  {
    reference: 'cpc',
    label: 'CPC',
    visible: true,
  },
  {
    reference: 'cpt',
    label: 'CPT',
    visible: true,
  },
  {
    reference: 'price',
    label: 'Price',
    visible: true,
  },
  {
    reference: 'overlap',
    label: 'Overlap',
    visible: true,
  },
  {
    reference: 'actions',
    label: 'Actions',
    visible: true,
  },
];
