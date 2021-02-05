import React, { PureComponent } from 'react'
import store from '../store';
import { thirdAction } from '../store/actions';

export default class Third extends PureComponent {
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
        <h2>Third</h2>
        <div>{this.state.counter}</div>
        <button onClick={()=>this.changeNum(2)}>+num</button>
      </div>
    )
  }
  changeNum(num){
    store.dispatch(thirdAction(num));
  }
}
