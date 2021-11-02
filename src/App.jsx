import React from 'react'
import { Route, Switch } from "wouter"
// Pages
import Home from './pages/Home'
import Game from './pages/Game'
import Scoreboard from './pages/Scoreboard'
// Components
import Navbar from './components/Navbar'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/'><Home /></Route>
          <Route path='/game'><Game /></Route>
          <Route path='/score'><Scoreboard /></Route>
        </Switch>
      </div>
    )
  }
}

export default App
