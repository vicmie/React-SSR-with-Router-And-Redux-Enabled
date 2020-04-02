import React, { Component, StrictMode } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// FIXME: Import named exports here
import  HomePage from './pages/home'

// NOTE: Global stylesheet
// FIXME: indent
import './App.css'

export default class SETA extends Component {
  render () {
    return (
      <StrictMode>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </StrictMode>
    )
  }
}
