import React, { createContext, useContext, useState } from 'react';

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

  return <PageContext.Provider value={{ ...state, setRouteName }} {...props} />;
};

export default PageContextProvider;
