import { AuthorizationAPI } from 'api';
import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useEffect,
} from 'react';
import { createInitialState } from 'context/app/data';
import { TAppContextState } from 'context/app/types';
import Cookies from 'js-cookie';
import { TLoginParams } from 'api/authorization/types';
import axios from 'axios';
import { LoadingPage } from 'features';

const AppContext = createContext(createInitialState());

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ ...props }) => {
  const [state, setState] = useState<TAppContextState>({
    routeName: '',
    user: null,
    role: 'CLIENT',
    initialLoading: true,
  });

  const setRouteName = (routeName: string) => {
    setState((x) => ({ ...x, routeName }));
  };

  const logout = () => {
    Cookies.remove('Authorization');
    axios.defaults.headers.common.Authorization = null;
  };

  const getMeData = async () => {
    try {
      const { user } = await AuthorizationAPI.me();

      if (!user) throw 'No user returned';

      const roleResult = user.role.find((_x) => true);

      if (!roleResult) throw 'No role found';

      setState({ ...state, user, role: roleResult, initialLoading: false });
    } catch {
      setState({ ...state, initialLoading: false });
    }
  };

  const login = async (body: TLoginParams) => {
    const { token, attempt, role, affiliateLink } =
      await AuthorizationAPI.login(body);
    return { role, affiliateLink, attempt };
  };

  // const login = async (body: TLoginParams) => {
  //   const { token } = await AuthorizationAPI.login(body);
  //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   Cookies.set('Authorization', token);
  //   await getMeData();
  // };

  useEffect(() => {
    const token = Cookies.get('Authorization');
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      getMeData();
    } else {
      setState({ ...state, initialLoading: false });
    }
  }, []);

  const providerValue = useMemo(
    () => ({ ...state, setRouteName, login, logout }),
    [state, setRouteName, login, logout]
  );
  return state.initialLoading ? (
    <LoadingPage />
  ) : (
    <AppContext.Provider value={providerValue} {...props} />
  );
};

export default AppContextProvider;
