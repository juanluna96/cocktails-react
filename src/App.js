import React, { Fragment } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header></Header>

      <div className="container mt-5">
        <div className="row">
          <Formulario></Formulario>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
