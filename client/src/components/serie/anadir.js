import React, { Component } from 'react'
import axios from 'axios'



class Anadir extends Component {

    state = {
        bigData: null,
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const serie = {
            id: this.state.id,
            titulo: this.state.titulo,
            plataforma: this.state.plataforma,
            temporadas: this.state.temporadas,
            año: this.state.año,
                genero: this.state.genero,
                cast: this.state.cast
                }
            
            
        

        axios.post(`http://localhost:3001/series`, serie)
        .then(res => {
            console.log(res.data)
        })
    }
    

    render(props) {
        const datalist = this.state.bigData ? this.state.bigData : []
        return (
            <div>
                
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <input placeholder="email" type="text" name="loginemail" onChange={this.handleChange} />
                    <input placeholder="password" type="password" name="loginpassword" onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
                <hr/>
                <h1>Registra un usuario</h1>
                <form onSubmit={this.handleRegisterUser}>
                    <input placeholder="email" type="text" name="registeremail" onChange={this.handleChange} />
                    <input placeholder="password" type="password" name="registerpassword" onChange={this.handleChange}/>
                    <input placeholder="name" type="text" name="registername" onChange={this.handleChange}/>
                    <input placeholder="lastname" type="text" name="registerlastname" onChange={this.handleChange}/>

                    <button type="submit">Crear usuario</button>
                </form>
                <hr/>
                <h1>Registra un restaurante</h1>
                <form onSubmit={this.handleSubmit}>
                                Id: <input type="text" name="id" onChange={this.handleChange} />
                                <br/>
                                Rating: <input type="text" name="rating" onChange={this.handleChange} />
                                <br/>
                                Name: <input type="text" name="name" onChange={this.handleChange} />
                                <br/>
                                Site: <input type="text" name="site" onChange={this.handleChange} />
                                <br/>
                                Email: <input type="text" name="email" onChange={this.handleChange} />
                                <br/>
                                Phone: <input type="text" name="phone" onChange={this.handleChange} />
                                <br/>
                                Street: <input type="text" name="street" onChange={this.handleChange} />
                                <br/>
                                City: <input type="text" name="city" onChange={this.handleChange} />
                                <br/>
                                State: <input type="text" name="state" onChange={this.handleChange} />
                                <br/>
                                Lat: <input type="text" name="lat" onChange={this.handleChange} />
                                <br/>
                                Lng: <input type="text" name="lng" onChange={this.handleChange} />
                                <br/>
                        <button type="submit">Agregar restaurante</button>
                    </form>
                <hr/>
            </div>
        );  
    }
}

export default Anadir;