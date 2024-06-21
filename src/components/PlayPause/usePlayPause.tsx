import { usePlayerStore } from "@/store";
import { RefObject, useEffect } from "react";

export function usePlayPause(props: Props) {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  useEffect(() => {
    if (props.audioRef.current === null) return;
    if (isPlaying) {
      props.audioRef.current.play();
    } else {
      props.audioRef.current.pause();
    }
  }, [isPlaying]);
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
