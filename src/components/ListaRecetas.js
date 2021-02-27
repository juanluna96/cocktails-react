import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext'
import Receta from './Receta';

const ListaRecetas = () => {
    // Extraer las recetas
    const { recetas } = useContext(RecetasContext);

    return (
        <div className="mt-5 row">
            {recetas.map((receta) => (
                <Receta key={ receta.idDrink } receta={ receta }></Receta>
            )) }
        </div>
    )
}

export default ListaRecetas
