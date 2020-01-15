import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

const name='pepe';

//React Component child
function Hola () {
  return <h1>Hola {name.toUpperCase()}</h1>
}

//React Component child
function HolaProps (props) {
  //No se puede cambiar props.name porque React impide cambiar las propiedades recibidas en una funcion
  const nombreApellido = props.name + ' garcia';
  return <h1>Hola {nombreApellido}</h1>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <>
      <Hola/>
      <HolaProps name='pepita'/>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
