import React, { Fragment } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/ListaRecetas';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header></Header>
        <div className="container mt-5">
          <div className="row">
            <Formulario></Formulario>
          </div>
          <ListaRecetas></ListaRecetas>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
