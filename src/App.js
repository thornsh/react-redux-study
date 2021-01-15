import React, { PureComponent } from 'react'
import First from './first-redux/First'
import Second from './first-redux/Second'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        this is App
        <First/>
        <hr/>
        <Second/>
      </div>
    )
  }
}
