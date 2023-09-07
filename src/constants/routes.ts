export const CProtectedRoutes = [
  '/',
  '/account',
  '/opportunities',
  '/applications',
  '/users',
  '/users/overview',
  '/finance',
  '/help',
  '/cars',
  '/cars/overview',
  '/purchase-token-success',
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
