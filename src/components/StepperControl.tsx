import { useGlobalContext } from "@/context/GlobalContext";

type StepperControlProps = {
  handleClick: (direction?: string) => void;
  steps: string[];
  currentStep: number;
  disabled?: boolean;
};

export default function StepperControl({
  handleClick,
  steps,
  currentStep,
  disabled,
}: StepperControlProps) {
  const {
    state: { user },
    dispatch,
  } = useGlobalContext();
  return (
    <div className="container mb-8 mt-4 flex justify-around">
      {currentStep > 1 && (
        <button
          onClick={(e) => handleClick("back")}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white px-4 py-2 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-hero-bg hover:text-white  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
        </button>
      )}
      <button
        type="submit"
        disabled={disabled}
        onClick={(e) => {
          if (!user.is_authenticated) {
            dispatch({
              type: "SET_SIGN_IN_MODAL",
              payload: true,
            });
            return;
          }
          handleClick("next");
        }}
        className="cursor-pointer rounded-lg bg-hero-bg px-4 py-2 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-orange hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
}
