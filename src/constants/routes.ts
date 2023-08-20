export const CProtectedRoutes = [
  '/',
  '/account',
  '/booking',
  '/opportunities',
  '/applications',
  '/users',
  '/users/overview',
  '/houses',
  '/finance',
  '/help',
  '/overview',
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
