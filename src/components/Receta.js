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
    const { setIdreceta } = useContext(ModalContext);

    return (
        <div className="mb-3 col-md-4">
            <div className="card">
                <h5 className="text-white card-header rounded-top bg-primary">{ receta.strDrink }</h5>
                <img className="card-img-top" src={ receta.strDrinkThumb } alt={ `Imagen de ${receta.strDrink}` } />
                <div className="card-body bg-primary">
                    <button className="btn btn-light btn-block" type="button" onClick={ (e) => { setIdreceta(receta.idDrink); handleOpen(); } }>Ver receta</button>
                    <Modal open={ open } onClose={ () => { setIdreceta(null); handleClose(); } }>
                        <div style={ modalStyle } className={ classes.paper }>
                            <h1>Desde el modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div >
    )
}

export default Receta
