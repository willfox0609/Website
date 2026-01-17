import { createContext, useEffect, useRef } from "react";
import music from "../music/home.mp3";

export const AudioContext = createContext<{}>({});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;

    const start = () => {
      audioRef.current?.play();
      window.removeEventListener("click", start);
      window.removeEventListener("keydown", start);
    };

    // Listen globally, even before provider mounts
    window.addEventListener("click", start);
    window.addEventListener("keydown", start);

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return <AudioContext.Provider value={{}}>{children}</AudioContext.Provider>;
}
