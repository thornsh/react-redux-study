import { PureComponent } from "react";
// import store from "../store";
import { StoreContext } from "./context";

export function connect(propsState,propsDispatch){
  return function changeHOC(Hoc){
    class EnhanceComponent extends PureComponent {
      constructor(props,context){
        super(props,context);
        this.state = {
          connectState : propsState(context.getState())
        }
      }
      componentDidMount(){
        this.context.subscribe(()=>{
          this.setState({
            connectState:propsState(this.context.getState())
          })
        })
      }

      render(){
        return (
          <Hoc state={this.state}
               {...propsState(this.context.getState())}
               {...propsDispatch(this.context.dispatch)}
          />
        )
      }
    }
    EnhanceComponent.contextType = StoreContext;

    return EnhanceComponent;
  }
}