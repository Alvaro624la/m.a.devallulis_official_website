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
        youtube: 'https://www.youtube.com/@miguelangeldevallulis4374',
        spotify: 'https://open.spotify.com/album/64mrCOTOH47epKfpJqxrsj?si=rQsiUf0-SqSyA2J7Qq5UTA',
        appleMusic: 'https://music.apple.com/es/album/vallulis/1667063207?l=en',
        amazonMusic: 'https://music.amazon.es/albums/B0BSRNT3CN?marketplaceId=A1RKKUPIHCS9HS&musicTerritory=ES&ref=dm_sh_5B9qP8UDqoVzGBjnT7Y4VUCrX',
        deezer: 'https://deezer.page.link/pBTWy8x1ARLnMXVk9',
        tidal: 'https://tidal.com/browse/album/272752688'
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