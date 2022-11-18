import React, { Component } from 'react'
import EmployeeServices from './Serviceclass';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from 'react-icons/fa';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeHome from './EmployeeHome';
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import ManagerHome from './ManagerHome';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import AdminHome from './AdminHome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaSignInAlt,FaUserCheck,FaUserCircle,FaUniversity,FaPencilAlt,FaDesktop,FaUserAlt,GrDocumentUser,FaWpforms,FaEnvelope } from 'react-icons/fa';


var textval=2;
 class AfterLogin extends Component {

    constructor(props){
        super(props)
        
        this.state={
          
       test:sessionStorage.getItem("tot"),
            employees:[ ],
        id: sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role"),
        name:sessionStorage.getItem("name")
       
        }
       textval=this.state.test;
    }



   // console.log(Role);
    componentDidMount(){
        //This is js promise here this will wait until the response is came
                EmployeeServices.getAllEmployees().then((res) =>{
        
                    this.setState({employees:res.data})
        
                   
                  var a= sessionStorage.getItem("id")
                    console.log(a);
                    this.setState({id:a});
                    var b=sessionStorage.getItem("Role");
                    console.log(b);
                    this.setState({Role:b});
                    console.log(this.state);
var c=sessionStorage.getItem("name");
this.setState({name:c});
console.log(c);


                })
            }

            fn(){
                
            
              console.log("The function is caldqded",sessionStorage.getItem('tot'));
console.log("The function is called",typeof('1'));


     if(sessionStorage.getItem('tot') == "1")
 {      
  
  console.log("This is inside the function")

  sessionStorage.setItem('tot',0);
 
  console.log("tset value",this.state.test,textval)
        
  
  toast( ' Welcome back '+sessionStorage.getItem('name'), {
                     position: toast.POSITION.TOP_RIGHT,
                    autoClose:1200,
                    icon:<FaUserCircle style={{width:'75',height:'25'}}/>,
                    
       
                   });
                  //  this.setState({test:0})
                   textval=0;
                   console.log("tset value333333",this.state.test,textval)

               }

            }                
    
  render()
   {
    
   

    return (

        this.state.Role =="Employee" ? <>  <div className='row  '>
      
        <div className="col-lg-2">
        <Sidenavbar_Admin />
        { this.fn() } 
      
        <ToastContainer limit={1} toastStyle={{ color:"white", backgroundColor: "#107cb9" }}/>
        </div>
        <div className="col-lg-10">
       <EmployeeHome />

       </div>
       
    
       </div>
            
        </> :   this.state.Role =="Manager"? <> <div className='row'>
        <div className="col-lg-2">
        { this.fn() } 
        <ToastContainer limit={1} toastStyle={{ color:"white", backgroundColor: "#19495d" }}/>
        <Sidenavbar_Admin />
        </div>
        <div className="col-lg-10">
        <ManagerHome />
       </div>
       </div></>  :<>
       <div className='row'>
        <div className="col-lg-2">
        { this.fn() } 
        <ToastContainer limit={1} toastStyle={{ color:"white", backgroundColor: "#094628" }}/>
        <Sidenavbar_Admin />
        </div>
        <div className="col-lg-10">
        <AdminHome />
       </div>
       </div>

</>
          
      
     
    )
  }
}

export default AfterLogin;






