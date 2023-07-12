import { create } from "zustand"
import { fetchData } from "../api/pokemonsList"

const PokemonStore = create((set) => ({
  state: {
    results: []
  },
  actions: {
    getPokemons: async () => {
      const data = await fetchData(20, 0)
      set((state) =>  ({
        state: {results: [data]}
      }))
    }
  }
}))

export {PokemonStore}