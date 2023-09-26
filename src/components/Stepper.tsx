import React, { useState, useEffect, useRef } from "react";

type StepperProps = {
  steps: string[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  const [newStep, setNewStep] = useState<
    Array<{
      highlighted: boolean;
      selected: boolean;
      completed: boolean;
      description?: string | undefined;
    }>
  >([]);
  const stepsRef = useRef<
    Array<{
      highlighted: boolean;
      selected: boolean;
      completed: boolean;
      description?: string | undefined;
    }>
  >([]);
  const [complete, setComplete] = useState(false);

  const updateStep = (
    stepNumber: number,
    steps: Array<{
      highlighted: boolean;
      description?: string | undefined;
      selected: boolean;
      completed: boolean;
    }>,
  ) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        },
      ),
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={`step-item flex flex-col items-center ${
          currentStep === index + 1 && "active"
        } ${(index + 1 < currentStep || complete) && "complete"} `}
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full 
                        border-2 border-gray-300 py-3 transition duration-500 ease-in-out 
                         ${
                           step.selected
                             ? "border border-hero-bg bg-hero-bg font-bold text-white "
                             : ""
                         }`}
          >
            {step.completed ? (
              <span className="text-xl font-bold text-white">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0  mt-16 w-14 text-center text-xs font-medium uppercase lg:w-32 ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? "border-hero-bg" : "border-gray-300 "
          }  `}
        ></div>
        <div
          className={`form-progress ${currentStep === index + 1 && " active"} ${
            (index + 1 < currentStep || complete) && "complete"
          }`}
        ></div>
      </div>
    );
  });

  return (
    <div className="border-black-100 mx-auto flex w-[90%] items-center justify-center border-b-2 border-solid pb-[5px] pt-[2rem] lg:w-full">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;
