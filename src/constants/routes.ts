export const CProtectedRoutes = [
  '/',
  '/account',
  '/clients',
  '/developers',
  '/investors',
  '/finance',
  '/help',
  '/search',
  '/projects/overview',
  '/market',
  '/market/overview',
  '/portfolio',
  '/secondary-market',
];

export const CUnprotectedRoutes = [
  '/login',
  '/register',
  '/reset-password',
  '/email-confirmation',
];

export const CMiscRoutes = ['/_/code'];

export const CAllRoutes = [
  ...CProtectedRoutes,
  ...CUnprotectedRoutes,
  ...CMiscRoutes,
];
