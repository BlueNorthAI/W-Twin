import { create } from "zustand";

type NewReceiptdetailState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewReceiptdetail = create<NewReceiptdetailState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
