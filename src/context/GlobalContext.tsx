/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type Dispatch,
  createContext,
  useReducer,
  type ReactNode,
  useContext,
  useEffect,
} from "react";
import { type Action, Reducer, type Store } from "./reducer";

type Reducer = (state: Store, action: Action) => Store;

export const initialState: Store = {
  user: {
    id: null,
    role: "",
    email: "",
    created_at: "",
    accessToken: "",
    refreshToken: "",
    is_authenticated: false,
  },
  signInModal: false,
  signUpModal: false,
};

export const GlobalContext = createContext<{
  state: Store;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const ContextProvider = ({ children }: { children?: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const storedUser =
      typeof window !== "undefined"
        ? window.localStorage.getItem("user")
        : null;
    const initialUser = storedUser ? JSON.parse(storedUser) : initialState.user;

    dispatch({ type: "SET_USER", payload: initialUser });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext: () => {
  state: Store;
  dispatch: (action: Action) => void;
} = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return { state, dispatch };
};
