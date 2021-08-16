import { useEffect } from "react"
import { createContext, useState } from "react"
import { createApi } from "unsplash-js"
import { BgImageContextProps, ChildrenProps} from "../Types/Interfaces"
import { useWeatherContext } from "../Hooks/useWeatherContext"

export const BgImageContext = createContext({} as BgImageContextProps)


export function BackgroundImage ({children}: ChildrenProps) {
   const [bgPhoto, setBgPhoto] = useState("")

   const {extraWeatherContent} = useWeatherContext()

   const unsplashApi = createApi({
        accessKey: "_zifyp1L0D-6RDjVNzLL7RylDulhGpO6CWbEapX64CE" 
    })

    useEffect(() => {
          
        const unsplashRequest = async () => {
            
            try{
                const resp = await unsplashApi.search.getPhotos({
                query: `${extraWeatherContent.main_weather}`,
                perPage: 1
                })
    
                if (resp.response?.results[0].urls.raw === undefined) return
    
                setBgPhoto(resp.response?.results[0].urls.raw)
                
            } catch (err) {
                console.log(err)
            }
        }

        unsplashRequest()
        
    })

    return (
        <BgImageContext.Provider value={{bgPhoto}}>
            {children}
        </BgImageContext.Provider>
    )

}