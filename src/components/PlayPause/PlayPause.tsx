import { usePlayerStore } from "@/store";
import { ToggleButton } from "react-aria-components";
import { usePlayPause } from "./usePlayPause";
import { RefObject } from "react";
import { PauseIcon } from "./PauseIcon";
import { PlayIcon } from "./PlayIcon";

export function PlayPause(props: Props) {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
  usePlayPause({ audioRef: props.audioRef });

  const toggleIsPlaying = (isPlaying: boolean) => {
    setIsPlaying(isPlaying);
  };

  return (
    <ToggleButton
      isSelected={isPlaying}
      onChange={toggleIsPlaying}
      className="text-[42px]"
    >
      {({ isSelected }) => (isSelected ? <PauseIcon /> : <PlayIcon />)}
    </ToggleButton>
  );
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
