import { useEffect, useRef } from "react";
import { Elm } from "./elm/src/IncrementingButton.elm";

export const IncrementingButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (!ref.current || rendered.current) return;
    rendered.current = true;
    Elm.IncrementingButton.init({ node: ref.current });
  }, []);

  return <div ref={ref} />;
};
