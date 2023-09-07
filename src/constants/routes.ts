export const CProtectedRoutes = [
  '/',
  '/account',
  '/opportunities',
  '/applications',
  '/booking',
  '/users',
  '/users/overview',
  '/finance',
  '/help',
  '/cars',
  '/cars/overview',
];

export const CUnprotectedRoutes = [
  '/login',
  '/register',
  '/reset-password',
  '/email-confirmation',
];

export const CProtectedDynamicRoutes = ['/purchase-token-success'];

export const CMiscRoutes = ['/_/code'];

export const CAllRoutes = [
  ...CProtectedRoutes,
  ...CUnprotectedRoutes,
  ...CMiscRoutes,
];
