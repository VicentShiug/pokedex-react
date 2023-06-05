'use client'

import styled from 'styled-components';

const Container = styled('div')`
    background-color: ${props => `${props.theme.type[props.type]}`};
    display: inline-block;
    border-radius: 10px;
    padding: 2px 8px;
    margin: 5px;

    p {
        font-size: 10px;
        font-weight: bold;
        line-height: 16px;
    }
`

const Chip = ({ type }) => {
    return (
        <Container type={type.toLowerCase()}>
            <p>{type}</p>
        </Container>
    )
}

export default Chip;