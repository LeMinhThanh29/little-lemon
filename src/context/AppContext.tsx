import React, { ReactNode, useContext, useMemo, useReducer } from "react";
import {
  ContextModel,
  InitialState,
  initStateData,
  reducer,
  TYPE_ACTION,
} from "./Context";

const ApplicationContext = React.createContext<ContextModel | undefined>(
  undefined
);
interface Children {
  children: ReactNode;
}
const AppContext = ({ children }: Children) => {
  const [initState, dispatch] = useReducer<
    React.Reducer<InitialState, TYPE_ACTION>
  >(reducer, initStateData);

  const memo = useMemo(() => {
    return { initState, dispatch };
  }, [reducer, initStateData]);

  return (
    <ApplicationContext.Provider value={{ initState, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};
export const useContextApi = () => useContext(ApplicationContext);
export default AppContext;
