'use client'
import { fetchData } from "@/app/api/pokemonsList"
import { useContext, useState } from "react"
import styled from "styled-components"
import { inject, observer } from 'mobx-react'
import PokemonContext, { usePokemon } from "@/app/context/pokemonContext"
import { PokemonStore } from "@/app/store/pokemonStore"

const maxItens = 9
const maxLeft = (maxItens - 1) / 2

const Container = styled.ul`
  margin: 10px;
  display: flex;
  list-style: none;
  gap: 10px;
`

const Button = styled.button`
  width:30px;
  height:30px;
`
export const Pagination = ({ limit, total, props }) => {
  const [offset, setOffset] = useState(0)
  const currentPage = offset ? (offset / limit) + 1 : 1
  const pages = Math.ceil(total / limit)
  const first = Math.max(currentPage - maxLeft, 1)


  const { pokes, getPoke } = usePokemon()




  return (
    <Container>
      {Array.from({ length: maxItens })
        .map((_, index) => (index + first))
        .map((page) => (
          <li>
            <Button
              onClick={async () => {
                setOffset((page - 1) * limit)
                getPoke()
                PokemonStore.setState({ state: { results: pokes ?? [] } })
              }}
            >
              {page}
            </Button>
          </li>
        ))
      }
    </Container>
  )
}