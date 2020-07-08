import React from 'react'
import { render } from 'react-dom'
import configureStore from './store'
import Routes from './routes'
import {client} from './apollo'
import {ApolloProvider} from "react-apollo"
import 'react-select/dist/react-select.css'

render(
  <ApolloProvider store={configureStore()} client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
)
