import React, { useState } from 'react'

export const ContextoMADV = React.createContext();

const Contexto = (props) => {
    
    const [MADV] = useState({
        shopVallulis: 'https://shopvallulis.es',
        shopVallulisVallulisCD: 'https://shopvallulis.es/index.php?id_product=20&rewrite=vallulis-cd-album&controller=product',
        telefono: '628594461',
        email: 'v@miguelangeldevallulis.com',
        facebook: 'https://www.facebook.com/miguelangel.devallulis',
        instagram: 'https://www.instagram.com/miguelangeldevallulis/',
        spotify: 'https://www.instagram.com/miguelangeldevallulis/',
        youtube: 'https://www.youtube.com/@miguelangeldevallulis4374',
        itunes: 'https://www.instagram.com/miguelangeldevallulis/',
        soundcloud: 'https://www.instagram.com/miguelangeldevallulis/',
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