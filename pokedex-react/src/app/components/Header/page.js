'use client'
import styled from "styled-components"
import Logo from '../../../../public/pokemon-logo-8.png'
import Image from "next/image"
import { Search } from "../Search/input"

const Container = styled.div`
  display: flex;
  background-color: #dc0a2d;
  width: 100%;
  height: 100px;
`

const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;


  img {

  }
`

const PokemonLogo = styled(Image)`
  margin: 0 25px;
`

export default function Header () {
  return (
    <Container>
      <InnerHeader>
        <PokemonLogo src={Logo} alt="Logo" width={200} />
        <Search />
      </InnerHeader>
    </Container>
  )
}