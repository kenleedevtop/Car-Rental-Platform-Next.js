import { TAppContext } from 'context/app/types';

export const createInitialState = (): TAppContext => ({
  routeName: '',
  user: null,
  influencer: null,
  currency: 'CHF',
  login: async (_x) => {},
  setRouteName: () => {},
  logout: () => {},
  role: 'USER',
  initialLoading: true,
  showMobileMenu: false,
  handleMobileMenu: () => {},
  handleCurrencyChange: () => {},
  handleInfluencer: () => {},
  getMeData: async () => {},
});
