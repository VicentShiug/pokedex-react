import React from "react"
import { fetchData } from "../api/pokemonsList"
import Card from "../components/Card/page"
import { Pagination } from "../components/Pagination/Pagination"
import { Container } from "../styles"
import { PokemonStore } from "../store/pokemonStore"

const PokemonsPage = async () => {
  const { results } = PokemonStore.getState().state
  const { data } = results
  const {results: pokemons} = data
  // const {data} = props
  // const {results, count} = data
  return (
    <Container>
      {pokemons.length > 0
        && pokemons.map(({ name, url }) => (
          <Card propsCard={{name, url}} />
        ))}
      
    </Container>
  )
}

export default PokemonsPage