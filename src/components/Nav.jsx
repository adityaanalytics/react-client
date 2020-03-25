import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon , MDBFormInline} from "mdbreact";
import {BrowserRouter as Router  ,withRouter } from 'react-router-dom';


class NavbarPage extends Component {

    logout(e) {

        e.preventDefault()
        localStorage.removeItem('usertoken')
        this
            .props
            .history
            .push(`/`)

    }

state = {
  isopen: false
 };

togglecollapse = () => {
   this.setstate({ isopen: !this.state.isopen });
}

render() {
    const loginRegLink =(
            <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/login">Login</MDBDropdownItem>
                <MDBDropdownItem href="/register">Register</MDBDropdownItem>                
            </MDBDropdownMenu>)
            
    

    const userLink = (
            <MDBDropdownMenu className="dropdown-default">                
                <MDBDropdownItem href="/profile">User</MDBDropdownItem>
                <MDBDropdownItem href="/" onClick={this.logout.bind(this)} >LogOut</MDBDropdownItem>                
            </MDBDropdownMenu>)

  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>

          <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>


          <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                {localStorage.usertoken
                        ? userLink
                        : loginRegLink}
                {/* <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/login">Login</MDBDropdownItem>
                  <MDBDropdownItem href="/register">Register</MDBDropdownItem>
                  <MDBDropdownItem href="/" onClick={this.logout.bind(this)} >LogOut</MDBDropdownItem>                
                </MDBDropdownMenu> */}
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default withRouter(NavbarPage);