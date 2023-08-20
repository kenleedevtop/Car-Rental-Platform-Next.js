export const DBookingFilters = () => ({
  boat: null,
  dateFrom: null,
  dateTo: null,
  location: null,
  days: {
    min: '',
    max: '',
  },
});

export const DAdminBookingFilters = () => ({
  boat: null,
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
    reference: 'boat',
    label: 'Boat',
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
    reference: 'boat',
    label: 'Boat',
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
