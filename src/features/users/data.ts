export const DUsersFilters = () => ({
  search: '',
  location: null,
  nationality: null,
  age: {
    min: '',
    max: '',
  },
  language: null,
  applications: {
    min: '',
    max: '',
  },
  invested: {
    min: '',
    max: '',
  },
  socialMedia: null,
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
    label: 'Actions',
    visible: true,
  },
];
