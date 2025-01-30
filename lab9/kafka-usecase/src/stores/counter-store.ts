import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCounterStore = create(
  persist<{ count: number; increment: () => void; decrement: () => void }>(
    (set, get) => ({
      count: 0,
      increment: () => set((state: any) => ({ count: get().count + 1 })),
      decrement: () => set((state: any) => ({ count: state.count - 1 })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useCounterStore;
