import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'

// Components
import Serie from './components/serie/serie'


class App extends Component {

  render(){
    return (
        <Switch>
          <Route path="/series/:serie" exact component={Serie}/>
        </Switch>
    )
  }
}

export default App;
