import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext'

const Receta = ({ receta }) => {

    // Extraer los valores del context
    const { setIdreceta } = useContext(ModalContext);

    return (
        <div className="mb-3 col-md-4">
            <div className="card">
                <h5 className="text-white card-header rounded-top bg-primary">{ receta.strDrink }</h5>
                <img className="card-img-top" src={ receta.strDrinkThumb } alt={ `Imagen de ${receta.strDrink}` } />
                <div className="card-body bg-primary">
                    <button className="btn btn-light btn-block" type="button" onClick={ (e) => setIdreceta(receta.idDrink) }>Ver receta</button>
                </div>
            </div>
        </div>
    )
}

export default Receta
