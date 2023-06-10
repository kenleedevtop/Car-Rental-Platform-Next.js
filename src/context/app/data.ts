import { TAppContext } from 'context/app/types';

export const createInitialState = (): TAppContext => ({
  routeName: '',
  user: null,
  currency: 'CHF',
  login: async (_x) => {},
  setRouteName: () => {},
  logout: () => {},
  role: 'CLIENT',
  initialLoading: true,
  showMobileMenu: false,
  handleMobileMenu: () => {},
  handleCurrencyChange: () => {},
});
