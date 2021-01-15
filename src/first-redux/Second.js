import React, { PureComponent } from 'react'
import store from '../store'
import { subAction } from '../store/actions'

export default class Second extends PureComponent {
  constructor(){
    super();
    this.state = {
      counter:store.getState().counter
    }
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        counter:store.getState().counter
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        Second
        <div>
          当前计数：{this.state.counter}
        </div>
        <button onClick = {e=>this.subCounter(1)}>-1</button>
      </div>
    )
  }
  subCounter(num){
    store.dispatch(subAction(num));
  }
}
