"use client";

import { Auth } from "aws-amplify";

export const AmplifyClient = () => {
  const config = {
    userPoolId: process.env.NEXT_PUBLIC_USERPOOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USERPOOL_CLIENT_ID,
    region: process.env.NEXT_PUBLIC_REGION,

    ssr: true,
    cookieStorage: {
      // domain: process.env.NEXT_PUBLIC_DOMAIN_NAME,
      sameSite: "lax",
    },
  };

  Auth.configure(config);

  console.log("Amplify on client");

  return null;
};
