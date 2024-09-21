import { ReactElement, FormEvent, useState } from "react";

export const useForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = (i: number, e?: FormEvent) => {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  };

  return {
    currentStep,
    changeStep,
    changeComponent: steps[currentStep],
    isLastStep: steps.length - 1 === currentStep ? true : false,
  };
};
