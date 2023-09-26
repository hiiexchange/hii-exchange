import { type AppType } from "next/app";
import { Provider } from "react-redux";

import Footer from "@/components/Footer";
import { ContextProvider } from "@/context/GlobalContext";
import Navbar from "@/components/Navbar";
import { sf } from "@/styles/fonts";
import "@/styles/globals.css";
import store from "../redux/store";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Provider store={store}>
          <main className={`${sf.className} bg-[#fafafa]`}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </main>
        </Provider>
      </ContextProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
