export const DDevelopersFilters = () => ({
  search: '',
  project: null,
  location: null,
  activity: null,
  services: null,
  revenue: {
    min: '',
    max: '',
  },
  offers: {
    min: '',
    max: '',
  },
  totalProjects: {
    min: '',
    max: '',
  },
});

export const DDevelopersHead = [
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
    reference: 'location',
    label: 'Location',
    visible: true,
  },
  {
    reference: 'revenue',
    label: 'Revenue',
    visible: true,
  },
  {
    reference: 'projects',
    label: 'Projects',
    visible: true,
  },
  {
    reference: 'Services',
    label: 'Services',
    visible: true,
  },
  {
    reference: 'actions',
    label: '',
    visible: true,
  },
];
