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
  let nombreApellido;
  if(props.name){
    nombreApellido = props.name + ' garcia';
  }else{
    nombreApellido = 'noname';
  }

  //Funcionan los 3 returns
  //return <h1>Hola {nombreApellido}</h1>
  //return <h1>Hola {(props.name) ? props.name + ' garcia' : 'noname'}</h1>;
  return <h3>Hola {props.name || 'noname'}</h3>
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
      <HolaProps/>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
