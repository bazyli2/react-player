import { ComponentProps, RefObject, useEffect, useState } from "react";
import {
  Label,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  Slider,
} from "react-aria-components";

export function VolumeSlider(props: Props) {
  const { audioRef, ...rest } = props;
  const [volume, setVolume] = useState(1);
  useEffect(() => {
    if (audioRef.current === null) return;
    audioRef.current.volume = volume;
  }, [volume]);
  return (
    <Slider<number>
      value={volume}
      onChange={setVolume}
      maxValue={1}
      step={0.001}
      {...rest}
    >
      <div className="text-white hidden">
        <Label className="flex-1">Volume</Label>
        <SliderOutput />
      </div>
      <SliderTrack className="relative w-full h-6 cursor-pointer">
        {({ state }) => (
          <>
            {/* track */}
            <div className="absolute h-1 top-[50%] translate-y-[-50%] w-full rounded-full bg-white/30" />
            {/* fill */}
            <div
              className="absolute h-1 top-[50%] translate-y-[-50%] rounded-full bg-white"
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            />
            <SliderThumb className="h-6 w-6 top-[50%] rounded-full bg-gray-800" />
          </>
        )}
      </SliderTrack>
    </Slider>
  );
}

interface Props extends ComponentProps<typeof Slider<number>> {
  audioRef: RefObject<HTMLAudioElement | null>;
}
