import { create } from "zustand";


const useGuesticStore = create((set) => ({
    mobileMenuOpen: false,
    toggleMobileMenuOpen: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));

export default useGuesticStore;