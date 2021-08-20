import styled from "styled-components"
import { InputProps } from "../../Types/Interfaces"

const Inputs = styled.input`
    background: none;
    color: white;

    border: none;
    border-bottom: 2px solid white;

    width: 300px;

    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
`

export function SearchCity(props: InputProps) {

    return <Inputs {...props} />
}