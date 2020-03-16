import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import { getUser } from './UserFunctions'


 import "./styles.css";
 import SideBar from "./Sidebar";








class Profile extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            phn: ''

        }

    }


    componentDidMount() {

        const token = localStorage.usertoken

        const decode = jwt_decode(token)

        getUser(decode.uid).then(res => {

            this.setState({


                username: res.data.username,
                email: res.data.email,
                phn: res.data.phn


            })

        })

    }



    render() {


        return (

            <div id="App">
                 <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap">
            <div className="container">
                <div className="jumbotron mt-5">

                    <div className="col-sm-8 mx-auto" >

                        <h1 className="text-center">Profile</h1>

                    </div>

                    <table className="table col-md-6 mx-auto">

                        <tbody>

                            <tr>

                                <td>User Name</td>
                                <td>{this.state.username}</td>
                            </tr>

                            <tr>

                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>

                                <td>Phone Number</td>
                                <td>{this.state.phn}</td>
                            </tr>

                        </tbody>


                    </table>


                </div>

            </div>

            </div>
          </div>      
        )

    }

}

export default Profile

