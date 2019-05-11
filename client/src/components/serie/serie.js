import React, { Component } from 'react'
import axios from 'axios'

class Serie extends Component {
    state = {
        serie: null
    }

    async componentDidMount(){
        const series = this.props.match.params.serie
        const dataFetch = await axios.get(`http://localhost:3001/series/${series}`).then(response => response.data )

        this.setState({series: dataFetch})
    }

    render() {
        const series = this.state.series ? this.state.series : []
        return (
            <div>
                {
                    Object.keys(series).map((key, index) => {
                        return (
                            <article key={index}>
                                <h1>{series[key].titulo}</h1>
                                <p><span>Plataforma: </span>{series[key].plataforma}</p>
                                <p><span>Temporadas: </span>{series[key].temporadas}</p>
                            </article>
                            )
                        })
                    } 
            </div>
        );
    }
}

export default Serie;