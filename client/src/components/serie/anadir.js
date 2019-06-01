import React, {Component} from 'react'
import axios from 'axios'

class Anadir extends Component{
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

    handleRegisterSerie = (event) => {
        event.preventDefault()
        const serie = {
            titulo: this.state.titulo,
            plataforma: this.state.plataforma,
            temporadas: this.state.temporadas,
            año: this.state.año,
            genero: this.state.genero,
            cast: this.state.cast,
            imagen: this.state.imagen
        }
        console.log("esto enviaste:" , serie)
        axios({
            method: 'post',
            baseURL: 'http://localhost:3001/series/add',
            headers: {'Content-Type': 'application/json'},
            data: serie
        })
        .then(res => {
            console.log(res.data)
            return res.data
        })
    }

    handleRegisterResena = (event) => {
      event.preventDefault()
      let serie = {
          name: this.state.titulo,
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
                        <h1>Registra una serie</h1>
                        <form onSubmit={this.handleRegisterSerie}>
                            <input placeholder="Nombre" type="text" className="form-control" name="titulo" onChange={this.handleChange}/>
                            <input placeholder="Plataforma" type="text" className="form-control" name="plataforma" onChange={this.handleChange}/>
                            <input placeholder="Temporadas" type="text" className="form-control" name="temporadas" onChange={this.handleChange} />
                            <input placeholder="Año" type="text" className="form-control" name="año" onChange={this.handleChange}/>
                            <input placeholder="Genero" type="text" className="form-control" name="genero" onChange={this.handleChange}/>
                            <input placeholder="Cast" type="text" className="form-control" name="cast" onChange={this.handleChange}/>
                            <input placeholder="Imagen" type="text" className="form-control" name="imagen" onChange={this.handleChange}/>
                            <button type="submit" className="btn btn-primary">Añadir serie</button>
                        </form>
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

export default Anadir