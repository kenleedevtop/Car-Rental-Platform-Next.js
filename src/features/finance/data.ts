export const DGenerateFinanceFilter = () => ({
  type: null,
  user: null,
  house: null,
  location: null,
  amount: {
    min: '',
    max: '',
  },
  dateFrom: null,
  dateTo: null,
});

export const DFinanceAdminRevenueHead = [
  {
    reference: 'revenue',
    label: 'Revenue',
    visible: true,
  },
  {
    reference: 'user',
    label: 'User',
    visible: true,
  },
  {
    reference: 'type',
    label: 'Type',
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
