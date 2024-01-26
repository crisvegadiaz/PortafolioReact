// AppContext.js
import React, { createContext, useReducer, useContext } from "react";
import { reducerTheme } from "../reducers/reducerTheme";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = { theme: false };
  const [state, dispatch] = useReducer(reducerTheme, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
