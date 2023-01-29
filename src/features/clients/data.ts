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
    visible: true,
  },
  {
    reference: 'location',
    label: 'Location',
    visible: true,
  },
  {
    reference: 'diseaseArea',
    label: 'Disease Area',
    visible: true,
  },
  {
    reference: 'campaigns',
    label: 'Campaigns',
    visible: true,
  },
  {
    reference: 'revenue',
    label: 'Revenue',
    visible: true,
  },
  {
    reference: 'actions',
    label: 'Actions',
    visible: true,
  },
];
