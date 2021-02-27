import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas } = useContext(RecetasContext);

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    // Funcion para leer los contenidos
    const obtenerDatosReceteas = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    };

    const { nombre, categoria } = busqueda;

    return (
        <form method="post" className="col-12" onSubmit={ buscarRecetas(busqueda) }>
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>

            <div className="mt-3 row">
                <div className="col-md-4">
                    <input className="form-control" type="text" name="nombre" value={ nombre } placeholder="Buscar por ingrediente" onChange={ obtenerDatosReceteas } />
                </div>
                <div className="col-md-4">
                    <select id="categoria" className="custom-select" value={ categoria } name="categoria" onChange={ obtenerDatosReceteas }>
                        <option>-- Seleccione una categoría --</option>
                        { categorias.map((categoria) => {
                            if (categoria.strCategory === "") return null;
                            return (
                                <option key={ categoria.strCategory } value={ categoria.strCategory }>{ categoria.strCategory }</option>
                            )
                        }) }
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
