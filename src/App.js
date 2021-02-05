import React, { PureComponent } from 'react'
import Fifth from './first-redux/Fifth'
import First from './first-redux/First'
import Forth from './first-redux/Forth'
import Second from './first-redux/Second'
import Third from './first-redux/Third'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        this is App
        <First/>
        <hr/>
        <Second/>
        <hr/>
        <Third/>
        <hr/>
        <Forth/>
        <hr/>
        <Fifth/>
      </div>
    )
  }
}
