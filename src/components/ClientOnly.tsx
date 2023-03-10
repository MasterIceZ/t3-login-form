import { type PropsWithChildren, useEffect, useState } from "react";

export type ClientOnlyProps = PropsWithChildren<{
  fallback?: React.ReactNode;
}>;

export const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return <>{hasMounted ? children : fallback}</>;
};
