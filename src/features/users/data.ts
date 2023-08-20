export const DUsersFilters = () => ({
  search: '',
  location: null,
  houses: {
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
  locationOfInterest: null,
  status: null,
});

export const DUsersHead = [
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
    reference: 'houses',
    label: 'Houses',
    visible: true,
  },
  {
    reference: 'shares',
    label: 'Shares',
    visible: true,
  },
  {
    reference: 'applications',
    label: 'Applications',
    visible: true,
  },
  {
    reference: 'locationOfInterests',
    label: 'Location of Interest',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];
