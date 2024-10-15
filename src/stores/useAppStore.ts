import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CreateHerosStore, HerosStoreState } from "./createHerosStore";


export const useAppStore = create<HerosStoreState>()(devtools((...a) => ({
    ...CreateHerosStore(...a)
})))