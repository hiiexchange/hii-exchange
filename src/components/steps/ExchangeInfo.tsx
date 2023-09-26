/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useStepperContext } from "../../context/StepperContext";
import type { UserData } from "../../context/StepperContext";
import { useGlobalContext } from "../../context/GlobalContext";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { coinDataType } from "../../types/types";
import InputSwap from "../swap/InputSwap";
import OutputSwap from "../swap/OutputSwap";
import inputCoinData from "../../data/inputCoinData.json";
import outputCoinData from "../../data/outputCoinData.json";

interface ExchangeInfoProps {
  onValidationChange: (value: boolean) => void;
}

export default function ExchangeInfo({
  onValidationChange,
}: ExchangeInfoProps) {
  const { state } = useGlobalContext();

  const token = state.user.accessToken;

  const obj = {
    currency_id: 0,
    title: "",
    slug: "",
    currency_code: "",
    is_crypto: null,
    icon: "",
  };

  const { userData, setUserData } = useStepperContext();

  const prevUserDataRef = useRef(userData);

  const [inputToken, setInputToken] = useState<coinDataType>(
    userData.inputToken ?? obj,
  );
  const [outputToken, setOutputToken] = useState<coinDataType>(
    userData.outputToken ?? obj,
  );
  const [inputAmount, setInputAmount] = useState<string | undefined>(
    userData.inputAmount,
  );
  const [outputAmount, setOutputAmount] = useState<string | undefined>(
    userData.outputAmount,
  );

  useEffect(() => {
    // Check if the current context data is different from the previous one
    if (userData !== prevUserDataRef.current) {
      // Update the component's state with the new context data
      setInputToken(userData.inputToken);
      setOutputToken(userData.outputToken);
      setInputAmount(userData.inputAmount);
      setOutputAmount(userData.outputAmount);

      // Update the ref with the current context data
      prevUserDataRef.current = userData;
    }
  }, [userData]);

  useEffect(() => {
    // Example validation: Ensure required fields are not empty
    const isValid = inputAmount !== "" && outputAmount !== "";

    // Notify the parent component of the validation status
    onValidationChange(isValid);
  }, [inputAmount, outputAmount]);

  const handleInputTokenSelect = (selectedToken: coinDataType) => {
    // setInputToken(selectedToken);
    setUserData({ ...userData, inputToken: selectedToken });
  };

  const handleOutputTokenSelect = (selectedToken: coinDataType) => {
    // setOutputToken(selectedToken);
    setUserData({ ...userData, outputToken: selectedToken });
  };

  const calculateEquivalentAmount = async (
    inputToken: coinDataType,
    outputToken: coinDataType,
    inputAmount: string,
  ) => {
    try {
      const response = await fetch(
        "https://hi-exchange-backend.onrender.com/exchange/calculate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            inputToken: inputToken.currency_code,
            outputToken: outputToken.currency_code,
            inputTokenAmount: parseFloat(inputAmount),
          }),
        },
      );

      if (response.ok) {
        const equivalentAmount: number = await response.json();
        return equivalentAmount.toFixed(2);
      } else {
        console.error("Failed to fetch equivalent amount");
      }
    } catch (error) {
      console.error("Error calculating equivalent amount:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputAmount: string = e.target.value;

    const numericRegex = /^$|^[0-9]*\.?[0-9]*$/;


    if (numericRegex.test(newInputAmount)) {
      calculateEquivalentAmount(inputToken, outputToken, newInputAmount)
        .then((equivalentAmount) => {
          setUserData({ ...userData, outputAmount: equivalentAmount, inputAmount: newInputAmount });
          setInputAmount(newInputAmount);
        })
        .catch((error) => {
          console.error('Error calculating equivalent amount:', error);
        });
    } else {
      // Handle invalid input
      setInputAmount("");
      // setOutputAmount("");
    }
  };

  return (
    <div className="my-7 flex flex-col items-center justify-center gap-4 px-4 md:flex-row">
      <div className="w-full">
        <InputSwap
          token={inputToken}
          handleInputChange={handleInputChange}
          amount={inputAmount}
          setAmount={setInputAmount}
          selectToken={handleInputTokenSelect}
          coinData={inputCoinData}
        />
        <div className="flex justify-between p-2">
          <p>
            min: <span className="font-semibold">10</span>
          </p>
          <p>
            max: <span className="font-semibold">3000</span>
          </p>
        </div>
      </div>

      <Image
        width={50}
        height={50}
        src="/assets/swap-icon.svg"
        className="w-fit rotate-90 md:rotate-0"
        alt=""
      />

      <div className="w-full">
        <OutputSwap
          token={outputToken}
          amount={outputAmount}
          setAmount={setOutputAmount}
          selectToken={handleOutputTokenSelect}
          coinData={outputCoinData}
        />
        <div className="flex justify-between p-2">
          <p>
            min: <span className="font-semibold">10</span>
          </p>
          <p>
            max: <span className="font-semibold">3000</span>
          </p>
          <p>
            reserve: <span className="font-semibold">32,994.6272</span>
          </p>
        </div>
      </div>
    </div>
  );
}
