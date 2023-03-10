import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";

import { ToggleColorMode } from "@/components/ToggleColorMode";
import { Footer } from "@/components/Layout/Footer";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className="absolute top-5 left-5">
          <ToggleColorMode />
        </div>
        <Component {...pageProps} />
        <div className="absolute bottom-1 w-full">
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
