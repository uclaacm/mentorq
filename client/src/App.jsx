import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Container from './components/Container';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/' component={Container} />
          <Redirect to='/' />
        </Switch>
        <h1> THIS IS A TEST FROM DUSTIN </h1>
      </div>
    )
  }
}

export default App