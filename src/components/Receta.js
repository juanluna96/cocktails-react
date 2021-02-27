import React from 'react'

const Receta = ({ receta }) => {
    return (
        <div className="mb-3 col-md-4">
            <div className="card">
                <h5 className="text-white card-header rounded-top bg-primary">{ receta.strDrink }</h5>
                <img className="card-img-top" src={ receta.strDrinkThumb } alt={ `Imagen de ${receta.strDrink}` } />
                <div className="card-body bg-primary">
                    <button className="btn btn-light btn-block" type="button">Ver receta</button>
                </div>
            </div>
        </div>
    )
}

export default Receta
