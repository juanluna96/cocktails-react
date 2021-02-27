import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({ receta }) => {

    // Configuracion del modal de material ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Extraer los valores del context
    const { informacion_receta, setIdreceta, setReceta } = useContext(ModalContext);

    // Muestra y formatea los ingredientes
    const mostrarIngredientes = (informacion) => {
        let ingredientes = [];

        for (let i = 0; i < 16; i++) {
            if (informacion[`strIngredient${i}`]) {
                ingredientes.push(
                    <li className="my-1 border rounded border-secondary list-group-item d-flex justify-content-between align-items-center">
                        <p className="my-0">
                            <span className="font-weight-bold"> { i }.</span> { informacion[`strIngredient${i}`] }
                        </p>
                        <span class="badge badge-primary badge-pill">{ informacion[`strMeasure${i}`] }</span>
                    </li>
                )
            }
        }

        return ingredientes;
    }

    return (
        <div className="mb-3 col-md-4">
            <div className="card">
                <h5 className="text-white card-header rounded-top bg-primary">{ receta.strDrink }</h5>
                <img className="card-img-top" src={ receta.strDrinkThumb } alt={ `Imagen de ${receta.strDrink}` } />
                <div className="card-body bg-primary">
                    <button className="btn btn-light btn-block" type="button" onClick={ (e) => { setIdreceta(receta.idDrink); handleOpen(); } }>Ver receta</button>
                    <Modal open={ open } onClose={ () => { setIdreceta(null); handleClose(); setReceta({}); } }>
                        <div style={ modalStyle } className={ classes.paper }>
                            <h2 className="text-center">{ informacion_receta.strDrink }</h2>
                            <h4 className="mt-4">Instrucciones</h4>
                            <p>
                                { informacion_receta.strInstructions }
                            </p>
                            <img className="img-fluid" src={ informacion_receta.strDrinkThumb } alt={ `Imagen de ${informacion_receta.strDrink}` } />

                            <h4 class="my-3 text-center">Ingredientes cantidades</h4>
                            <ul className="list-group">
                                { mostrarIngredientes(informacion_receta) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div >
    )
}

export default Receta
