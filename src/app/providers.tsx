"use client";

import { NotificationProvider } from "@/components/notifications/context";
import { useApollo } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";

export function Providers({ children }) {
  const apolloClient = useApollo({});
  return (
    <ApolloProvider client={apolloClient}>
      <NotificationProvider>{children}</NotificationProvider>
    </ApolloProvider>
  );
}
