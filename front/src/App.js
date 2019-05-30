import React, { Component} from 'react';
//import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css';
import dotenv from 'dotenv'
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
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profile" component={Profile}/>
      </div> 
    </Router>
  )
}

}



export default App;
