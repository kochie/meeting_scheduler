"use client";
import { useReducer } from "react";
import { ConfirmForm } from "./ConfirmForm";
import { InitalForm } from "./InitalForm";
import { SetupMfaForm } from "./SetupMfsForm";

function reducer(state, action) {
  switch (action.type) {
    case SINGUP_STEP.INITAL:
      return { step: SINGUP_STEP.INITAL };
    case SINGUP_STEP.CONFIRM:
      return { step: SINGUP_STEP.CONFIRM };
    case SINGUP_STEP.MFA:
      return { step: SINGUP_STEP.MFA };
    case SINGUP_STEP.DONE:
      return { step: SINGUP_STEP.DONE };
    default:
      throw new Error();
  }
}

enum SINGUP_STEP {
  INITAL,
  CONFIRM,
  MFA,
  DONE,
}

const initialState = {
  step: SINGUP_STEP.INITAL,
};

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign Up
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            start your 14-day free trial
          </a>
        </p>
      </div>
      {state.step === SINGUP_STEP.INITAL && (
        <InitalForm
          onComplete={() => dispatch({ type: SINGUP_STEP.CONFIRM })}
        />
      )}
      {state.step === SINGUP_STEP.CONFIRM && (
        <ConfirmForm onComplete={() => dispatch({ type: SINGUP_STEP.MFA })} />
      )}
      {state.step === SINGUP_STEP.MFA && (
        <SetupMfaForm onComplete={() => dispatch({ type: SINGUP_STEP.DONE })} />
      )}
    </div>
  );
}
