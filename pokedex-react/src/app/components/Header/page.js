'use client';
import styled from 'styled-components';
import Logo from '../../../../public/pokemon-logo-8.png';
import Image from 'next/image';
import Search from '../Search/input';

const Container = styled('div')`
    display: flex;
    background-color: #DC0A2D;
    height: 100px;
    width: 100%;
`

const PokemonLogo = styled(Image)`
    margin: 0 25px;
`

const InnerHeader = styled('div')`
    display: flex;
    align-items: center;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
`


export const Header = () => {
    return (
        <Container>
            <InnerHeader>
                <PokemonLogo src={Logo} width="200" alt="logo do site" />
                <Search />
            </InnerHeader>
        </Container>
    )
}

export default Header;