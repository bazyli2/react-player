import { create } from "zustand";

interface PlayerState {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const usePlayerStore = create<PlayerState>()((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set((state) => ({ ...state, isPlaying })),
}));
