import { ComponentProps } from "react";
import { SVGIcon } from "../SVGIcon";

export function VolumeDown(props: ComponentProps<typeof SVGIcon>) {
  return (
    <SVGIcon viewBox="0 0 24 24" {...props}>
      <path d="M18.5 12A4.5 4.5 0 0016 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02M5 9v6h4l5 5V4L9 9z"></path>
    </SVGIcon>
  );
}
