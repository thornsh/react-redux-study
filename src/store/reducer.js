const defaultState = {
  counter:0
}

export default function reducer(state = defaultState,action){
  switch (action.type) {
    case "ADD_NUM":
      return{...state,counter:state.counter + action.num}
    default:
      break;
  }
}