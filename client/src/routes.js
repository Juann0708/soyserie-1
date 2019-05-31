import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'

// Components
import Serie from './components/serie/serie'
import Home from './components/serie/home'
import Anadir from './components/serie/anadir'


class App extends Component {

  render(){
    return (
        <Switch>
          <Route path="/:serie" exact component={Serie}/>
          <Route path="/" exact component={Home}/>
          <Route path="/anadir" exact component={Anadir}/>

        </Switch>
    )
  }
}

export default App;
