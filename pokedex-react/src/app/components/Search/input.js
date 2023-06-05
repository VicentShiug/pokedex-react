'use client'

import styled from 'styled-components';
import SearchImage from '../../../../public/search.svg';
import Image from 'next/image';

const Container = styled('div')`
    position: relative;

    span {
        position: absolute;
        left: 15px;
        top: 5px;
    }

    input {
        background: white;
        border: 0;
        width: 500px;
        height: 32px;
        display: flex;
        align-items: center;
        padding: 8px 16px 8px 36px;
        border-radius: 16px;
        font-size: 12px;
        line-height: 16px;
        box-shadow: inset 0px 1px 3px 1px rgba(0,0,0,0.25);

        &:focus {
            outline: none;
        }
    }
`

export const Search = () => {
    return (
        <Container>
            <span>
                <Image src={SearchImage} alt="icone de busca" />
            </span>
            <input type="text" placeholder='Digite o número do pokemon que deseja buscar' />

        </Container>
    )
}

export default Search;