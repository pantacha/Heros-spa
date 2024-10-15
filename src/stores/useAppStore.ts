import { create } from "zustand";
import { CreateHerosStore, HerosStoreState } from "./CreateHerosStore";
import { devtools } from "zustand/middleware";


export const useAppStore = create<HerosStoreState>()(devtools((...a) => ({
    ...CreateHerosStore(...a)
})))