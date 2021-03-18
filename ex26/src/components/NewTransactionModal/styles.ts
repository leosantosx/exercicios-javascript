import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background-color: var(--input-background);
        border: 1px solid var(--border-color);
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        background-color: var(--green);
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        color: var(--shape);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
`

type RadioBoxProps = {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    'red': transparentize(0.9, '#e52e4d'),
    'green': transparentize(0.9, '#33cc95'),
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid var(--border-color);
    border-radius: 0.25rem;

    background-color: ${(props) => 
        props.isActive? colors[props.activeColor]: 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;

    &:hover{
        border-color: ${ darken(0.1, '#d7d7d7') };
    }

    img{
        height: 20px;
        width: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`