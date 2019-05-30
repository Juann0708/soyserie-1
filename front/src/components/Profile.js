import React, {Component} from 'react'
import axios from 'axios'

class Profile extends Component{

    state = {
        userData: null
    }
    

    async componentDidMount(){
        const dataFetch = await axios.get('http://localhost:3001/users')
        this.setState({userData: dataFetch.data})
    }

    render (props) {
        const usersList = this.state.userData ? this.state.userData : []
        
            return (
                <div>
                    {
                        Object.keys(usersList).map((key,index) => {
                            return(
                                <div className="container" key={index}>
                                    <div className="jumbotron mt-5">
                                        <div className="col-sm-8 mx-auto">
                                            <h1 className="text-center">PROFILE</h1>
                                        </div>
                                        
                                        <table className="table col-md-6 mx-auto">
                                            <tbody>
                                                <tr>
                                                    <td>First Name</td>
                                                    <td>{usersList[key].name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Last Name</td>
                                                    <td>{usersList[key].lastname}</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>{this.state.email}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                
            )
            
        
    }
}

export default Profile

