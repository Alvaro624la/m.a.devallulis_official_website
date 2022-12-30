import React, { useState } from 'react'

export const ContextoMADV = React.createContext();

const Contexto = (props) => {
    
    const [MADV, setMADV] = useState({
        telefono: '628594461',
        email: 'xxxxxx@vallulis.com',
        facebook: 'https://www.facebook.com/miguelangel.devallulis',
        instagram: 'xxxxxx',
        spotify: 'xxxxxx',
        youtube: 'https://www.youtube.com/@miguelangeldevallulis4374',
        itunes: 'xxxxxx',
        soundcloud: 'xxxxxx'
    });

    return (
        <>
        <ContextoMADV.Provider value={{MADV}}>
            {props.children}
        </ContextoMADV.Provider>
        </>
    )
}

export default Contexto