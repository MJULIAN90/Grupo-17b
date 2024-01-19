import { INCREMENT, DECREMENT, INCREMENTO_COUNTER2, DECREMENTO_COUNTER2 } from '../actions';

const initialState = {
  count: 0,
  counter2: 10,
  estudiantes: [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20
    },
    {
      id: 2,
      nombre: 'Pedro',
      apellido: 'Gomez',
      edad: 22
    },
    {
      id: 3,
      nombre: 'Maria',
      apellido: 'Gonzalez',
      edad: 21
    },
    {
      id: 4,
      nombre: 'Carlos',
      apellido: 'Rodriguez',
      edad: 25
    },
    {
      id: 5,
      nombre: 'Ana',
      apellido: 'Gutierrez',
      edad: 23
    }
  
  ]
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // completa para este caso
    return {
      ...state,
      count: state.count + 1
    }
    case DECREMENT:
    // Fill para este otro
    return {
      ...state,
      count: state.count - 1
    }
    case INCREMENTO_COUNTER2:
    return {
      ...state,
      counter2: state.counter2 + 10
    }
    case DECREMENTO_COUNTER2: {
      return {
        ...state,
        counter2: state.counter2 - 10
      }
    }
    default:
      return state;
  }
};