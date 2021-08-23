import styled from "styled-components"
import { InputProps } from "../../Types/Interfaces"
import { animated, useSpring } from 'react-spring';


const Inputs = styled(animated.input)`
    background: none;
    color: ${props => props.theme.colors.color};

    
    border: none;
    width: 300px;

    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    
`

const DivContainer = styled(animated.div)`

    border-bottom: 2px solid ${props => props.theme.colors.background};

`

export function SearchCity(props: InputProps) {
    
    const comeDown = useSpring({
        to: { y: 0},
        from: { y: -50},
    })


    return (
        <DivContainer
            style={comeDown}
        >
            <Inputs {...props} />
            <span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="icon svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
            </span>
        </DivContainer>
    )
}