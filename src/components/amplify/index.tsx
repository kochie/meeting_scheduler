"use client";

import { Auth } from "@aws-amplify/auth";

export const AmplifyClient = () => {
  const config = {
    userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USERPOOL_CLIENT_ID,
    region: process.env.NEXT_PUBLIC_REGION,

    ssr: true,
  };

  Auth.configure(config);

  return null;
};
