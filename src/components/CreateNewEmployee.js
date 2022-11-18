import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterLogin from '../components/AfterLogin';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import ListEmpLeaves from './ListEmpLeaves';
import EmployeeServices from './Serviceclass';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaAngleDoubleLeft, FaTextWidth } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import Sidenavbar_Admin from './Sidenavbar_Admin';



 class CreateNewEmployee extends Component {
  constructor(props){
    super(props)

    this.state={

     // id:sessionStorage.getItem("id"),
      username:'',
      managers:[],
      jobdescriptions:[],
      password:'',
      Emailid:'',
      personelmail:'',
      roles:'',
      jobdesc:'',
      ManagerIncharge:'',
      dateofjoining:'',
casualleave:'',
sickleave:'',
paidleave:'',


    }

   

}


componentDidMount(){
  //  console.log("id"+this.state.ids);
     //This is js promise here this will wait until the response is came
             EmployeeServices.jvaclas().then((res) =>{
     
                console.log(res.data);
                  this.setState({managers:res.data})
     
            //    var a=  sessionStorage.getItem("id")
              
            //      this.setState({id:a});
            //    //  console.log(this.state);
            //      var b=sessionStorage.getItem("Role");
            //     // console.log(b);
            //      this.setState({Role:b});
            //     // console.log(this.state);

             })

             EmployeeServices.jobdesc().then((res) =>{
     

              console.log("this is "+res.data);
                this.setState({jobdescriptions:res.data})
   

          //    var a=  sessionStorage.getItem("id")
            
          //      this.setState({id:a});
          //    //  console.log(this.state);
          //      var b=sessionStorage.getItem("Role");
          //     // console.log(b);
          //      this.setState({Role:b});
          //     // console.log(this.state);

           })

         }

     onChangeemployeename=(event) =>{
      this.setState({username:event.target.value})

}
onChangepassword=(event) =>{

  this.setState({password:event.target.value})

}
onChangeemailid=(event) =>{

  this.setState({Emailid:event.target.value})

}
onChangecategoryHandler=(event) =>{

  console.log(event.target.value);

  this.setState({category:event.target.value})

}
onChangeReasonHandler=(event) =>{

  console.log(event.target.value);

  this.setState({roles:event.target.value})

}
// onChangejobincharge=(event) =>{

//   this.setState({jobdesc:event.target.value})

// }

onChangepersonelmailHandler=(event) =>{

  console.log(event.target.value)
    this.setState({personelmail:event.target.value})
  
  }
  onChangeDoj=(event) =>{

    console.log(event.target.value)
      this.setState({dateofjoining:event.target.value})
    
    }

  onChangepositionincharge=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({jobdesc:event.target.value})
  
  }


  onChangecasualleave=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({casualleave:event.target.value})
  
  }
  
  onChangepaidleave=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({paidleave:event.target.value})
  
  }

  
  onChangesickleave=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({sickleave:event.target.value})
  
  }


  onChangemanagerincharge=(event) =>{

if(event.target.value==" "){

console.log("The value os null");

}


    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({ManagerIncharge:event.target.value})
  
  }
 

compare=(event)=>{
  var a=  sessionStorage.getItem("id")
  console.log("this is id"+a);
  this.setState({id : a});
  console.log(this.state);

  event.preventDefault();
 // let history = useHistory();


 let employee={username:this.state.username,password:this.state.password,emailid:this.state.Emailid,
    personelmail:this.state.personelmail
    ,roles:this.state.roles,
    jobdesc:this.state.jobdesc,
    dateofjoining:this.state.dateofjoining,
    managerIncharge:this.state.ManagerIncharge,
    casualleave:this.state.casualleave,
    paidleave:this.state.paidleave,
    sickleave:this.state.sickleave,
    employeestatus:'currrent'};
  console.log('employee =>'+JSON.stringify(employee));

  
  if(this.state.username==""){
    toast.warning("Please enter the Employee Name", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }

  else if(this.state.sickleave==""){
    toast.warning("Please enter the sickleave", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }
  else if(this.state.paidleave==""){
    toast.warning("Please enter the paidleave", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }
  else if(this.state.casualleave==""){
    toast.warning("Please enter the casualleave", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }

  else if(this.state.ManagerIncharge==""){
    toast.warning("Please Select the ManagerIncharge", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }

  else if(this.state.dateofjoining==""){
    toast.warning("Please enter the DateOfJoining", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }

  else if(this.state.jobdesc==""){
    toast.warning("Please select the position", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }

  else if(this.state.roles==""){
    toast.warning("Please select the roles", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }
  
  else if(this.state.personelmail==""){
    toast.warning("Please enter the personelmailId", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }
  else if(this.state.Emailid==""){
    toast.warning("Please enter the Emailid", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1500,
      
    });
  }

else if(this.state.password==""){
  toast.warning("Please enter the password", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1500,
    
  });
}
else{
  EmployeeServices.saveemployee(employee).then(res=>{
 //   navigate('/ManagerEmpDisplay');

 
// localStorage.setItem(res.data.data);

      console.log("user saved successfully",res.data.success);

    if(!(res.data.success==undefined)){

      toast.success(res.data.success, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:1500,
        
      });
      const timer = setTimeout(() => {
        window.location.href = '/AllempDisplay';
      }, 1600);


    }
      
    
    if(!(res.data.error==undefined)){

        
      toast.error(res.data.error, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:1500,
        
      });

    }


     


    





     // window.location.href = '/AllempDisplay';
  //    history.push("./components/managerEmpDisplay") 
   //  this. props.history.push("/managerEmpDisplay");
      // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />

  },
  // this.redirect()
  
      
      )
      
}
} 
  render() {
    return (

     
 <> 
<div className='row' style={{"overflow-x":"hidden"}}>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <div className="col-md-10 d-flex justify-content-center">

<br />

  <div>




<br/>
<a href="/AllempDisplay" style={{color:'blue'}}><FaAngleDoubleLeft /> Back</a>
  <Card style={{ width: '50rem' 
   }}>

<Card.Body>

<form class="form-card">
<h3 style={{ 'justify-content': 'center'}}>Create New Employee</h3>
                    

 <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputEmail">Employee Name<span class="text-danger"> *</span></label>
    <input type="text" class="form-control" placeholder='enter the name '  name="Username"
     value={this.state.username} onChange={this.onChangeemployeename}  id="inputEmail"  required />
</div> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Password<span class="text-danger"> *</span></label>
    <input type="password" value={this.state.password} placeholder='enter the password' name="password" onChange={this.onChangepassword}  class="form-control" id="inputPasword"   required />
</div>  </div>
                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">company mail_id<span class="text-danger"> *</span></label>
    <input type="email" value={this.state.Emailid}  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>
</div> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">personel mail_id<span class="text-danger"> *</span></label>
    <input type="email" value={this.state.personelmail}  placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>
</div></div></div>
<div class="row justify-content-between text-left">
                    <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label " for="inputPassword">Casual leave<span class="text-danger"> *</span></label>
    <input type="casualleave" value={this.state.casualleave}  placeholder='No of casual leaves' onChange={this.onChangecasualleave} class="form-control" name="casual"  id="casualleave"  required='true'/>
</div> </div>
                    <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label " for="inputPassword">Sick leave<span class="text-danger"> *</span></label>
    <input type="Sick leave" value={this.state.sickleave}  placeholder='No of sick leaves' onChange={this.onChangesickleave} class="form-control" name="sick"  id="sickleave"  required='true'/>
</div></div>
                    <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label " for="inputPassword">paid leave<span class="text-danger"> *</span></label>
    <input type="paidleave" value={this.state.paidleave}  placeholder='No of paid leave' onChange={this.onChangepaidleave} class="form-control" name="casual"  id="casualleave"  required='true'/>
</div></div></div>

<div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">date of joining<span class="text-danger"> *</span></label>
    <input type="date" value={this.state.dateofjoining}  placeholder='enter the date of joining' onChange={this.onChangeDoj} class="form-control" name="Emailid"  id="inrd"  required='true'/>
</div></div>
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="form-outline mb-3">
											<label for="Roles"><>Choose the Role<span class="text-danger"> *</span></></label>
											<br />
											<select  onChange={this.onChangeReasonHandler}  	class="form-control form-control-md" name="roles" id="Rname">
												<option hidden selected label=" Select One..." >Select One...</option>
											
												<option onChange={this.onChangeReasonHandler} value="Employee"><strong>Employee</strong></option>
												<option onChange={this.onChangeReasonHandler}  value="Manager"><strong>Manager</strong>
												</option>
	
	
											</select>
										</div></div></div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">   <label class="form-label" for="inputPassword">Position<span class="text-danger"> *</span></label>
              <Form.Select  onChange={this.onChangepositionincharge}  >
      {

this.state.jobdescriptions.map(
    
  Employees=>
 
          <option onChange={this.onChangepositionincharge} id="addings" value={Employees.salaryid}>{Employees.position}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select></div>
                    <div class="form-group col-sm-6 flex-column d-flex">  <label class="form-label" for="inputPassword">Manager Incharge<span class="text-danger"> *</span></label>
              <Form.Select  onChange={this.onChangemanagerincharge}  >
      {

this.state.managers.map(
    
  Employees=>
 
          <option onChange={this.onChangemanagerincharge}  id="addings" value={Employees.employeeid}>{Employees.username}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select>
     </div></div>
     <button type="submit" class="btn btn-primary mt-2" style={{marginLeft:315}}  onClick={this.compare}>createEmployee</button><br/>


<ToastContainer />
                   
                </form>


</Card.Body>

</Card><footer> <p style={{marginLeft:300,marginTop:20}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p></footer>

  </div>
  
  </div>
  
  </div>

    

 
      </>  

    )
  }
}

export default CreateNewEmployee;