'use client'
import Chip from "../Chip/page"
import { getPokemonInfo } from "@/app/api/pokemonInfo"
import { ChipContainer, Container } from "./styles"
import MockImage from '../../../../public/pokemon.svg'
import { useCallback, useEffect, useState } from "react"
import { useQuery } from "react-query"

const fetchDados = async (url) => {
  const response = await getPokemonInfo(url)
  return response
}

const Card = ({ propsCard }) => {
  const { name, url } = propsCard
  const { data } = useQuery({
    queryKey: ['infosPokes', url],
    queryFn: () => fetchDados(url)
  })
  const { sprites, id, types } = data || []
  const { other, front_default: defaultImage } = sprites || []
  const { 'dream_world': typeImage } = other || []
  const { front_default: pokemonImage } = typeImage || []
  return (
    <>
      {data ?
        <Container>
          <p>#{id}</p>
          <img src={pokemonImage} alt={MockImage} width={140} height={150} />
          <ChipContainer>
            {types.map((type) => (
              <Chip type={type} />
            ))}
          </ChipContainer>
          <span></span>
          <h6>{[name[0].toUpperCase(), ...name.substring(1)]}</h6>
        </Container>
        : null}
    </>
  )
}

export default Card