import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [
    T, //? What's inside the "state" Ex: string, boolean...
    Dispatch<SetStateAction<T>> //? type of "setState" 
]


//? "useLocalState<T>" accepts a type unknown
export function useLocalState<T>(key: string, initialState: T): Response<T> {
    //? The return of "useLocalState" is a type of "Response<T>"
    const [state, setState] = useState(() => {
        const StorageValue = localStorage.getItem(key)

        if (StorageValue) {
            //? Transforming the JSON to it's initial state
            return JSON.parse(StorageValue)
        }

        return initialState
    })
    
    useEffect(() => {
        //? Keeping the "state" in JSON, so it's changed easyly
        localStorage.setItem(key, JSON.stringify(state))

    }, [key, state])

    return [state, setState]
}