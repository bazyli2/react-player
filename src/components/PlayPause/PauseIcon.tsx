import { ComponentProps } from "react";
import { SVGIcon } from "../SVGIcon";

export function PauseIcon(props: ComponentProps<"svg">) {
  return (
    <SVGIcon viewBox="0 0 24 24" {...props}>
      <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"></path>
    </SVGIcon>
  );
}
