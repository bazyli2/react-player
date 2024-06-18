import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { Slider } from "./Slider";
import { usePlayerStore } from "@/store";

export function TimeSlider(props: Props) {
  const [progress, setProgress] = useState(0);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const animationRef = useRef(0);
  function updateTimeSlider() {
    if (props.audioRef.current === null) return;
    setProgress(
      (props.audioRef.current.currentTime / props.audioRef.current.duration) *
        100000,
    );
    animationRef.current = requestAnimationFrame(updateTimeSlider);
  }
  useLayoutEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(updateTimeSlider);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);
  return <Slider value={progress} maxValue={100000} />;
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
