import MockImage from '../../../../public/pokemon.svg'
import Image from 'next/image';
import Chip from '../Chip/page';
import { getPokemonInfo } from '@/app/api/pokemonInfo';
import { Container, ChipContainer } from './styles';


const Card = async ({ name }) => {
    const data = await getPokemonInfo(name)
    return (
        <>
        {data.length > 0 && data.map(({ number, types, sprite}) => (
            <Container>
            <p>{number}</p>
            <Image src={sprite} alt="imagem de um pokemon" width="140" height="140" />
            <ChipContainer>
               {types.map((type) => (
                <Chip type={type} />
               ))}  
            </ChipContainer>  
            <span />
            <h6>{name}</h6>
        </Container>
        ))}
        </>
    )
}

export default Card;