export function addAction(num){
  return{
    type:"ADD_NUM",
    num
  }
}

export const subAction = num =>({
  type:"SUB_NUM",
  num
})

export const thirdAction = (num)=>({
  type:"THIRD_NUM",
  num
})