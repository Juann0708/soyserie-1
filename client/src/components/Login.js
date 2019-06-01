import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component{

    state = {
        userData: null
    }
    
    handleChange = event => {
        //console.log(this.state)
        this.setState(
            {
                ...this.state,
                [event.target.name]: event.target.value
            }
        );
    }
    
    handleLogin = (event) => {
        event.preventDefault();
        const user = {
            email: this.state.loginemail,
            password: this.state.loginpassword
        }
        axios({
            method: 'post',
            baseURL: 'http://localhost:3001/login',
            headers: {'Content-Type': 'application/json'},
            data: user
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            if(res.data.role === 0){
            this.props.history.push(`/profile`)
            console.log("es usuario")
            }else if(res.data.role === 1){
                this.props.history.push(`/profileAdmin`)
            console.log("es admin")
            }
            return res.data
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h1>Login</h1>
                        <form onSubmit={this.handleLogin}>
                            <input placeholder="email" type="text" className="form-control" name="loginemail" onChange={this.handleChange} />
                            <input placeholder="password" type="password" className="form-control" name="loginpassword" onChange={this.handleChange}/>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Login