import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function SVGIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      className={twMerge("h-[1em] w-[1em] fill-current", props.className)}
    />
  );
}
