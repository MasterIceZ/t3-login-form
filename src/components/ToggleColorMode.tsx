import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { FaCircle } from "react-icons/fa";
import { ClientOnly } from "@/components/ClientOnly";

import { useTheme } from "next-themes";

export const ToggleColorMode = () => {
  const { theme, setTheme } = useTheme();
  function toggleColorMode() {
    // console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-opacity-50 hover:bg-slate-400 dark:hover:bg-white dark:hover:bg-opacity-50">
      <ClientOnly
        fallback={
          <button onClick={toggleColorMode}>
            <FaCircle />
          </button>
        }
      >
        <button onClick={toggleColorMode}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </ClientOnly>
    </div>
  );
};
