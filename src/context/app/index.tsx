import React, { createContext, useMemo, useContext, useState } from 'react';

const AppContext = createContext({
  routeName: '',
  role: 'admin',
  setRouteName: (_n: string) => {},
  setRole: (_r: 'admin' | 'influencer' | 'client') => {},
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ ...props }) => {
  const [state, setState] = useState({
    routeName: '',
    role: 'admin',
  });

  const setRouteName = (routeName: string) => {
    setState((x) => ({ ...x, routeName }));
  };

  const setRole = (role: string) => {
    setState((x) => ({ ...x, role }));
  };

  const providerValue = useMemo(
    () => ({ ...state, setRouteName, setRole }),
    [state, setRole, setRouteName]
  );
  return <AppContext.Provider value={providerValue} {...props} />;
};

export default AppContextProvider;
