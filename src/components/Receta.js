import React from 'react'

const Receta = ({ receta }) => {
    return (
        <div className="mb-3 col-md-4">
            <div className="card">
                <img className="card-img-top" src="" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{ receta.strDrink }</h5>
                    <p className="card-text">Content</p>
                </div>
            </div>
        </div>
    )
}

export default Receta
