import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

export const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);

    const [busqueda, buscarRecetas] = useState({
        ingrediente: '',
        categoria: ''
    });

    const [consultar, setConsultar] = useState(false);

    const { ingrediente, categoria } = busqueda;

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
                const resultado = await axios.get(url);

                setRecetas(resultado.data.drinks);
            }


            obtenerRecetas();
        }
    }, [busqueda]);

    return (
        <RecetasContext.Provider value={ { buscarRecetas, setConsultar } }>
            {props.children }
        </RecetasContext.Provider>
    )
}

export default RecetasProvider