import React, {Component} from 'react'
import axios from 'axios'

class Resena extends Component{
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

    handleRegisterResena = (event) => {
        event.preventDefault()
        let serie = {
            name: this.props.match.params.titulo,
            content: this.state.content,
            rating: this.state.rating,
            efectos: this.state.efectos,
            musica: this.state.musica,
        }
        console.log("esto enviaste:" , serie)
        axios({
            method: 'post',
            baseURL: 'http://localhost:3001/soyserie/resena/:titulo',
            headers: {'Content-Type': 'application/json'},
            data: serie
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
                        <h1>Añade una reseña</h1>
                        <form onSubmit={this.handleRegisterResena}>
                        <input placeholder="Reseña" type="text" className="form-control" name="content" onChange={this.handleChange}/>
                            <input placeholder="Calificación general" type="text" className="form-control" name="rating" onChange={this.handleChange} />
                            <input placeholder="Calificación de efectos" type="text" className="form-control" name="efectos" onChange={this.handleChange}/>
                            <input placeholder="Calificación de la música" type="text" className="form-control" name="musica" onChange={this.handleChange}/>


                            <button type="submit" className="btn btn-primary">Añadir reseña</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resena;