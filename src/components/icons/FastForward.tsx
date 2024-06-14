import { ComponentProps } from "react";
import { SVGIcon } from "../SVGIcon";

export function FastForward(props: ComponentProps<"svg">) {
  return (
    <SVGIcon viewBox="0 0 24 24" {...props}>
      <path d="M5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82M13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81"></path>
    </SVGIcon>
  );
}
