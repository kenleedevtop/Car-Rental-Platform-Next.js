export const DGenerateFinanceFilter = () => ({
  project: null,
  dateFrom: null,
  dateTo: null,
  type: null,
  amount: {
    min: '',
    max: '',
  },
});

export const DGenerateFinanceAdminFilter = () => ({
  type: null,
  investor: null,
  developer: null,
  location: null,
  project: null,
  status: null,
  amount: {
    min: '',
    max: '',
  },
  date: null,
});

export const DFinanceInvestorHead = [
  {
    reference: 'statement',
    label: 'Statement',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'type',
    label: 'Type',
    visible: true,
  },
  {
    reference: 'amount',
    label: 'Amount',
    visible: true,
  },
];

export const DFinanceAdminCostHead = [
  {
    reference: 'cost',
    label: 'Cost',
    visible: true,
  },
  {
    reference: 'subject',
    label: 'Subject',
    visible: true,
  },
  {
    reference: 'project',
    label: 'Project',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'amount',
    label: 'Amount',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];

export const DFinanceAdminRevenueHead = [
  {
    reference: 'revenue',
    label: 'Revenue',
    visible: true,
  },
  {
    reference: 'subject',
    label: 'Subject',
    visible: true,
  },
  {
    reference: 'status',
    label: 'Status',
    visible: true,
  },
  {
    reference: 'date',
    label: 'Date',
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
