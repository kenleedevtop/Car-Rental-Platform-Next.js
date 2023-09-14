export const DApplicationsFilters = () => ({
  user: [],
  location: [],
  supercar: [],
  supercars: {
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
  status: [],
  dateFrom: null,
  dateTo: null,
});

export const DApplicationsHead = [
  {
    reference: 'name',
    label: 'Name',
    visible: true,
  },
  {
    reference: 'supercars',
    label: 'Supercars',
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
export const DApplicationsUserHead = [
  {
    reference: 'name',
    label: 'Name',
    visible: true,
  },
  {
    reference: 'supercars',
    label: 'Supercars',
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
];

export const DApplicationStatues = [
  {
    name: 'Pending',
  },
  {
    name: 'Shortlist',
  },
  {
    name: 'Reject',
  },
  {
    name: 'Select',
  },
  {
    name: 'Accomodate',
  },
  {
    name: 'Widthdrawn',
  },
];
