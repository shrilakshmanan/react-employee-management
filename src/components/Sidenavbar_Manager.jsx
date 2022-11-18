import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import App from '../App.css';


 class Sidenavbar_Manager extends Component {
    compare=(event)=>{

        event.preventDefault();
        sessionStorage.clear();
        window.location.href = '/';
    
      }
      displaymanagerproject(id){

        window.location.href=`/displaymanagerproject/${id}`;
    }

  render() {
    return (
//       <div>
//         <div className="offcanvas offcanvas-start w-25"  id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
//     <div className="offcanvas-header">
//         <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
//         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//     </div>
//     <div className="offcanvas-body px-0">
//         <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
//             <li className="nav-item">
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
//                 </a>
//             </li>
//             <li>
//                 <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
//                     <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
//             </li>
//             <li>
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Orders</span></a>
//             </li>
//             <li className="dropdown">
//                 <a href="#" className="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                     <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-none d-sm-inline">Bootstrap</span>
//                 </a>
//                 <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
//                     <li><a className="dropdown-item" href="#">New project...</a></li>
//                     <li><a className="dropdown-item" href="#">Settings</a></li>
//                     <li><a className="dropdown-item" href="#">Profile</a></li>
//                     <li>
//                         <hr className="dropdown-divider" />
//                     </li>
//                     <li><a className="dropdown-item" href="#">Sign out</a></li>
//                 </ul>
//             </li>
//             <li>
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Products</span></a>
//             </li>
//             <li>
//                 <a href="#" className="nav-link text-truncate">
//                     <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Customers</span> </a>
//             </li>
//         </ul>
//     </div>
// </div>
// <div className="container-fluid">
//     <div className="row">
//         <div className="col min-vh-100 py-3">
        
//             <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
//                 <i className="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
//             </button>
//             Content..
//         </div>
//     </div>
// </div>
//       </div>
<div class="px-sm-2 px-0 " style={{backgroundColor:"white",height:"100%"}} > 

<div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">

<i alt="hugenerd" width="10" height="30" class="rounded-circle" ><FaUserTie  style={{color:'white',width:"150",height:60}}/></i>



   <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

            <span class="d-none d-sm-inline mx-1"><div class="dropdown">
  <a class="dropbtn nav-link px-0 align-middle m-1"  style={{color:'white',  'font-size': '22px'}} href="#" >{sessionStorage.getItem("name")}</a>
  <div class="dropdown-content">
  <a href='/Myprofile' >Profile</a>
  
<a  onClick={this.compare} style={{color:"black"}}> Sign out</a>
  </div>
  <span class="d-none d-sm-inline mx-1" >{sessionStorage.getItem("Role")}</span>
</div></span>
                 
        </a>
        
     
     <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item m-1">
            <a href="/AfterLogin" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}>Home</span>
            </a>
            <hr
        style={{
            color: 'white',
            backgroundColor: 'white',
            height: 5,
            width:350
        }}
    />
        </li>

        <li>
            <a href="/ManagerEmpDisplay" data-bs-toggle="collapse" class="nav-link px-0 align-middle m-1">
                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}>Display all <br />Employees</span> </a>
           
                <hr
        style={{

            backgroundColor: 'white',
            height: 5,
            width:350
        }}
    />
        </li>
   
    
        <li>
        <div class="dropdown">
  <a class="dropbtn nav-link px-0 align-middle m-1"  style={{color:'white',  'font-size': '22px'}} href="#" >Project</a>
  <div class="dropdown-content">
  <a href='/Addproject' >Add  Project</a>


 <a> <button onClick={ () =>  this.displaymanagerproject(sessionStorage.getItem("id"))}  className="btn btn-info">Display all project </button>
  </a><a href='/yettocome' >Yet to start projects</a>

    <a href="/ActiveProjects"> Active projects</a>
    <a href="/CompletedProjects"> completed projects</a>
  </div>
</div>

        
                <hr
        style={{
            
            backgroundColor: 'white',
            height: 5,
            width:350
        }}
    />
        </li>
        <li>
            <a href="/ListEmpLeaves" data-bs-toggle="collapse" class="nav-link px-0 align-middle m-1">
                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}>Leave</span> </a>
           
                <hr
        style={{

            backgroundColor: 'white',
            height: 5,
            width:350
        }}
    />
        </li>
        <li>
            <a href="/ListQueries" data-bs-toggle="collapse" class="nav-link px-0 align-middle m-1 ">
                <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}>Queries</span></a>
     
                <hr
        style={{
            color: 'white',
            backgroundColor: 'white',
            height: 5,
            width:350
        }}
    />
        </li>
      
        
    </ul>
    <hr/>
    <div class="dropdown pb-4">
   
 
        
    </div>
</div>
</div>

    )
  }
}

export default Sidenavbar_Manager;