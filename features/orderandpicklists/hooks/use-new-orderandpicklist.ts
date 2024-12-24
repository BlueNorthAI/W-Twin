import { create } from "zustand";

type NewOrderandpicklistState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewOrderandpicklist = create<NewOrderandpicklistState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
