export const DGenerateCampaignsFilter = () => ({
  company: null,
  client: null,
  industry: null,
  dataRange: null,
  platform: null,
  postType: null,
  startNFinish: {
    min: '',
    max: '',
  },

  product: null,
  location: null,
  diseaseArea: null,
  promotionType: null,
  influencerSize: null,
  numberOfIfluencers: {
    min: '',
    max: '',
  },
  startDate: null,
  endDate: null,
  budget: {
    min: '',
    max: '',
  },
});

export const DCampaignsHead = [
  {
    reference: 'campaignName',
    label: 'Campaign name',
    visible: true,
  },
  {
    reference: 'platform',
    label: 'Platform',
    visible: true,
  },
  {
    reference: 'postType',
    label: 'Post Type',
    visible: true,
  },
  {
    reference: 'startAndFinish',
    label: 'Start & Finish',
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

export const DCampaignsHead2 = [
  {
    reference: 'accepted',
    label: 'Accepted',
    visible: true,
  },
  {
    reference: 'infoReceived',
    label: 'Info Received',
    visible: true,
  },
  {
    reference: 'toBePosted',
    label: 'To Be Posted',
    visible: true,
  },
  {
    reference: 'approved',
    label: 'Approved',
    visible: true,
  },
];
