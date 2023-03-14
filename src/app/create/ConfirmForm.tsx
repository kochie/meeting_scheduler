"use client";
import { Auth } from "@aws-amplify/auth";
import { Field, Form, Formik } from "formik";

// Auth.configure({
//   userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID,
//   userPoolWebClientId: process.env.NEXT_PUBLIC_USERPOOL_CLIENT_ID,
//   region: process.env.NEXT_PUBLIC_REGION,
// });

export const ConfirmForm = ({ onComplete }) => {
  const resendCode = async (email) => {
    await Auth.resendSignUp(email);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Formik
          initialValues={{ email: "", code: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            Auth.confirmSignUp(values.email, values.code);
            setSubmitting(false);
            onComplete();
          }}
        >
          {({ values }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Code
                </label>
                <div className="mt-2">
                  <Field
                    id="code"
                    name="code"
                    type="text"
                    autoComplete="one-time-code"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Confirm Email
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    onClick={() => resendCode(values.email)}
                    className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Resend Code
                  </a>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
