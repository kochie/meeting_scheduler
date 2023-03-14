import { AmplifyClient } from "@/components/amplify";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AmplifyClient />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
