export const DApplicationsFilters = () => ({
  user: null,
  location: null,
  boat: null,
  boats: {
    min: '',
    max: '',
  },
  shares: {
    min: '',
    max: '',
  },
  applications: {
    min: '',
    max: '',
  },
  status: null,
  applicationDateFrom: null,
  applicationDateTo: null,
});

export const DApplicationsHead = [
  {
    reference: 'name',
    label: 'Name',
    visible: true,
  },
  {
    reference: 'boat',
    label: 'Boat',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'sharesApplied',
    label: 'Shares Applied',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];

export const DAdminApplicationsHead = [
  {
    reference: 'name',
    label: 'Name',
    visible: true,
  },
  {
    reference: 'location',
    label: 'Location',
    visible: true,
  },
  {
    reference: 'nationality',
    label: 'Nationality',
    visible: true,
  },
  {
    reference: 'age',
    label: 'Age',
    visible: true,
  },
  {
    reference: 'applications',
    label: 'Applications',
    visible: true,
  },
  {
    reference: 'invested',
    label: 'Invested',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];
