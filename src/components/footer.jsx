import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color ="#5f0906" className="font-small pt-4 mt-4">
     <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Aditya Analytics</h5>
            <p>
              We Are Product Development company
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/login">Login</a>
              </li>
              <li className="list-unstyled">
                <a href="/register">  Register</a>
              </li>
             
            </ul>
          </MDBCol>
              
          </MDBRow>  
          <div className="footer-copyright text-center py-3">
          
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.google.com"> Aditya Analytics </a>
          
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;