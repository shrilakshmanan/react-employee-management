import React, { Component } from 'react'
import EmployeeServices from './Serviceclass';
// import {Link,Redirect , Routes, Route, useNavigate,Navigate} from 'react-router';
import managerEmpDisplay from './managerEmpDisplay';
import {withRouter, BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AfterLogin from './AfterLogin';
import Card from 'react-bootstrap/Card';
import { alignPropType } from 'react-bootstrap/esm/types';
import App from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class Loginpage extends Component {

    constructor(props){
        super(props)
    
        this.state={

            emailid:'',
            password:'',
            tot:sessionStorage.setItem('tot',1)
        }

   
    }


    compare=(event)=>{

        event.preventDefault();
       // let history = useHistory();
        let employee={password:this.state.password,emailid:this.state.emailid};
        console.log('employee =>'+JSON.stringify(employee));
    
        EmployeeServices.createEmployee(employee).then(res=>{
       //   navigate('/ManagerEmpDisplay');

if(!(res.data.wrong==undefined)){

  toast.error("Error", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:980,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
});
}       

else{
       sessionStorage.setItem("id",res.data.id);
       console.log(res.data.Role);
       sessionStorage.setItem("Appliedcounts",res.data.Appliedleaves);
       sessionStorage.setItem("AcceptQueries",res.data.AcceptQueries);
       sessionStorage.setItem("Reject",res.data.reject);
       sessionStorage.setItem("email",res.data.Email);
        sessionStorage.setItem("Role",res.data.Role);
        sessionStorage.setItem("manager",res.data.managerincharge);
        sessionStorage.setItem("name",res.data.Name);
        sessionStorage.setItem("allqueries",res.data.allqueries);
        sessionStorage.setItem("UnansweredQuery",res.data.UnansweredQuery);
        sessionStorage.setItem("querycount",res.data.querycount)
        sessionStorage.setItem("projectcount",res.data.projectcount)
        sessionStorage.setItem("projectcountManager",res.data.projectcountM)
        sessionStorage.setItem("Totalleave",res.data.Totalleave)
        console.log(res);
      // localStorage.setItem(res.data.data);

            console.log("user saved successfully");
            
            window.location.href = '/AfterLogin';
        //    history.push("./components/managerEmpDisplay") 
         //  this. props.history.push("/managerEmpDisplay");
            // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />
    
          }  },
        // this.redirect()
        
            
            )
            
    
 } 

    redirect=()=>{
      const navigate = useNavigate();
      navigate("/leave");
    }
    
    

    onChangeEmailidHandler=(event) =>{

        this.setState({emailid:event.target.value})
    
    }

    onChangepassword=(event) =>{

        this.setState({password:event.target.value})
    
    }
   
  render() {
    return (

      <div className='loginpage log' style={{textAlign:'center'}}>
 

 <h3 class="text-white" style={{"font-size": "27px"}}>Employee management system</h3>
<form>

  <div class="loginBox " style={{'margin-top': '25px',background: 'rgb(0 0 0 / 16%)'}}>
   <img class="user" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" style={{height:"100px",'border-radius': '100%', width:"100px"}} />
        <h3  style={{color:'rgb(255 255 255)'}}>Sign in</h3>
    				
        <div class="inputBox">
             <input id="uname" type="text" name="Username"  
             placeholder="Email address"  value={this.state.emailid} onChange={this.onChangeEmailidHandler} required />
             <input id="pass" type="password" name="Password" placeholder="Password"   value={this.state.password} onChange={this.onChangepassword}/>
              </div> 

<input className='mt-3' type="submit"  onClick={this.compare} value="Login"/>
<br />
<br />
</div>
</form>

<ToastContainer />


{/* <div >
  <div class="loginBox " style={{'margin-top': '25px',background: 'rgb(0 0 0 / 16%)'}}> <img class="user" src="https://static.vecteezy.com/system/resources/previews/000/566/937/non_2x/vector-person-icon.jpg" style={{height:"100px",'border-radius': '100%', width:"100px"}} />
        <h3  style={{color:'rgb(159 216 249)'}}>Sign in</h3>
        <form action="login.php"  method="post"  autoComplete="off">
            <div class="inputBox">
             <input id="uname" type="text" name="Username"  
             placeholder="Email address"  value={this.state.emailid} onChange={this.onChangeEmailidHandler} required />
             <input id="pass" type="password" name="Password" placeholder="Password"   value={this.state.password} onChange={this.onChangepassword}/>
              </div> 
              
              <input className='mt-3'  onClick={this.compare} type="submit" name="" value="Login" />
        </form> 
      
        
    </div>

      </div>   */}
      </div>
    )
  }
}

export default Loginpage;


