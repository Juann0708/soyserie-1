import React, { Component } from 'react'
import axios from 'axios'
import './styles.css'
import {Link} from 'react-router-dom'


class Serie extends Component {
    state = {
        serie: null
    }

    async componentDidMount(){
        const series = this.props.match.params.serie
        const name = this.props.match.params.serie
        const dataFetch = await axios.get(`http://localhost:3001/series/${series}`).then(response => response.data)
        const resenaFetch = await axios.get(`http://localhost:3001/series/resenas/${name}`).then(response => response.data)
       
        this.setState({series: dataFetch, resenas: resenaFetch})
    }


    render() {
        const series = this.state.series ? this.state.series : []
        let resenas = this.state.resenas ? this.state.resenas : []
        
            return(            
            
            <div className = 'series'>
            {
                Object.keys(series, resenas).map((key, index) => {
                    
                        return(
                        <article key={index}>
                            <h1>{series[key].titulo}</h1>
                            <img className = "billboard "alt="Imagen de la serie" src= {series[key].imagen}></img>
                            <section className="text">
                            <p>Plataforma: {series[key].plataforma}</p>
                            <p><span>Temporadas: </span>{series[key].temporadas}</p>
                            <p><span>Plataforma: </span>{series[key].plataforma}</p>
                            <p><span>Cast: </span>{series[key].cast}</p>
                            </section>
                            <section className="resenas">
                            <li>Resenas: {resenas[key].content}</li>
                            <button><Link to={"/resena/"+series[key].titulo}> Añadir una reseña</Link></button>
                            </section>
                            </article>

                        )
                    
                         })
                    }
            </div>
            )}
   
    }


export default Serie;