import React, { createContext, useMemo, useContext, useState } from 'react';

const PageContext = createContext({
  routeName: '',
  setRouteName: (_n: string) => {},
});

export const usePageContext = () => useContext(PageContext);

const PageContextProvider = ({ ...props }) => {
  const [state, setState] = useState({
    routeName: '',
  });

  const setRouteName = (routeName: string) => {
    setState((x) => ({ ...x, routeName }));
  };
  const providerValue = useMemo(
    () => ({ ...state, setRouteName }),
    [state, setRouteName]
  );
  return <PageContext.Provider value={providerValue} {...props} />;
};

export default PageContextProvider;
