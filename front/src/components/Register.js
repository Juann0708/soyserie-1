import React, {Component} from 'react'
import axios from 'axios'

class Register extends Component{
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

    handleRegisterUser = (event) => {
        event.preventDefault()
        const user = {
            email: this.state.registeremail,
            password: this.state.registerpassword,
            name: this.state.registername,
            lastname: this.state.registerlastname
        }
        console.log("esto enviaste:" , user)
        axios({
            method: 'post',
            baseURL: 'http://localhost:3001/register',
            headers: {'Content-Type': 'application/json'},
            data: user
        })
        .then(res => {
            console.log(res.data)
            return res.data
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h1>Registra un usuario</h1>
                        <form onSubmit={this.handleRegisterUser}>
                            <input placeholder="name" type="text" name="registername" onChange={this.handleChange}/>
                            <input placeholder="lastname" type="text" name="registerlastname" onChange={this.handleChange}/>
                            <input placeholder="email" type="text" name="registeremail" onChange={this.handleChange} />
                            <input placeholder="password" type="password" name="registerpassword" onChange={this.handleChange}/>
                            <button type="submit">Crear usuario</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register