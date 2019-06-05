import React, { Component } from 'react'

import './index.less'

class App extends Component {
  render () {
    return (
      <div className='site404'>
        <div className='sketch'>
          <div className='bee-sketch red' />
          <div className='bee-sketch blue' />
        </div>
        <h1>404 <small>Page Not Found</small></h1>
      </div>
    )
  }
}

export default App
