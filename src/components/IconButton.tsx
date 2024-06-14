"use client";
import { ComponentProps } from "react";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function IconButton(
  props: Omit<ComponentProps<typeof Button>, "className"> & {
    className?: string;
  },
) {
  return <Button {...props} className={twMerge("p-2", props.className)} />;
}
