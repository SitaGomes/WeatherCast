import { useContext } from 'react';
import {BgImageContext} from "../Context/BgImageContext"

export function useBgImageContext() {
    const value = useContext(BgImageContext)

    return value
}