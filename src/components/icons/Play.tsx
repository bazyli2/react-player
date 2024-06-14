import { ComponentProps } from "react";
import { SVGIcon } from "../SVGIcon";

export function Play(props: ComponentProps<"svg">) {
  return (
    <SVGIcon viewBox="0 0 24 24" {...props}>
      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 000-1.69L9.54 5.98A.998.998 0 008 6.82"></path>
    </SVGIcon>
  );
}
