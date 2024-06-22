import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store";
import {
  Label,
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";

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
    <AriaSlider<number>
      value={progress}
      maxValue={MAX_VALUE}
      onChange={handleChange}
      onChangeEnd={handleChangeEnd}
    >
      <div className="hidden">
        <Label className="flex-1">Opacity</Label>
        <SliderOutput />
      </div>
      <SliderTrack className="relative w-full h-7 pointer-events-none">
        {({ state }) => (
          <>
            {/* track */}
            <div className="absolute h-1 top-[50%] translate-y-[-50%] w-full rounded-full bg-white/30" />
            {/* fill */}
            <div
              className="absolute h-1 top-[50%] translate-y-[-50%] rounded-full bg-white"
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            />
            <SliderThumb className="p-2 pointer-events-auto cursor-pointer top-[50%]">
              <div className="h-2 w-2 rounded-full border border-solid border-purple-800/75 bg-white transition dragging:bg-purple-100 outline-none focus-visible:ring-2 ring-black" />
            </SliderThumb>
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
