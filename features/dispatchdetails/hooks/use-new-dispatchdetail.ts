import { create } from "zustand";

type NewDispatchdetailState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewDispatchdetail = create<NewDispatchdetailState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
