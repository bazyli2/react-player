"use client";
import { Slider } from "./Slider";
import Image from "next/image";
import image from "./chilling-sunday.jpg";
import { IconButton } from "./IconButton";
import { VolumeDown } from "./icons/VolumeDown";
import { VolumeUp } from "./icons/VolumeUp";
import { useRef } from "react";
import { TimeSlider } from "./TimeSlider";
import { PlayPause } from "./PlayPause/PlayPause";
import { FastRewind } from "./FastRewind";
import { FastForward } from "./FastForward";

export function Player() {
  const url =
    "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/11/file_example_MP3_5MG.mp3";
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <>
      <div className="p-4 rounded-2xl bg-black/60 w-full">
        <div className="flex items-center gap-3">
          <Image
            priority
            alt="album cover"
            className="rounded-lg"
            src={image.src}
            height={100}
            width={100}
          />
          <div className="overflow-hidden">
            <h2 className="text-xs tracking-wide leading-7 font-medium block">
              Jun Pulse
            </h2>
            <h3 className="text-base font-bold block leading-6 tracking-normal overflow-ellipsis overflow-hidden whitespace-nowrap">
              คนเก่าเขาทำไว้ดี (Can&apos;t win)
            </h3>
            <h4 className="text-base tracking-tight overflow-ellipsis overflow-hidden whitespace-nowrap">
              Chilling Sunday — คนเก่าเขาทำไว้ดี
            </h4>
          </div>
        </div>
        <TimeSlider audioRef={audioRef} />
        <div className="flex justify-between -mt-2">
          <span className="text-xs leading-5 tracking-wide text-slate-500">
            0:00
          </span>
          <span className="text-xs leading-5 tracking-wide text-slate-500">
            -3:20
          </span>
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
      <audio src={url} ref={audioRef} />
    </>
  );
}
