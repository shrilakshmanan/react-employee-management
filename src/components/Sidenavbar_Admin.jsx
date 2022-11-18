

import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaTelegramPlane } from 'react-icons/fa';
import { TbZoomMoney } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi"; 
import { FaSignInAlt,FaUserCheck,FaUniversity,FaPencilAlt,FaDesktop,FaUserAlt,GrDocumentUser,FaWpforms,FaEnvelope } from 'react-icons/fa';



 class Sidenavbar_Admin extends Component {
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





// 
sessionStorage.getItem("Role") =="Employee" ? <><div class="px-sm-2 px-0 " style={{backgroundColor:"#107CB9",height:"100%"}} > 

<div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">

<i alt="hugenerd" width="10" height="30" class="rounded-circle" ><FaUserTie  style={{color:'white',width:"65",height:60}}/></i>



<a href="#" class="d-flex align-items-center text-white text-decoration-none  dropdown-toggle " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

<span class="d-none d-sm-inline "><div class="dropdown">
<a class="dropbtn nav-link px-0 align-middle m-1"  style={{color:'white',  'font-size': '22px'}} href="#" >{sessionStorage.getItem("name")}</a>
<div class="dropdown-content">
<a href='/Myprofile' >Profile</a>
<a  onClick={this.compare} style={{color:"black"}}> Sign out</a>
</div>
<span class="d-none d-sm-inline mx-1">{sessionStorage.getItem("Role")}</span>
</div></span>
     
</a>

        
     
     <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item m-1">
        
            <a href="/AfterLogin" class="nav-link align-middle px-0">
            <i style={{ color: "white", "font-size": "22px" }}>
          <FaUniversity />
        </i>
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
              <a href="/ProjectEmpDisplay" data-bs-toggle="collapse" class="nav-link px-0 align-middle m-1">
            <i
          style={{ color: "white", "font-size": "19px" }}
          class="fs-4 bi-table"
        >
          <FaDesktop />
        </i>
                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}>projects</span> </a>
           
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
            <i style={{ color: "white", "font-size": "22px" }}>
          <FaTelegramPlane />
        </i>
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
            <i
          style={{ color: "white", "font-size": "22px" }}
          class="fs-4 bi-bootstrap"
        >
          <FaPencilAlt />
        </i>
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
  <div style={{color:'#107cb9'}}>
        <li>
       

        
        </li>
        </div>
</div></> :  sessionStorage.getItem("Role") =="Admin"? <> 
<div class="px-sm-2 px-0"  style={{'backgroundColor':"#094628",height:"100%"}} > 
<div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">


<i alt="hugenerd" width="10" height="30" class="rounded-circle" ><FaUserTie  style={{color:'white',width:"65",height:60}}/></i>



   <a href="#" class="d-flex align-items-center text-white text-decoration-none  dropdown-toggle " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

            <span class="d-none d-sm-inline "><div class="dropdown">
  <a class="dropbtn nav-link px-0 align-middle "  style={{color:'white',  'font-size': '22px'}} href="#" >{sessionStorage.getItem("name")}</a>
  <span class="d-none d-sm-inline mx-1">{sessionStorage.getItem("Role")}</span>
  <div class="dropdown-content">
  <a href='/Myprofile' >Profile</a>
    <a  onClick={this.compare} style={{color:"black"}}> Sign out</a>
  </div>

</div></span>
                 
        </a>
  
     <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item m-1">
            <a href="/AfterLogin" class="nav-link align-middle px-0">
                <i style={{ color:'white', 'font-size': '18px'}}><FaUniversity /></i> <span class="ms-1 d-none d-sm-inline"  style={{ color:'white', 'font-size': '19px'}}>Home</span>
            </a>
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
  <a class="dropbtn nav-link px-0 align-middle m-1"  style={{color:'white',  'font-size': '18px'}} href="#" ><FaUserAlt /> Employee</a>
  <div class="dropdown-content">
  <a href="/CreateNewEmployee"> Add Employee</a>
  <a href='/AllempDisplay' >List Employees</a>
  <a href="/CurrentEmployee"> Current Employees</a>
  <a href="/FormerEmployee"> Former Employees</a>
  <a href="/Wrongemployee"> Added By Mistake</a>
  
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
        <div class="dropdown">
  <a class="dropbtn nav-link px-0 align-middle m-1"  style={{color:'white',  'font-size': '18px'}} href="#" > < FaWpforms /> Project</a>
  <div class="dropdown-content">

  <a href="/yettostart"> yet to start projects</a>
    <a href="/ActiveAdminproject"> Active projects</a>

    <a href="/CompletedProjectAdmin"> completed projects</a>
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
        <div class="dropdown">
  <a class="dropbtn nav-link px-0 align-middle m-1"  style={{color:'white',  'font-size': '18px'}}  href="/UpdateSalary" >  <GiMoneyStack /> Salary and<br /> department</a>
  <div class="dropdown-content">

    <a href="/UpdateSalary"> Update Salary and department</a>
    <a href="/Addsalary"> Add salary and department</a>
  </div>
</div>
      
        </li>
        <hr
style={{

backgroundColor: 'white',
height: 5,
width:350
}}
/>
        <li>
            <a href="/AdminLeave" class="nav-link px-0 align-middle m-1">
                <i style={{ color:'white', 'font-size': '18px'}} class="fs-4 bi-table">< FaEnvelope/></i> <span class="ms-1 d-none d-sm-inline" style={{ color:'white', 'font-size': '19px'}}>  Leaves</span></a>
                <hr
style={{

backgroundColor: 'white',
height: 5,
width:350
}}
/>
        </li>
       
        <li>
            <a href="/AdminQuery" data-bs-toggle="collapse" class="nav-link px-0 align-middle m-1 ">
                <i style={{ color:'white','font-size': '18px'}} class="fs-4 bi-bootstrap"><FaPencilAlt /></i> <span class="ms-1 d-none d-sm-inline" style={{ color:'white','font-size': '19px'}}>queries</span></a>
                <p
style={{


width:350
}}
/>
        </li>
      
      
        
    </ul>
   
   

  
</div>
</div></>:<><div class="px-sm-2 px-0 " style={{backgroundColor:"rgb(25,73,93)",height:"100%"}} > 

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
            <i style={{ color: "white", "font-size": "22px" }}>
          <FaUniversity />
        </i>
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

          
                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}> <FaUserAlt /> Employees</span> </a>
           
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
  <a class="dropbtn nav-link px-0 align-middle m-1"  style={{color:'white',  'font-size': '22px'}} href="#" > < FaWpforms /> Project</a>
  <div class="dropdown-content">
  <a href='/Addproject' >Add  Project</a>
   <a onClick={ () =>  this.displaymanagerproject(sessionStorage.getItem("id"))} style={{color:'black'}} >Display all project </a>
  
  <a href='/yettocome' >Yet to start projects</a>

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
                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}>   <FaTelegramPlane /> Leave</span> </a>
           
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
                <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline" style={{color:'white',  'font-size': '22px'}}><FaPencilAlt /> Queries</span></a>
     
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
</div></>

    )
  }
}

export default Sidenavbar_Admin;