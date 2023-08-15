export const DInvestorsFilters = () => ({
  search: '',
  project: null,
  profession: null,
  activity: null,
  totalInvested: {
    min: '',
    max: '',
  },
  currentlyInvested: {
    min: '',
    max: '',
  },
  unused: {
    min: '',
    max: '',
  },
  totalProjects: {
    min: '',
    max: '',
  },
  squareMeters: {
    min: '',
    max: '',
  },
});

export const DInvestorsHead = [
  {
    reference: 'name',
    label: 'Name',
    visible: true,
  },
  {
    reference: 'activity',
    label: 'Activity',
    visible: true,
  },
  {
    reference: 'totalInvested',
    label: 'Total Invested',
    visible: true,
  },
  {
    reference: 'invested',
    label: 'Invested',
    visible: true,
  },
  {
    reference: 'unused',
    label: 'Unused',
    visible: true,
  },
  {
    reference: 'squareMeters',
    label: 'Square Meters',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];
