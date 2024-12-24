import { create } from "zustand";

type NewManpowertate = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewManpower = create<NewManpowertate>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
