import React from 'react'

const Formulario = () => {
    return (
        <form method="post" className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>

            <div className="row mt-3">
                <div className="col-md-4">
                    <input className="form-control" type="text" name="nombre" placeholder="Buscar por ingrediente" />
                </div>
                <div className="col-md-4">
                    <select id="categoria" className="custom-select" name="categoria">
                        <option>-- Seleccione una categoría --</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary btn-block" type="submit">Buscar bebidas</button>
                </div>
            </div>
        </form>
    )
}

export default Formulario
