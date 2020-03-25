import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
//import {BrowserRouter as Router} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-metismenu/dist/react-metismenu-standart.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';


import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Menu from './components/Menu'
import FooterPage from './components/footer'
import NavbarPage from './components/Nav'

class App extends Component{

render(){

return(

<Router>

<div className= "App">
  
  <NavbarPage />
  <Route exact path= "/" component={Landing}   />
  
  
  <div className="container" >
  <Route exact path= "/register" component={Register}/>
  <Route exact path= "/login" component={Login}/>
  <Route exact path= "/profile" component={Profile}/> 
  </div>

  <Route exact path= "/menu" component={Menu}/> 
   
  <FooterPage/>
  
</div>
</Router>
);
}
}
export default App;
