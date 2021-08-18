import styled from "styled-components"
import { InputProps } from "../../Types/Interfaces"

const Inputs = styled.input`
    color: white;

    border: none;
    background: none;
    padding: 5px;

    text-align: center;
    font-size: 1.4rem;

    width: 95%;

`

export function SearchCity(props: InputProps) {

    return <Inputs {...props} />
}