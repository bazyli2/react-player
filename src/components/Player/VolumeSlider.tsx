import { ComponentProps, RefObject, useEffect, useState } from "react";
import { Slider } from "../Slider";

export function VolumeSlider(props: Props) {
  const { audioRef, ...rest } = props;
  const [volume, setVolume] = useState(1);
  useEffect(() => {
    if (audioRef.current === null) return;
    audioRef.current.volume = volume;
  }, [volume]);
  return (
    <Slider
      {...rest}
      value={volume}
      onChange={setVolume}
      maxValue={1}
      step={0.001}
    />
  );
}

interface Props extends ComponentProps<typeof Slider> {
  audioRef: RefObject<HTMLAudioElement | null>;
}
