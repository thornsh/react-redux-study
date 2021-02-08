const defaultState = {
  counter:0
}

// export default function reducer(state = defaultState,action){
//   switch (action.type) {
//     case "ADD_NUM":
//       return{...state,counter:state.counter + action.num};
//     case "SUB_NUM":
//       return{...state,counter:state.counter - action.num};
//     case "THIRD_NUM":
//       return {...state,counter:state.counter + action.num*2};
//     default:
//       return state;
//   }
// }
function reducer(state,action){
  return {
    counter: counter(state, action)
  }
}

function counter(state, action){
  switch (action.type) {
    case "ADD_NUM":
      return state.counter + action.num
  
    default:
      break;
  }
}

let aaa = reducer(defaultState,{
  type:"ADD_NUM",
  num:1
})
console.log(aaa);

