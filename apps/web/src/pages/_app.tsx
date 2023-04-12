import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
/* import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; */

import { trpc } from "~/utils/api";
import { Toaster } from "~/components/toaster";

/* export const queryClient = new QueryClient(); */

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#16a34a" },
        elements: { userButtonPopoverCard: "border-2 border-gray-600" },
      }}
    >
      {/* <QueryClientProvider client={queryClient}> */}
      <Component {...pageProps} />
      <Toaster />
      {/* </QueryClientProvider> */}
    </ClerkProvider>
  );
};

export default trpc.withTRPC(App);
