import { create } from "zustand";

interface CounterStore {
    count: number;
    increment: () => void;
    decrement: () => void;
  }

const counterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
}));

export const useCounterStore = counterStore;
