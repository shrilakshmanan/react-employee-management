import React, { Component } from 'react'
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import Sidenavbar_Manager from './Sidenavbar_Manager';


 class Myprofile extends Component {
  render() {
    return (
        sessionStorage.getItem("Role") =="Employee" ?  <>
      <div>
           <div className='row'>
  <div className="col-sm-2">
  <Sidenavbar_Admin />
  </div>
  
  <div className="col-sm-10 ">
         <div className="vh-100" >
          <MDBContainer className="container py-5 h-100 " >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard  className="shadow p-3 mb-5 bg-white rounded"style={{ borderRadius: '15px' }}>  
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">  {sessionStorage.getItem("name")}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                {sessionStorage.getItem("Role")} <span className="mx-2">|</span> <a href="#!"> {sessionStorage.getItem("email")} </a>
                </MDBCardText>
              
                <MDBTypography ><h4>Manager incharge: </h4>{sessionStorage.getItem("manager")}</MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
      </div>
      </div>
      </div>
      </>:  sessionStorage.getItem("Role") =="Manager"?  <>
      <div>
           <div className='row'>
  <div className="col-sm-2">
  <Sidenavbar_Admin />
  </div>
  
  <div className="col-sm-10 ">
         <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">  {sessionStorage.getItem("name")}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                {sessionStorage.getItem("Role")} <span className="mx-2">|</span> <a href="#!"> {sessionStorage.getItem("email")}</a>
                </MDBCardText>
        
            
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
      </div>
      </div>
      </div>


      </>:<>

      <div>
           <div className='row'>
  <div className="col-sm-2">
  <Sidenavbar_Admin />
  </div>
  
  <div className="col-sm-10 ">
         <div className="vh-100" >
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">  {sessionStorage.getItem("name")}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                {sessionStorage.getItem("Role")} <span className="mx-2">|</span> <a href="#!"> {sessionStorage.getItem("email")}</a>
                </MDBCardText>
        
              
               
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    <footer> <p style={{marginLeft:450,marginTop:8}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p></footer>
    
      </div>
      
      </div>
      </div>

      </>
    )
  }
}

export default Myprofile;