import { RefObject } from "react";
import { IconButton } from "../IconButton";
import { FastForwardIcon } from "./FastForwardIcon";

export function FastForward(props: Props) {
  const handlePress = () => {
    if (props.audioRef.current === null) return;
    props.audioRef.current.currentTime = Math.min(
      props.audioRef.current.duration,
      props.audioRef.current.currentTime + 15,
    );
  };
  return (
    <IconButton onPress={handlePress}>
      <FastForwardIcon className="text-[35px]" />
    </IconButton>
  );
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
