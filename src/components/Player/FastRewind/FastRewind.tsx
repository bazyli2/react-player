import { RefObject } from "react";
import { FastRewindIcon } from "./FastRewindIcon";
import { IconButton } from "@/components/IconButton";

export function FastRewind(props: Props) {
  const handlePress = () => {
    if (props.audioRef.current === null) return;
    props.audioRef.current.currentTime = Math.max(
      0,
      props.audioRef.current.currentTime - 15,
    );
  };
  return (
    <IconButton onPress={handlePress}>
      <FastRewindIcon className="text-[35px]" />
    </IconButton>
  );
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
