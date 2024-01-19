import React from 'react'
import { connect } from 'react-redux'
import { incrementoCounter2, decrementoCounter2 } from '../actions'

const Counter2 = (props) => {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <div>
      <h1>Counter 2: {props.counter2} </h1>
      <button onClick={props.incrementoCounter2}>incremento contador 2</button>
      <button onClick={props.decrementoCounter2}>decremento contador 2</button>
    </div>
  )
}

const mapeadoDeEstado = (state) => {
  return {
    counter2: state.counter2,
    misEstudiantes: state.estudiantes
  }
}

export default connect(mapeadoDeEstado, { incrementoCounter2, decrementoCounter2 })(Counter2)