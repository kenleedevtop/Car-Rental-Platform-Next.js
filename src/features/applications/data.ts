export const DApplicationsFilters = () => ({
  search: '',
  applicationType: [],
  nationality: [],
  age: {
    min: '',
    max: '',
  },
  language: [],
  location: [],
  invested: {
    min: '',
    max: '',
  },
  socialMedia: [],
  applications: {
    min: '',
    max: '',
  },
  status: [],
  dateFrom: null,
  dateTo: null,

  jobTitle: [],
  company: '',
  workExperienceLocation: [],
  currentlyEmployed: null,
  skills: [],

  school: '',
  degree: [],
  fieldOfStudy: [],

  theme: [],
  skillsOfOthers: [],
  houseLocation: [],
  houseLanguage: [],
  monthlyRent: {
    min: '',
    max: '',
  },
  houseAge: {
    min: '',
    max: '',
  },
  tenantsPerCar: {
    min: '',
    max: '',
  },
  interestsAndHobbies: [],
  diet: [],
});

export const DApplicationsHead = [
  {
    reference: 'house',
    label: 'Car',
    visible: true,
  },
  {
    reference: 'theme',
    label: 'Theme',
    visible: true,
  },
  {
    reference: 'location',
    label: 'Location',
    visible: true,
  },
  {
    reference: 'type',
    label: 'Type',
    visible: true,
  },
  {
    reference: 'rent',
    label: 'Rent',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
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
    reference: 'house',
    label: 'Car',
    visible: true,
  },
  {
    reference: 'rent',
    label: 'Rent',
    visible: true,
  },
  {
    reference: 'tier',
    label: 'Tier',
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

export const DApplicationType = [
  {
    value: 'Basic',
    name: 'Basic Application',
  },
  {
    name: 'Priority Application',
    value: 'Priority',
  },
  {
    name: 'Premium Application',
    value: 'Premium',
  },
  {
    name: 'Elite Application',
    value: 'Elite',
  },
];

export const DApplicationStatues = [
  {
    name: 'Pending',
  },
  {
    name: 'Approved',
  },
  {
    name: 'Rejected',
  },
];
