import { create } from "zustand";

type NewInventorydetailState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewInventorydetail = create<NewInventorydetailState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
