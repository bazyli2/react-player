"use client";
import { Slider } from "../Slider";
import Image from "next/image";
import image from "./chilling-sunday.jpg";
import { IconButton } from "../IconButton";
import { VolumeDown } from "../icons/VolumeDown";
import { VolumeUp } from "../icons/VolumeUp";
import { useRef } from "react";
import { TimeSlider } from "./TimeSlider";
import { FastForward } from "./FastForward";
import { CurrentTime } from "./CurrentTime";
import { RemainingTime } from "./RemainingTime";
import { FastRewind } from "./FastRewind";
import { PlayPause } from "./PlayPause";

export function Player() {
  const url =
    "https://dn720001.ca.archive.org/0/items/rammstein_flac_201905/Rammstein%20-%20Wollt%20ihr%20das%20Bett%20in%20Flammen%20sehen.mp3";
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <>
      <div className="p-4 rounded-2xl bg-black/60 w-full">
        <div className="flex items-center gap-3">
          <Image
            priority
            alt="album cover"
            className="rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/en/1/1f/Rammstein_Herzeleid_cover.jpg"
            height={100}
            width={100}
          />
          <div className="overflow-hidden">
            <h2 className="text-xs tracking-wide leading-7 font-medium block">
              Rammstein
            </h2>
            <h3 className="text-base font-bold block leading-6 tracking-normal overflow-ellipsis overflow-hidden whitespace-nowrap">
              Wohlt ihr das Bett in Flammen sehen
            </h3>
            <h4 className="text-base tracking-tight overflow-ellipsis overflow-hidden whitespace-nowrap">
              Herzlied
            </h4>
          </div>
        </div>
        <TimeSlider audioRef={audioRef} />
        <div className="flex justify-between -mt-2">
          <CurrentTime audioRef={audioRef} />
          <RemainingTime audioRef={audioRef} />
        </div>
        <div className="flex justify-center items-center">
          <FastRewind audioRef={audioRef} />
          <PlayPause audioRef={audioRef} />
          <FastForward audioRef={audioRef} />
        </div>
        <div className="flex gap-4 items-center">
          <VolumeDown className="text-2xl" />
          <Slider className="flex-1" />
          <VolumeUp className="text-2xl" />
        </div>
      </div>
      <audio src={url} ref={audioRef} preload="metadata" />
    </>
  );
}
