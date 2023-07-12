'use client'
import { createContext, useContext, useState } from "react";
import { fetchData } from "../api/pokemonsList";

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const [pokes, setPokemons] = useState([])

  const getPoke = async () => {
    setPokemons(await fetchData(20, 0))
  }

  return (
    <PokemonContext.Provider
      value={{
        pokes,
        getPoke
    }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext

export const usePokemon = () => useContext(PokemonContext)