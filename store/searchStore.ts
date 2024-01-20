import { create } from "zustand";

type SearchState = {
  focused: boolean;
};

type SearchAction = {
  toggleFocused: () => void;
};

export const useSearchStore = create<SearchState & SearchAction>((set) => ({
  focused: false,
  toggleFocused: () => set((state) => ({ focused: !state.focused })),
}));
