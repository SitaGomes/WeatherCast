import styled from "styled-components";
import { ChildrenProps } from "../../Types/Interfaces";

const H2 = styled.h2`
    font-size: 1.2em;
`

export function Tittle ({children}: ChildrenProps) {

    return(
        <H2>
            {children}
        </H2>
    )
}