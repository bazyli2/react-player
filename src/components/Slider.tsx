"use client";

import {
  Label,
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";

export function Slider() {
  return (
    <AriaSlider defaultValue={30}>
      <div className="hidden">
        <Label className="flex-1">Opacity</Label>
        <SliderOutput />
      </div>
      <SliderTrack className="relative w-full h-7">
        {({ state }) => (
          <>
            {/* track */}
            <div className="absolute h-1 top-[50%] translate-y-[-50%] w-full rounded-full bg-white/30" />
            {/* fill */}
            <div
              className="absolute h-1 top-[50%] translate-y-[-50%] rounded-full bg-white"
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            />
            <SliderThumb className="h-2 w-2 top-[50%] rounded-full cursor-pointer border border-solid border-purple-800/75 bg-white transition dragging:bg-purple-100 outline-none focus-visible:ring-2 ring-black" />
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}
