import { create, StateCreator } from "zustand";
import { Hero, SearchItemsForm } from "../types"
import { heros } from "../heros/data/heros";

export type HerosStoreState = {  // Estado del store para los heros
    heros: Hero[];
    filteredHeros: Hero[];
    publisherFilter: Hero['publisher'];
    selectedItem: Hero | null;
    searchFilteredItems: Hero[];
    setPublisherFilter: (publisher: "DC Comics" | "Marvel Comics") => void;
    getFilteredHeros: () => void;
    setHeroById: (id: Hero['id'] | undefined) => void;
    searchItems: (searchItemsForm: SearchItemsForm) => void;
    resetSearch: () => void;
}

export const CreateHerosStore: StateCreator<HerosStoreState> = (set) => ({ // creación del store
    heros: heros, // Se carga la lista de Heros
    publisherFilter: 'Marvel Comics', // Filtro inicial
    filteredHeros: [],
    selectedItem: null,
    searchFilteredItems: [],

    setPublisherFilter: (publisher: Hero['publisher']) => {
        set({publisherFilter: publisher}); // Cambiar el filtro del publisher
        set((state) => ({
            filteredHeros: state.heros.filter((hero) => hero.publisher===publisher)
        }));
    },

    getFilteredHeros: () => {
        set((state) => ({
            filteredHeros: state.heros.filter((hero) => hero.publisher===state.publisherFilter)
        }))
    },

    
    setHeroById: (id) => {
        try {
            const selectedItem = heros.find((elem) => elem.id===id);
            if(!selectedItem){
                throw new Error(`Hero with ID ${id} not found`);
            }
            set(({
                selectedItem
            }))
        } catch (error) {
            console.error("Error setting hero by ID:", error);
            set({
                selectedItem: null
            })
        }
    },

    searchItems: ({hero}: SearchItemsForm) => {
        try {
            hero = hero.toLocaleLowerCase().trim();
            if(hero.length===0){
                set({searchFilteredItems: []})
                return;
            }
            const searchFilteredItems = heros.filter((elem) =>
                     elem.superhero.toLocaleLowerCase().includes(hero));
            set({
                searchFilteredItems
            })
        } catch (error) {
            console.error("Error filtering heros:", error);
        }
    },

    resetSearch: () => {
        set({searchFilteredItems: []});
    }
})