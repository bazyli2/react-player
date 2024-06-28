import { RefObject } from "react";
import { FastForwardIcon } from "./FastForwardIcon";
import { IconButton } from "@/components/IconButton";

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
