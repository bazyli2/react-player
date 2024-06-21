import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { Slider } from "./Slider";
import { usePlayerStore } from "@/store";

const MAX_VALUE = 100000;

export function TimeSlider(props: Props) {
  const [progress, setProgress] = useState(0);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const isChangingRef = useRef(false);
  const animationRef = useRef(0);

  function updateTimeSlider() {
    if (props.audioRef.current === null) return;
    if (isChangingRef.current) return;
    setProgress(
      (props.audioRef.current.currentTime / props.audioRef.current.duration) *
        MAX_VALUE,
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

  const handleChange = (value: number) => {
    setProgress(value);
    isChangingRef.current = true;
  };

  const handleChangeEnd = () => {
    isChangingRef.current = false;
    if (props.audioRef.current === null) return;
    props.audioRef.current.currentTime =
      (progress / MAX_VALUE) * props.audioRef.current.duration;
    animationRef.current = requestAnimationFrame(updateTimeSlider);
  };

  return (
    <Slider
      value={progress}
      maxValue={MAX_VALUE}
      onChange={handleChange}
      onChangeEnd={handleChangeEnd}
    />
  );
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
