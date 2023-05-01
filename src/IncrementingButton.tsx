import { useEffect, useRef } from "react";
import { Elm } from "./elm/src/IncrementingButton.elm";

export const IncrementingButton = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current?.isConnected) return;
    Elm.IncrementingButton.init({ node: ref.current });
  }, []);

  return <div ref={ref} />;
};
