import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('stores')
@observer
class App extends Component {
  render () {
    const {
      props: {
        stores: {
          appState
        }
      }
    } = this
    return (
      <>
        Current {appState.count}
        <button onClick={() => appState.plus()}>+</button>
      </>
    )
  }
}

export default App
