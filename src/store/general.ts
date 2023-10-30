import { create } from 'zustand';

interface Modes {
    isMobile: boolean;
}

interface SetModes {
    setIsMobile: (newMode: boolean) => void;
}

const useGeneral = create<Modes & SetModes>((set) => ({
    isMobile: false,
    setIsMobile: (newMode) => set((state) => ({ ...state, isMobile: newMode }))
}));

export default useGeneral;
