export const DBookingFilters = () => ({
  house: null,
  dateFrom: null,
  dateTo: null,
  location: null,
  days: {
    min: '',
    max: '',
  },
});

export const DAdminBookingFilters = () => ({
  house: null,
  dateFrom: null,
  dateTo: null,
  location: null,
  days: {
    min: '',
    max: '',
  },
});

export const DBookingsHead = [
  {
    reference: 'house',
    label: 'House',
    visible: true,
  },
  {
    reference: 'location',
    label: 'Location',
    visible: true,
  },
  {
    reference: 'startDate',
    label: 'Start Date',
    visible: true,
  },
  {
    reference: 'endDate',
    label: 'End Date',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];

export const DAdminBookingsHead = [
  {
    reference: 'house',
    label: 'House',
    visible: true,
  },
  {
    reference: 'user',
    label: 'User',
    visible: true,
  },
  {
    reference: 'startDate',
    label: 'Start Date',
    visible: true,
  },
  {
    reference: 'endDate',
    label: 'End Date',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];
