import React, { PureComponent } from 'react'

const state = {
  counter:0
}

function changeState(state){
  return {
    counter:state.counter
  }
}

export default class Forth extends PureComponent {
  constructor(){
    super();
    this.state = {
      aaa:changeState(state)
    }
    console.log(this.state);
  }
  render() {
    return (
      <div>
        Forth
        <div>
          
        </div>
        
      </div>
    )
  }
}
