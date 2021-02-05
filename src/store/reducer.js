const defaultState = {
  counter:0
}

export default function reducer(state = defaultState,action){
  switch (action.type) {
    case "ADD_NUM":
      return{...state,counter:state.counter + action.num};
    case "SUB_NUM":
      return{...state,counter:state.counter - action.num};
    case "THIRD_NUM":
      return {...state,counter:state.counter + action.num*2};
    default:
      return state;
  }
}