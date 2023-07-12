import Chip from "../Chip/page"
import { getPokemonInfo } from "@/app/api/pokemonInfo"
import { ChipContainer, Container } from "./styles"
import MockImage from '../../../../public/pokemon.svg'

const Card = async ({ propsCard }) => {
  const { name, url } = propsCard
  const data = await getPokemonInfo(url)
  const { sprites, id, types } = data
  const { other, front_default: defaultImage } = sprites
  const { 'dream_world': typeImage } = other
  const { front_default: pokemonImage } = typeImage
  return (
    <>
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
    </>
  )
}

export default Card