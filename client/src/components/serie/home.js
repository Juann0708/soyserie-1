import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import FilterButton from '../../utils/filter'

class Home extends Component {
    state = {
        serie: null
    }

    async componentDidMount(){
        const dataFetch = await axios.get(`http://localhost:3001/Series/all`).then(response => response.data )

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
                                <a href= {"http://localhost:3000/"+series[key].titulo}> {series[key].titulo} </a>
                                                                
                            </article>
                            )
                         })
                    }
            </div>
            
        );
        
    }
}

export default Home;