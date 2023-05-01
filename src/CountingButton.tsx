import { useEffect, useRef } from "react";
import { Elm } from "./elm/src/CountingButton.elm";

export const CountingButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (!ref.current || rendered.current) return;
    rendered.current = true;
    Elm.CountingButton.init({ node: ref.current });
  }, []);

  return <div ref={ref} />;
};
