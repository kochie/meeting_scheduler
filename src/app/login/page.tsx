"use client";
import { Auth, CognitoUser } from "@aws-amplify/auth";
import { Form, Formik } from "formik";
import { useEffect, useReducer, useState } from "react";
import { LoginForm } from "./LoginForm";
import { MfaForm } from "./MfaForm";
import { MfaSetupForm } from "./MfaSetupForm";
import { SubmitForm } from "./SubmitForm";
import { useRouter } from "next/navigation";

function reducer(state, action) {
  switch (action.type) {
    case SIGNIN_STEP.INITAL:
      return { step: SIGNIN_STEP.INITAL };
    case SIGNIN_STEP.MFA:
      return { step: SIGNIN_STEP.MFA };
    case SIGNIN_STEP.DONE:
      return { step: SIGNIN_STEP.DONE };
    case SIGNIN_STEP.MFA_SETUP:
      return { step: SIGNIN_STEP.MFA_SETUP };
    default:
      throw new Error();
  }
}

Auth.configure({
  userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_USERPOOL_CLIENT_ID,
  region: process.env.NEXT_PUBLIC_REGION,
});

enum SIGNIN_STEP {
  INITAL,
  MFA,
  MFA_SETUP,
  DONE,
}

const initialState = {
  step: SIGNIN_STEP.INITAL,
};

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [verifyCode, setVerifyCode] = useState("");
  const [user, setUser] = useState<CognitoUser>();

  async function MfaSetup(user: CognitoUser) {
    const mfaVerify = await Auth.setupTOTP(user);
    setVerifyCode(mfaVerify);
  }
  const router = useRouter();

  useEffect(() => {
    if (state.step === SIGNIN_STEP.DONE) {
      router.push("/account");
    }
  }, [state.step]);

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
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{ email: "", password: "", code: "" }}
            onSubmit={async (values, { setSubmitting }) => {
              switch (state.step) {
                case SIGNIN_STEP.INITAL:
                  const login = await Auth.signIn(
                    values.email,
                    values.password
                  );
                  setUser(login);
                  console.log(login);
                  if (login.challengeName === "MFA_SETUP") {
                    await MfaSetup(login);
                    dispatch({ type: SIGNIN_STEP.MFA_SETUP });
                  } else {
                    dispatch({ type: SIGNIN_STEP.MFA });
                  }
                  break;
                case SIGNIN_STEP.MFA:
                  const mfa = await Auth.confirmSignIn(
                    user,
                    values.code,
                    "SOFTWARE_TOKEN_MFA"
                  );
                  dispatch({ type: SIGNIN_STEP.DONE });
                  break;
                case SIGNIN_STEP.MFA_SETUP:
                  await Auth.verifyTotpToken(user, values.code);
                  await Auth.setPreferredMFA(user, "SOFTWARE_TOKEN_MFA");
                  dispatch({ type: SIGNIN_STEP.DONE });
                  break;
              }
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ values }) => (
              <Form className="space-y-6">
                <>
                  {<LoginForm disabled={state.step !== SIGNIN_STEP.INITAL} />}
                  {state.step === SIGNIN_STEP.MFA && MfaForm}
                  {state.step === SIGNIN_STEP.MFA_SETUP && (
                    <MfaSetupForm
                      email={values.email}
                      verifyCode={verifyCode}
                    />
                  )}
                  {state.step === SIGNIN_STEP.DONE && (
                    <div className="text-center">Sign In Complete</div>
                  )}
                  {SubmitForm}
                </>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
