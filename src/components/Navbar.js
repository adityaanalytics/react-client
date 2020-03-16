import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
// import Landing from './Landing';

class Navbar extends Component {

    logout(e) {

        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)


    }

    render(){

           const loginRegLink = (

                <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/login" className="nav-link"> Login </Link>
                
               </li>
               <li className="nav-item">
               <Link to="/register" className="nav-link"> Register </Link>
                </li>
                </ul>
           ) 
            

           const userLink = (

            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link"> User </Link>
            </li>

            <li className="nav-item">
                <a href="/" onClick={this.logout.bind(this) } className="nav-link"> Logout </a>
                 
            </li>

            </ul>
       ) 

          
       
            return( <nav  className ="navbar navbar-expand-lg navbar-dark bg-dark rounded">


                <button className="navbar-toggler"  
                type ="button" 
                data-toggle="collapse" 
                data-target = "#navbarsExample10" 
                aria-controls="navbarsExample10"
                aria-expanded="false"
                aria-label="Toggle Navigation"

                >
                <span className="navbar-toggler-icon" />
                </button>
               <div id="navbarsExample10" className="collapse navbar-collapse justify-content-md-center" >

                <ul className="navbar-nav"> 
                    <li className="nav-link">
                    <Link to="/" className="nav-link">
                    Home
                     </Link>
                    </li>
                
                     </ul>

                {localStorage.usertoken ? userLink : loginRegLink}

               </div>

            </nav>)

    }

}


export default withRouter(Navbar)
//export default withRouter(Landing)