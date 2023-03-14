"use client";
import { Auth } from "@aws-amplify/auth";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

// Auth.configure({
//   userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID,
//   userPoolWebClientId: process.env.NEXT_PUBLIC_USERPOOL_CLIENT_ID,
//   region: process.env.NEXT_PUBLIC_REGION,
// });

export const MfaSetupForm = ({ email, verifyCode }) => {
  return (
    <>
      <div>
        {/* <button onClick={() => getQrCode(values.email)}>Get QR Code</button> */}
        <span>{verifyCode}</span>
        <QRCodeSVG
          value={`otpauth://totp/AWSCognito:${email}?secret=${verifyCode}&issuer=${"MeeTee"}`}
        />
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
    </>
  );
};
