import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    // State del provider
    const [idreceta, setIdreceta] = useState(null);
    const [receta, setReceta] = useState({});

    // Una vez escogida una receta, llamar a la API
    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await axios.get(url);

            setReceta(resultado.data.drinks[0]);
        }

        obtenerReceta();
    }, [idreceta]);


    return (
        <ModalContext.Provider value={ { setIdreceta } }>
            {props.children }
        </ModalContext.Provider>
    )
}

export default ModalProvider
