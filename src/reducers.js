import {} from "./actions";

const initialState = {
}

export default function rootReducer( state= initialState, action ) {
  switch(action.type) {
      // case SET_ALL_USA:
      //     return {
      //         ...state,
      //         allUsa: action.allUsa
      //     }
      default:
          return state;
  }
}
