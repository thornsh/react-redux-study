import React, { PureComponent } from 'react'
import store from '../store';
import { addAction } from '../store/actions';

export default class First extends PureComponent {
  constructor(){
    super();
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        First
        <div>
          当前计数：{this.state.counter}
        </div>
        <button onClick = {e=>this.addCounter(1)}>+1</button>
      </div>
    )
  }
  addCounter(num){
    store.dispatch(addAction(num))
  }
}
