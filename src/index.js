import React from 'react'
import { render } from 'react-dom'
import AppRouter from './routes/Router'
import * as serviceWorker from './serviceWorker'

import './index.less'

import { Provider } from 'mobx-react'
import { stores } from './stores'

render(
  <Provider stores={stores}>
    <AppRouter />
  </Provider>
  , document.getElementById('root')
)

serviceWorker.unregister()
