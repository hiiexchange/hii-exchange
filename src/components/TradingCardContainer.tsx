/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-tslint-comment */
import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import UseContextProvider from "../context/StepperContext";

import ExchangeInfo from "../components/steps/ExchangeInfo";
import WalletInfo from "../components/steps/WalletInfo";
import ReviewOrder from "../components/steps/ReviewOrder";
import PayOrder from "../components/steps/PayOrder";

function TradingCardContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepValidations, setStepValidations] = useState({
    1: false, // ExchangeInfo
    2: false, // WalletInfo
    3: true, // ReviewOrder
    4: true,  // PayOrder 
  });


  const steps = ["Exchange Info", "Wallet Info", "Review Order", "Pay Order"];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <ExchangeInfo
          onValidationChange={(isValid: boolean) =>
            setStepValidations({ ...stepValidations, 1: isValid })
          } />;
      case 2:
        return <WalletInfo
          onValidationChange={(isValid: boolean) =>
            setStepValidations({ ...stepValidations, 2: isValid })
          } />;
      case 3:
        return <ReviewOrder />;
      case 4:
        return <PayOrder />;
      default:
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  }

  const handleClick = (direction?: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <UseContextProvider>
    <div className="flex min-h-[30rem] w-full justify-center rounded-2xl bg-white shadow-xl">
      <div className="w-full rounded-3xl pb-2 lg:w-4/5">
        {/* Stepper */}
        <div className="mt-5">
          <Stepper steps={steps} currentStep={currentStep} />

          <form className="mt-24" onSubmit={handleSubmit}>
            {displayStep(currentStep)}
          </form>
        </div>

        {/* navigation button */}
            {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
              /* tslint:disable-next-line:no-any */
              // @ts-ignore
            disabled={!stepValidations[currentStep]}
          />
        )}
        
      </div>
    </div>
    </UseContextProvider>
  );
}

export default TradingCardContainer;
