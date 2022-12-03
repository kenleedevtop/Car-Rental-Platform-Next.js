export const DGenerateCampaignsFilter = () => ({
  company: null,
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
  },
  {
    reference: 'platform',
    label: 'Platform',
  },
  {
    reference: 'postType',
    label: 'Post Type',
  },
  {
    reference: 'startAndFinish',
    label: 'Start & Finish',
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

export const DCampaignsHead2 = [
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
