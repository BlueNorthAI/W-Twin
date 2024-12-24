import { create } from "zustand";

type NewLocationPeakpickDetailsState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewLocationPeakpickDetails = create<NewLocationPeakpickDetailsState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
