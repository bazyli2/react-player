import { RefObject, useEffect, useState } from "react";

export function CurrentTime(props: Props) {
  const [currentTime, setCurrentTime] = useState("00:00");
  useEffect(() => {
    function handleTimeUpdate() {
      if (props.audioRef.current === null) return;
      const currentTime = Math.floor(props.audioRef.current.currentTime);
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime - minutes * 60;
      setCurrentTime(
        minutes.toString().padStart(2, "0") +
          ":" +
          seconds.toString().padStart(2, "0"),
      );
    }
    props.audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    () => {
      props.audioRef.current?.removeEventListener(
        "timeupdate",
        handleTimeUpdate,
      );
    };
  }, [props.audioRef]);
  return (
    <span className="text-xs leading-5 tracking-wide text-slate-500 tabular-nums">
      {currentTime}
    </span>
  );
}

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}
