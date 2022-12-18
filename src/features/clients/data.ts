export const DGenerateClientsFilter = () => ({
  industry: null,
  company: null,
  diseaseArea: null,
  location: null,
  campaignStatus: null,
  startDate: null,
  endDate: null,
  campaignNumber: {
    min: '',
    max: '',
  },
  revenue: {
    min: '',
    max: '',
  },
  market: [],
  task: null,
  label: [],
});

export const DClientsHead = [
  {
    reference: 'client',
    label: 'Client',
  },
  {
    reference: 'location',
    label: 'Location',
  },
  {
    reference: 'diseaseArea',
    label: 'Disease Area',
  },
  {
    reference: 'campaigns',
    label: 'Campaigns',
  },
  {
    reference: 'revenue',
    label: 'Revenue',
  },
  {
    reference: 'actions',
    label: 'Actions',
  },
];
