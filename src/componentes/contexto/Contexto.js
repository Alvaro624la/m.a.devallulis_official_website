import React, { useState } from 'react'

export const ContextoMADV = React.createContext();

function Contexto(props) {
    
    const [MADV, setMADV] = useState({
        telefono: '1231212321',
        email: 'fee@dsaf.com',
        facebook: 'ddf',
        instagram: 'cxvxvc',
        spotify: 'bngnj',
        youtube: 'llk',
        itunes: 'yiuiy',
        soundcloud: 'dsf'
    });

    return (
        <>
        <Contexto.Provider value={{MADV, setMADV}}>
            {props.children}
        </Contexto.Provider>
        </>
    )
}

export default Contexto