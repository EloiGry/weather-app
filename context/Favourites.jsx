import { createContext, useEffect, useState} from "react";

const FavouriteContext = createContext({})

const FavouriteContextProvider = ({children}) => {

    const [favourites, setFavourites] = useState(() => typeof window !== "undefined" && JSON.parse(localStorage.getItem('favourites')) || [])

    useEffect(() => {
            localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const value = {
        favourites,
        setFavourites,
    }

    return (
        <FavouriteContext.Provider value={value}>
            {children}
        </FavouriteContext.Provider>
    )
}

export {
    FavouriteContext,
    FavouriteContextProvider
}