import { create } from "zustand";
import { persist } from "zustand/middleware";

// Zustand store with persistence
export const useDealStore = create(
  persist(
    (set) => ({
      selectedDeal: null,
      setSelectedDeal: (deal) => set({ selectedDeal: deal }),
      clearDeal: () => set({ selectedDeal: null }),

      // ✅ new state for fetched deal details
      dealDataDetails: null,
      setDealDataDetails: (details) => set({ dealDetails: details }),
      clearDealDataDetails: () => set({ dealDetails: null }),
    }),
    {
      name: "deal-storage", // name for localStorage key
      getStorage: () => localStorage, // use localStorage
    }
  )
);
