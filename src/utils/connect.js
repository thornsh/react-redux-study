import { PureComponent } from "react";
import store from "../store";

export function connect(propsState,propsDispatch){
  return function changeHOC(Hoc){
    class EnhanceComponent extends PureComponent {
      constructor(){
        super();
        this.state = {
          connectState : propsState(store.getState())
        }
      }
      componentDidMount(){
        store.subscribe(()=>{
          this.setState({
            connectState:propsState(store.getState())
          })
        })
      }

      render(){
        return (
          <Hoc state={this.state}
               {...propsState(store.getState())}
               {...propsDispatch(store.dispatch)}
          />
        )
      }
    }
    return EnhanceComponent;
  }
}