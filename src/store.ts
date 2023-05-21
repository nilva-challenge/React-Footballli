import { create } from "zustand";

export const useStore = create<{
  date: Date;
}>((set) => ({ date: new Date() }));
