import React, { PureComponent } from 'react'
import { thirdAction } from '../store/actions'
import { connect } from '../utils/connect'

class Fifth extends PureComponent {
  render() {
    return (
      <div>
        Fifth
        {/* <h2>{this.props.state.connectState.counter}</h2> */}
        <h2>{this.props.counter}</h2>
        <button onClick={()=>{this.props.changeNum(1)}}>changeFifth</button>
      </div>
    )
  }
}

function propsState(state){
  return {
    counter:state.counter
  }
}

function propsDispatch(dispatch){
  return {
    changeNum(num){
      dispatch(thirdAction(num))
    }
  }
}

export default connect(propsState,propsDispatch)(Fifth)
