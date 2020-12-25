import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [coresVestimentaSuperior, setCoresVestimentaSuperior] = useState({
    r: 0,
    g: 0,
    b: 0,
  });
  const [coresVestimentaInferior, setCoresVestimentaInferior] = useState({
    r: 0,
    g: 0,
    b: 0,
  });

  const context = {
    coresVestimentaSuperior,
    setCoresVestimentaSuperior,
    coresVestimentaInferior,
    setCoresVestimentaInferior,
  };

  return <Provider value={context}>{children}</Provider>;
};
