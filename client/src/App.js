import React, { Component} from 'react';
//import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './header-footer/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import Serie from './components/serie/serie'
import Home from './components/serie/home'
import Anadir from './components/serie/anadir'
import './App.css';
import dotenv from 'dotenv'
import Resena from './components/serie/resena';
dotenv.config()

class App extends Component{

async componentDidMount(){
    //const dataFetch = await axios.get('http://localhost:3001/users')
    //this.setState({userData: dataFetch.data})
}

render(props){
  //const usersList = this.state.userData ? this.state.userData : []
  /*
  {
        Object.keys(usersList).map((key,index) => {
          return(
            <p key={index}>
              <p>{usersList[key].name}</p>
            </p>
          )
        })
      }
  */
  return(
    <Router>
      <Navbar/>
      <div className="container">
        <Route exact path="/:serie" component={Serie}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/anadir" component={Anadir}></Route>
        <Route exact path="/resena/:titulo" component={Resena}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </div> 
    </Router>
  )
}

}



export default App;
