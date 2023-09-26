/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-tslint-comment */
import { createContext, useContext, useState, type ReactNode } from "react";
import type { coinDataType } from '../types/types';
import inputCoinData from '../data/inputCoinData.json';
import outputCoinData from '../data/outputCoinData.json';

type StepperContextProps = {
  children: ReactNode;
};

const obj = {
  "currency_id": 0,
  "title": "",
  "slug": "",
  "currency_code": "",
  "is_crypto": null,
  "icon": ""
};

export type UserData = {
  inputToken: coinDataType;
  inputAmount: string | undefined;
  outputToken: coinDataType;
  outputAmount: string | undefined;
  address: string;
};

/* tslint:disable-next-line:no-any */
// @ts-ignore
const StepperContext = createContext<{
  userData: UserData;
  setUserData: (data: UserData) => void;
}>({
  userData: {
    inputToken: inputCoinData[0] ?? obj,
    inputAmount: "",
    outputToken: outputCoinData[0] ?? obj,
    outputAmount: "",
    address: ""
  },
  setUserData: () => null,
});



export default function UseContextProvider({ children }: StepperContextProps) {
  const [userData, setUserData] = useState({
    inputToken: inputCoinData[0] ?? obj,
    inputAmount: "",
    outputToken: outputCoinData[0] ?? obj,
    outputAmount: "",
    address: ""
  });

  return (
    /* tslint:disable-next-line:no-any */
    // @ts-ignore
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
