import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return{
        ...state,
        // spread operator
        myFavorites: [...state.myFavorites, payload],

        // concat
        // myFavorites: state.myFavorites.concat(payload),

        // push
        // myFavorites: state.myFavorites.push(payload),
      }
    case REMOVE_FAV:

      return{
        ...state,
        myFavorites: state.myFavorites.filter((item) => item.id !== payload),
      }     
    default:
      return state;
  }
};

export default reducer;