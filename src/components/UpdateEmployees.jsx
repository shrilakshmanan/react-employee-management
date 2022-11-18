

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
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";
import { MdEditOff } from "react-icons/md";
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import Sidenavbar_Admin from './Sidenavbar_Admin';


var testpos;
 class UpdateEmployees extends Component {
  constructor(props){
    super(props)
    var url=window.location.pathname
    var idds= url.substring(url.lastIndexOf('/') + 1);
console.log("awerawe"+idds);


    this.state={

     // id:sessionStorage.getItem("id"),
     id:idds,
      Username:'',
      isDisabled: true,
      hidden:true,
      jobdescriptions:[],
      managers:[],
      password:'',
      Emailid:'',
      personelmail:'',
      roles:'',
      jobdesc:'',
      ManagerIncharge:'',
      dateofjoining:'',
      projects:[ ],
      projects1:[ ],
status:'',
casualleave:'',
sickleave:'',
paidleave:'',
positions:'',
wfh:'',
employeeid:''
    }
console.log("pos"+this.state.position)
}

editEmployee(id){
  console.log(id);
//Navigate(`/Update-employee/${id}`);
// window.location.href=`/deleteEmployee/${id}`;

window.location.href=`/updateproject/${id}`;

// EmployeeServices.deleteEmployee(id);

}


componentDidMount(){
    //         const params = useParams();
    // console.log("awerawe"+params);
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

     EmployeeServices.getmanagerproject(this.state.id).then((res) =>{
        
      this.setState({projects:res.data})

    var a=  sessionStorage.getItem("id")
   
      this.setState({id:a});
     // console.log(this.state);
      var b=sessionStorage.getItem("Role");
      console.log(b);
      this.setState({Role:b});
      console.log(this.state);

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

            EmployeeServices.UpdateEmployees(this.state.id).then((res) =>{
                
                //this.setState({leaves:res.data}) res.data
               console.log("resspdata "+ JSON.stringify(res.data));
                let employee = res.data;

                this.setState({
             
                  employeeid:employee.employeeid,
                    Username:employee.username,
                    password:employee.password,
                    Emailid:employee.emailid,
                    personelmail:employee.personelmail,
                    roles:employee.roles,  
                    status:employee.employeestatus, 
                    dateofjoining:employee.dateofjoining,
                    ManagerIncharge:employee.managerIncharge,
                    casualleave:employee.casualleave,
                    paidleave:employee.paidleave,
                    sickleave:employee.sickleave,
                    jobdesc:employee.jobdesc,
     positions:employee.salary.position,
     wfh:employee.workfromhome

                });

                testpos=employee.salary.position;
                console.log('testpos'+testpos);
                EmployeeServices.getEmployeeproject(employee.username).then((res) =>{
        
                  console.log("name"+this.state.Username)
                  
                      this.setState({projects1:res.data})
                  
                    var a=  sessionStorage.getItem("id")
                   
                      this.setState({id:a});
                     // console.log(this.state);
                      var b=sessionStorage.getItem("Role");
                      console.log(b);
                      this.setState({Role:b});
                      console.log(this.state);
                  
                  })
                console.log("gthisis "+ employee.employeestatus);
                
    console.log("aefe"+this.state.position);
                // console.log("sefaweaw "+employee.firstName);
                
            });

        }
    
        //     EmployeeServices.managersfind.then((res) =>{
         
        //         console.log(res.data);
        //     this.setState({managers:res.data})
     
        //  var a=  sessionStorage.getItem("id")
              
        //    this.setState({id:a});
        //   console.log(this.state);
        //         var b=sessionStorage.getItem("Role");
        //     console.log(b);
        //          this.setState({Role:b});
        //   console.log(this.state);
    
        //       })
    
    
            

     onChangeemployeename=(event) =>{

  this.setState({Username:event.target.value})

}
handleSubmitClicked() {
  this.setState({
    isDisabled: false,
    hidden:false
  })
}
HandleSubmitClicked() {
  this.setState({
    isDisabled: true,
    hidden:true
  })
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
  onChangepositionincharge=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({jobdesc:event.target.value})
  
  }

  onChangemanagerincharge=(event) =>{




    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({ManagerIncharge:event.target.value})
  
  }

 
  onChangestatusHandler=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({status:event.target.value})
  
  }
 
  onchangecasualLeave=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({casualleave:event.target.value})
  
  }

  onchangesickleave=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({sickleave:event.target.value})
  
  }

  onchangepaidleave=(event) =>{

    console.log("sdgETZWRTzbr  "+event.target.value);
    this.setState({paidleave:event.target.value})
  
  }


compare=(event)=>{
  var a=  sessionStorage.getItem("id")
  console.log("this is id"+a);
  this.setState({id : a});
  console.log(this.state.ManagerIncharge);

  event.preventDefault();
 // let history = useHistory();
//jobdesc:this.state.jobdesc,


 let employee={username:this.state.Username,password:this.state.password,emailid:this.state.Emailid,roles:this.state.roles,jobdesc:this.state.jobdesc,managerIncharge:this.state.ManagerIncharge,
    personelmail:this.state.personelmail,casualleave:this.state.casualleave,paidleave:this.state.paidleave,sickleave:this.state.sickleave,employeestatus:this.state.status,roles:this.state.roles};
  console.log('employee =>'+JSON.stringify(employee));

  EmployeeServices.Updateemployeelate(employee,this.state.employeeid).then((res)=>{
 //   navigate('/ManagerEmpDisplay');

 
// localStorage.setItem(res.data.data);

      console.log("user saved successfully");

      toast.warning(res.data.error, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:1200,
        
      });
      
if(!(res.data.success==undefined)){

  toast.success(res.data.success, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1200,
    
  });

      const timer = setTimeout(() => {
        window.location.href = '/AllempDisplay';
      }, 1100);
     // window.location.href = '/AllempDisplay';
  //    history.push("./components/managerEmpDisplay") 
   //  this. props.history.push("/managerEmpDisplay");
      // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />

  }
  // this.redirect()
  
      
      
      

}) 
}
  render() {
    return (

     this.state.roles=="Manager"?
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
  <Card className='p-2' style={{ width: '50rem' 
   }}>
<h3 style={{ 'justify-content': 'center'}}>{this.state.Username+"'s"} Details{
     
     this.state.isDisabled ==true ? <>  <a className='text-right m-2' ><button onClick={this.handleSubmitClicked.bind(this)} className=' btn btn-primary ' >Edit</button></a></>:
     <><a className='text-right m-2' ><button onClick={this.HandleSubmitClicked.bind(this)} className=' btn btn-primary'>View</button></a></>
     }</h3>


<Card.Body>



<form class="form-card" >
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputEmail">Employee Name</label>
    <input type="text" class="form-control" 	disabled={this.state.isDisabled} placeholder='enter the name '  name="Username"
     value={this.state.Username} onChange={this.onChangeemployeename}  id="inputEmail"  required />
</div>
</div>
                        <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Password</label>
    <input type="text" 	disabled={this.state.isDisabled} value={this.state.password}  placeholder='enter the password' name="password" onChange={this.onChangepassword}  class="form-control" id="inputPasword"   required />
</div>  </div>
                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">company mail_id</label>
    <input type="email" 	disabled={this.state.isDisabled} value={this.state.Emailid}  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>
</div> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputPassword">personel mail_id</label>
    <input type="email" 	disabled={this.state.isDisabled} value={this.state.personelmail}  placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>
</div>
      </div> <div class="row justify-content-between text-left">
      <div class="form-group col-sm-6 flex-column d-flex"><label class="form-label" for="inputPassword">Manager Incharge</label>
              <Form.Select 	disabled={this.state.isDisabled} onChange={this.onChangemanagerincharge} value={this.state.ManagerIncharge} >
      {

this.state.managers.map(
    
  Employees=>
 
          <option onChange={this.onChangemanagerincharge}  id="addings" value={Employees.employeeid}>{Employees.username}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select> </div>
      <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Date of joining</label>
    <input type="date" 	disabled={this.state.isDisabled} value={this.state.dateofjoining}  onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"   required='true'/>
</div>
 </div>

 <div class="row justify-content-between text-left">
 <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">casual Leave</label>
    <input type="number" 	disabled={this.state.isDisabled} value={this.state.casualleave}  onChange={this.onchangecasualLeave} class="form-control" name="casual"   required='true'/>
</div></div>
 <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Paid Leave</label>
    <input type="number" 	disabled={this.state.isDisabled} value={this.state.paidleave}  onChange={this.onchangepaidleave} class="form-control" name="Emailid"   required='true'/>
</div></div>
 <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">sick Leave</label>
    <input type="number" 	disabled={this.state.isDisabled} value={this.state.sickleave}  onChange={this.onchangesickleave} class="form-control" name="Emailid"   required='true'/>
</div></div>
 </div>
 
 <div class="row justify-content-between text-left">



 <div class="form-group col-sm-6 flex-column d-flex">  <div class="form-outline mb-3">
											<label for="stste"><>Employee Status</></label>
											<br />
											<select 	disabled={this.state.isDisabled} onChange={this.onChangestatusHandler}   value={this.state.status}	class="form-control form-control-md" name="status" id="Rna">
												<option hidden selected  value={this.state.status} >{this.state.status}</option>
											
												<option onChange={this.onChangestatusHandler} value="Current"><strong>Current Employee</strong></option>
												<option onChange={this.onChangestatusHandler}  value="former"><strong>Former Employee</strong>
												</option>
                        <option onChange={this.onChangestatusHandler}  value="Wrongemployee"><strong>Added by Mistake</strong>
												</option>
											</select>
										</div>
                    
                    <label for="stste"><>Employee Position</></label>
             
                    <Form.Select 	disabled={this.state.isDisabled}  onChange={this.onChangepositionincharge} value={this.state.posi}>
      {

this.state.jobdescriptions.map(
    
  Employees=>
 
          <option selected={this.state.positions} onChange={this.onChangepositionincharge}  id="ngs" value={Employees.salaryid}>{Employees.position}
         
           </option>
    
       
        ) } 
        </Form.Select>
</div>
<div class="form-group col-sm-6 flex-column d-flex">
{/* <label class="form-label" for="inputPassword">Position<span class="text-danger"> *</span></label>
              <Form.Select   onChange={this.onChangepositionincharge} >
      {
   

this.state.jobdescriptions.map(
    
  Employees=>
 
          <option onChange={this.onChangepositionincharge} id="addings" value={Employees.salaryid}>{Employees.position}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select> */}
       <div class="form-outline mb-3">
											<label for="Roles"><>Choose the Role<span class="text-danger"> </span></></label>
											<br />
											<select 	disabled={this.state.isDisabled}  onChange={this.onChangeReasonHandler} value={this.state.roles} 	class="form-control form-control-md" name="roles" id="Rname">
												<option hidden selected label=" Select One..." >Select One...</option>
											
												<option onChange={this.onChangeReasonHandler} value="Employee"><strong>Employee</strong></option>
												<option onChange={this.onChangeReasonHandler}  value="Manager"><strong>Manager</strong>
												</option>
	
	
											</select>
										</div>
                    
                    
</div>
 </div>
      </div>


                    </div>
</form>


<div class="row justify-content-between text-left">
<div class="form-group col-sm-6 flex-column d-flex">

<div>
      
       
      <br></br>
      
      <div className='row ml-5'>
<div id="thirdTable">

<table  className='table table-hover' style={{border:'0px solid transparent'}} >

<thead  >

<tr >    
<th scope='col' > Serial number</th>
    <th scope='col'> Project Name</th>
    <th scope='col'> Project Startdate</th>
    <th scope='col'> Project Enddate</th> 
    <th scope='col'> Project description</th> 
    <th scope='col'> Status</th>
   


    <th scope='col'> Action</th>
    <th></th>
    </tr>

</thead>


<tbody>
{

this.state.projects.map(
    
   ( projects,index)=>


    <tr key={projects.projectid}>
    <td >{index+1}</td>
    
    <td>{projects.projectname}</td>
<td>{projects.startdate }</td>
<td>{projects.enddate}</td>
<td>{projects.projectdescription}</td>
<td>{projects.status}</td>




 <td><a onClick={ () =>  this.editEmployee(projects.projectid)} ><AiFillEye 	hidden={this.state.hidden} style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>
</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)

}

</tbody>


</table>

</div>
</div>
            </div>
</div>
</div>

<button type="submit" class="btn btn-primary" style={{marginLeft:305}} 	hidden={this.state.hidden} onClick={this.compare}>UpdateEmployee</button><br/>

<ToastContainer />




{/* <form >
<h3 style={{ 'justify-content': 'center'}}>Update Employee</h3>
<div class="mb-3">
    <label class="form-label" for="inputEmail">Employee Name</label>
    <input type="text" class="form-control" placeholder='enter the name '  name="Username"
     value={this.state.Username} onChange={this.onChangeemployeename}  id="inputEmail"  required />
</div>

<div class="mb-3">
    <label class="form-label" for="inputPassword">Password</label>
    <input type="password" value={this.state.password}  placeholder='enter the password' name="password" onChange={this.onChangepassword}  class="form-control" id="inputPasword"   required />
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">company mail_id</label>
    <input type="email" value={this.state.Emailid}  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>
</div>
 <label class="form-label" for="inputPassword">Manager Incharge</label>
              <Form.Select  onChange={this.onChangemanagerincharge} value={this.state.ManagerIncharge} >
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
     

<div class="mb-3">
    <label class="form-label" for="inputPassword">Date of joining</label>
    <input type="date" value={this.state.dateofjoining}  onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"   required='true'/>
</div>


		
<div class="mb-3">
    <label class="form-label" for="inputPassword">personel mail_id</label>
    <input type="email" value={this.state.personelmail}  placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">casual Leave</label>
    <input type="number" value={this.state.casualleave}  onChange={this.onchangecasualLeave} class="form-control" name="casual"   required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">Paid Leave</label>
    <input type="number" value={this.state.paidleave}  onChange={this.onchangepaidleave} class="form-control" name="Emailid"   required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">sick Leave</label>
    <input type="number" value={this.state.sickleave}  onChange={this.onchangesickleave} class="form-control" name="Emailid"   required='true'/>
</div>
	<div class="form-outline mb-4">
											<label for="Roles"><>Choose the Role</></label>
											<br />
											<select  onChange={this.onChangeReasonHandler} value={this.state.roles} 	class="form-control form-control-lg" name="roles" id="Rname">
												<option hidden selected label=" Select One..." >Select One...</option>
											
												<option onChange={this.onChangeReasonHandler} value="Employee"><strong>Employee</strong></option>
												<option onChange={this.onChangeReasonHandler}  value="Manager"><strong>Manager</strong>
												</option>
	
	
											</select>
										</div>

                                        <div class="form-outline mb-4">
											<label for="stste"><>Employee Status</></label>
											<br />
											<select  onChange={this.onChangestatusHandler}   value={this.state.status}	class="form-control form-control-lg" name="status" id="Rna">
												<option hidden selected  value={this.state.status} >{this.state.status}</option>
											
												<option onChange={this.onChangestatusHandler} value="Current"><strong>Current Employee</strong></option>
												<option onChange={this.onChangestatusHandler}  value="former"><strong>Former Employee</strong>
												</option>
                        <option onChange={this.onChangestatusHandler}  value="Wrongemployee"><strong>Added by Mistake</strong>
												</option>
											</select>
										</div>

              

           
          

<br />




<button type="submit" class="btn btn-primary" style={{marginLeft:65}}  onClick={this.compare}>UpdateEmployee</button><br/>

<ToastContainer />

</form> */}
</Card.Body>

</Card>
  <footer> <p style={{marginLeft:280,marginTop:8}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p></footer>
    

  </div>
  </div>
  </div>

    

 
      </> :sessionStorage.getItem("Role")=="Manager" ?<>
      <> 
<div className='row' style={{"overflow-x":"hidden"}}>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <div className="col-md-10 d-flex justify-content-center">

<br />

  <div>




<br/>
<a href="/ManagerEmpDisplay" style={{color:'blue'}}><FaAngleDoubleLeft /> Back</a>
  <Card style={{ width: '50rem' 
   }}>

<Card.Body>
<h3 style={{ 'justify-content': 'center'}}> {this.state.Username+"'s"} Details</h3>
<form class="form-card" >
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex">
</div>
                        <div class="form-group col-sm-6 flex-column d-flex"> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">company mail_id</label>
    <input type="email" value={this.state.Emailid} disabled  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>
</div> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputPassword">personel mail_id</label>
    <input type="email" value={this.state.personelmail} disabled placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>
</div>


      </div> <div class="row justify-content-between text-left">
      <div class="form-group col-sm-6 flex-column d-flex"><label class="form-label" for="inputPassword">Manager Incharge</label>
              <Form.Select  onChange={this.onChangemanagerincharge} disabled  value={this.state.ManagerIncharge} >
      {

this.state.managers.map(
    
  Employees=>
 
          <option disabled onChange={this.onChangemanagerincharge}  id="addings" value={Employees.employeeid}>{Employees.username}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select> </div>
      <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Date of joining</label>
    <input type="date" value={this.state.dateofjoining} disabled onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"   required='true'/>
</div>
 </div>


 <div class="row justify-content-between text-left">
 
 <div class="form-group col-sm-3 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">casual Leave</label>
    <input type="number" value={this.state.casualleave} disabled onChange={this.onchangecasualLeave} class="form-control" name="casual"   required='true'/>
</div></div>
 <div class="form-group col-sm-3 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Paid Leave</label>
    <input type="number" value={this.state.paidleave} disabled onChange={this.onchangepaidleave} class="form-control" name="Emailid"   required='true'/>
</div></div>
 <div class="form-group col-sm-3 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Work from Home</label>
    <input type="number" value={this.state.wfh} disabled onChange={this.onchangepaidleave} class="form-control" name="Emailid"   required='true'/>
</div></div>
 <div class="form-group col-sm-3 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">sick Leave</label>
    <input type="number" value={this.state.sickleave} disabled onChange={this.onchangesickleave} class="form-control" name="Emailid"   required='true'/>
</div></div>
 </div>
 
 <div class="row justify-content-between text-left">

 <div class="form-group col-sm-6 flex-column d-flex">  <div class="form-outline mb-4">
											<label for="stste"><>Employee Status</></label>
											<br />
											<select disabled onChange={this.onChangestatusHandler}   value={this.state.status}	class="form-control form-control-md" name="status" id="Rna">
												<option hidden selected  value={this.state.status} >{this.state.status}</option>
											
												<option onChange={this.onChangestatusHandler} value="Current"><strong>Current Employee</strong></option>
												<option onChange={this.onChangestatusHandler}  value="former"><strong>Former Employee</strong>
												</option>
                        <option onChange={this.onChangestatusHandler}  value="Wrongemployee"><strong>Added by Mistake</strong>
												</option>
											</select>
										</div>
                    <label for="stste"><>Employee Position</></label>
                    <input type="email" value={this.state.positions} disabled placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>

                    
</div>
<div class="form-group col-sm-6 flex-column d-flex">
{/* <label class="form-label" for="inputPassword">Position<span class="text-danger"> *</span></label>
              <Form.Select   onChange={this.onChangepositionincharge} >
      {
   

this.state.jobdescriptions.map(
    
  Employees=>
 
          <option onChange={this.onChangepositionincharge} id="addings" value={Employees.salaryid}>{Employees.position}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select> */}
        <div class="form-outline mb-3">
											<label for="Roles"><> Role<span class="text-danger"> </span></></label>
											<br />
											<select  onChange={this.onChangeReasonHandler} disabled  value={this.state.roles} 	class="form-control form-control-md" name="roles" id="Rname">
												<option hidden selected label=" Select One..." >Select One...</option>
											
												<option onChange={this.onChangeReasonHandler} value="Employee"><strong>Employee</strong></option>
												<option onChange={this.onChangeReasonHandler}  value="Manager"><strong>Manager</strong>
												</option>
	
	
											</select>
										</div>
</div>
 </div>
      </div>


                    </div>
</form>


<div class="row justify-content-between text-left">
<div class="form-group col-sm-6 flex-column d-flex">

<div>
      
       
      <br></br>
      
      
<div className='row ml-5'>
<div id="thirdTable">

<table  className='table table-hover' style={{border:'0px solid transparent'}} >

<thead  >

<tr >    
<th scope='col' > Serial number</th>
    <th scope='col'> Project Name</th>
    <th scope='col'> Project Startdate</th>
    <th scope='col'> Project Enddate</th> 
    <th scope='col'> Status</th>
    <th scope='col'> Manager Incharge</th>


    <th scope='col'> Action</th>
    <th></th>
    </tr>

</thead>


<tbody>
{

this.state.projects1.map(
    
   ( projects1,index)=>


    <tr key={projects1.projectid}>
    <td >{index+1}</td>
    
    <td>{projects1.projectname}</td>
<td>{projects1.startdate }</td>
<td>{projects1.enddate}</td>

<td>{projects1.status}</td>
<td>{projects1.jva_clas1.username}</td>



 <td><a onClick={ () =>  this.editEmployee(projects1.projectid)} ><AiFillEye   style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>
</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)

}

</tbody>


</table>

</div>
</div>
            </div>
</div>
</div>

<ToastContainer />




{/* <form >
<h3 style={{ 'justify-content': 'center'}}>Update Employee</h3>
<div class="mb-3">
    <label class="form-label" for="inputEmail">Employee Name</label>
    <input type="text" class="form-control" placeholder='enter the name '  name="Username"
     value={this.state.Username} onChange={this.onChangeemployeename}  id="inputEmail"  required />
</div>

<div class="mb-3">
    <label class="form-label" for="inputPassword">Password</label>
    <input type="password" value={this.state.password}  placeholder='enter the password' name="password" onChange={this.onChangepassword}  class="form-control" id="inputPasword"   required />
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">company mail_id</label>
    <input type="email" value={this.state.Emailid}  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>
</div>
 <label class="form-label" for="inputPassword">Manager Incharge</label>
              <Form.Select  onChange={this.onChangemanagerincharge} value={this.state.ManagerIncharge} >
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
     

<div class="mb-3">
    <label class="form-label" for="inputPassword">Date of joining</label>
    <input type="date" value={this.state.dateofjoining}  onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"   required='true'/>
</div>


		
<div class="mb-3">
    <label class="form-label" for="inputPassword">personel mail_id</label>
    <input type="email" value={this.state.personelmail}  placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">casual Leave</label>
    <input type="number" value={this.state.casualleave}  onChange={this.onchangecasualLeave} class="form-control" name="casual"   required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">Paid Leave</label>
    <input type="number" value={this.state.paidleave}  onChange={this.onchangepaidleave} class="form-control" name="Emailid"   required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">sick Leave</label>
    <input type="number" value={this.state.sickleave}  onChange={this.onchangesickleave} class="form-control" name="Emailid"   required='true'/>
</div>
	<div class="form-outline mb-4">
											<label for="Roles"><>Choose the Role</></label>
											<br />
											<select  onChange={this.onChangeReasonHandler} value={this.state.roles} 	class="form-control form-control-lg" name="roles" id="Rname">
												<option hidden selected label=" Select One..." >Select One...</option>
											
												<option onChange={this.onChangeReasonHandler} value="Employee"><strong>Employee</strong></option>
												<option onChange={this.onChangeReasonHandler}  value="Manager"><strong>Manager</strong>
												</option>
	
	
											</select>
										</div>

                                        <div class="form-outline mb-4">
											<label for="stste"><>Employee Status</></label>
											<br />
											<select  onChange={this.onChangestatusHandler}   value={this.state.status}	class="form-control form-control-lg" name="status" id="Rna">
												<option hidden selected  value={this.state.status} >{this.state.status}</option>
											
												<option onChange={this.onChangestatusHandler} value="Current"><strong>Current Employee</strong></option>
												<option onChange={this.onChangestatusHandler}  value="former"><strong>Former Employee</strong>
												</option>
                        <option onChange={this.onChangestatusHandler}  value="Wrongemployee"><strong>Added by Mistake</strong>
												</option>
											</select>
										</div>

              

           
          

<br />




<button type="submit" class="btn btn-primary" style={{marginLeft:65}}  onClick={this.compare}>UpdateEmployee</button><br/>

<ToastContainer />

</form> */}
</Card.Body>

</Card>
 <p style={{marginLeft:555}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p>
     
  </div>
  </div>
  </div>

    

 
      </>
      </> :<>
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

<h3 style={{ 'justify-content': 'center'}}>{this.state.Username+"'s"} Details{
     
     this.state.isDisabled ==true ? <>  <a className='text-right m-2' ><button onClick={this.handleSubmitClicked.bind(this)} className=' btn btn-primary ' >Edit</button></a></>:
     <><a className='text-right m-2' ><button onClick={this.HandleSubmitClicked.bind(this)} className=' btn btn-primary'>View</button></a></>
     }</h3>
<form class="form-card" >
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputEmail">Employee Name</label>
    <input type="text" disabled={this.state.isDisabled} class="form-control" placeholder='enter the name '  name="Username"
     value={this.state.Username} onChange={this.onChangeemployeename}  id="inputEmail"  required />
</div>
</div>
                        <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Password</label>
    <input type="text" disabled={this.state.isDisabled} value={this.state.password}  placeholder='enter the password' name="password" onChange={this.onChangepassword}  class="form-control" id="inputPasword"   required />
</div>  </div>
                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">company mail_id</label>
    <input type="email" disabled={this.state.isDisabled} value={this.state.Emailid}  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>
</div> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputPassword">personel mail_id</label>
    <input type="email" disabled={this.state.isDisabled} value={this.state.personelmail}  placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>
</div>
      </div> <div class="row justify-content-between text-left">
      <div class="form-group col-sm-6 flex-column d-flex"><label class="form-label" for="inputPassword">Manager Incharge</label>
              <Form.Select disabled={this.state.isDisabled}  onChange={this.onChangemanagerincharge} value={this.state.ManagerIncharge} >
      {

this.state.managers.map(
    
  Employees=>
 
          <option onChange={this.onChangemanagerincharge}  id="addings" value={Employees.employeeid}>{Employees.username}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select> </div>
      <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Date of joining</label>
    <input type="date" disabled={this.state.isDisabled} value={this.state.dateofjoining}  onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"   required='true'/>
</div>
 </div>

 <div class="row justify-content-between text-left">
 <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">casual Leave</label>
    <input type="number" disabled={this.state.isDisabled} value={this.state.casualleave}  onChange={this.onchangecasualLeave} class="form-control" name="casual"   required='true'/>
</div></div>
 <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Paid Leave</label>
    <input type="number" disabled={this.state.isDisabled} value={this.state.paidleave}  onChange={this.onchangepaidleave} class="form-control" name="Emailid"   required='true'/>
</div></div>
 <div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">sick Leave</label>
    <input type="number" disabled={this.state.isDisabled} value={this.state.sickleave}  onChange={this.onchangesickleave} class="form-control" name="Emailid"   required='true'/>
</div></div>
 </div>
 
 <div class="row justify-content-between text-left">

 <div class="form-group col-sm-6 flex-column d-flex">  <div class="form-outline mb-4">
											<label for="stste"><>Employee Status</></label>
											<br />
											<select disabled={this.state.isDisabled} onChange={this.onChangestatusHandler}   value={this.state.status}	class="form-control form-control-md" name="status" id="Rna">
												<option hidden selected  value={this.state.status} >{this.state.status}</option>
											
												<option onChange={this.onChangestatusHandler} value="Current"><strong>Current Employee</strong></option>
												<option onChange={this.onChangestatusHandler}  value="former"><strong>Former Employee</strong>
												</option>
                        <option onChange={this.onChangestatusHandler}  value="Wrongemployee"><strong>Added by Mistake</strong>
												</option>
											</select>
										</div>
                    <label for="stste"><>Employee Position</></label>
             
             <Form.Select disabled={this.state.isDisabled}  onChange={this.onChangepositionincharge} value={this.state.posi}>
{

this.state.jobdescriptions.map(

Employees=>

   <option selected={this.state.positions} onChange={this.onChangepositionincharge}  id="ngs" value={Employees.salaryid}>{Employees.position}
  
    </option>


 ) } 
 </Form.Select>
</div>
<div class="form-group col-sm-6 flex-column d-flex">
{/* <label class="form-label" for="inputPassword">Position<span class="text-danger"> *</span></label>
              <Form.Select   onChange={this.onChangepositionincharge} >
      {
   

this.state.jobdescriptions.map(
    
  Employees=>
 
          <option onChange={this.onChangepositionincharge} id="addings" value={Employees.salaryid}>{Employees.position}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select> */}
        <div class="form-outline mb-3">
											<label for="Roles"><>Choose the Role<span class="text-danger"> </span></></label>
											<br />
											<select disabled={this.state.isDisabled} onChange={this.onChangeReasonHandler}   value={this.state.roles} 	class="form-control form-control-md" name="roles" id="Rname">
												<option hidden selected label=" Select One..." >Select One...</option>
											
												<option onChange={this.onChangeReasonHandler} value="Employee"><strong>Employee</strong></option>
												<option onChange={this.onChangeReasonHandler}  value="Manager"><strong>Manager</strong>
												</option>
	
	
											</select>
										</div>
</div>
 </div>
      </div>


                    </div>
</form>


<div class="row justify-content-between text-left">
<div class="form-group col-sm-6 flex-column d-flex">

<div>
      
       
      <br></br>
      
      
<div className='row ml-5'>
<div id="thirdTable">

<table  className='table table-hover' style={{border:'0px solid transparent'}} >

<thead  >

<tr >    
<th scope='col' > Serial number</th>
    <th scope='col'> Project Name</th>
    <th scope='col'> Project Startdate</th>
    <th scope='col'> Project Enddate</th> 
    <th scope='col'> Status</th>
    <th scope='col'> Manager Incharge</th>


    <th scope='col'> Action</th>
    <th></th>
    </tr>

</thead>


<tbody>
{

this.state.projects1.map(
    
   ( projects1,index)=>


    <tr key={projects1.projectid}>
    <td >{index+1}</td>
    
    <td>{projects1.projectname}</td>
<td>{projects1.startdate }</td>
<td>{projects1.enddate}</td>

<td>{projects1.status}</td>
<td>{projects1.jva_clas1.username}</td>



 <td><a onClick={ () =>  this.editEmployee(projects1.projectid)} ><AiFillEye  	hidden={this.state.hidden} style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>
</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)

}

</tbody>


</table>

</div>
</div>
            </div>
</div>
</div>

<button type="submit" class="btn btn-primary" style={{marginLeft:305}} 	hidden={this.state.hidden} onClick={this.compare}>UpdateEmployee</button><br/>

<ToastContainer />




{/* <form >
<h3 style={{ 'justify-content': 'center'}}>Update Employee</h3>
<div class="mb-3">
    <label class="form-label" for="inputEmail">Employee Name</label>
    <input type="text" class="form-control" placeholder='enter the name '  name="Username"
     value={this.state.Username} onChange={this.onChangeemployeename}  id="inputEmail"  required />
</div>

<div class="mb-3">
    <label class="form-label" for="inputPassword">Password</label>
    <input type="password" value={this.state.password}  placeholder='enter the password' name="password" onChange={this.onChangepassword}  class="form-control" id="inputPasword"   required />
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">company mail_id</label>
    <input type="email" value={this.state.Emailid}  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>
</div>
 <label class="form-label" for="inputPassword">Manager Incharge</label>
              <Form.Select  onChange={this.onChangemanagerincharge} value={this.state.ManagerIncharge} >
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
     

<div class="mb-3">
    <label class="form-label" for="inputPassword">Date of joining</label>
    <input type="date" value={this.state.dateofjoining}  onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"   required='true'/>
</div>


		
<div class="mb-3">
    <label class="form-label" for="inputPassword">personel mail_id</label>
    <input type="email" value={this.state.personelmail}  placeholder='enter the personel mail' onChange={this.onChangepersonelmailHandler} class="form-control" name="Emailid"  id="intPassword"  required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">casual Leave</label>
    <input type="number" value={this.state.casualleave}  onChange={this.onchangecasualLeave} class="form-control" name="casual"   required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">Paid Leave</label>
    <input type="number" value={this.state.paidleave}  onChange={this.onchangepaidleave} class="form-control" name="Emailid"   required='true'/>
</div>
<div class="mb-3">
    <label class="form-label" for="inputPassword">sick Leave</label>
    <input type="number" value={this.state.sickleave}  onChange={this.onchangesickleave} class="form-control" name="Emailid"   required='true'/>
</div>
	<div class="form-outline mb-4">
											<label for="Roles"><>Choose the Role</></label>
											<br />
											<select  onChange={this.onChangeReasonHandler} value={this.state.roles} 	class="form-control form-control-lg" name="roles" id="Rname">
												<option hidden selected label=" Select One..." >Select One...</option>
											
												<option onChange={this.onChangeReasonHandler} value="Employee"><strong>Employee</strong></option>
												<option onChange={this.onChangeReasonHandler}  value="Manager"><strong>Manager</strong>
												</option>
	
	
											</select>
										</div>

                                        <div class="form-outline mb-4">
											<label for="stste"><>Employee Status</></label>
											<br />
											<select  onChange={this.onChangestatusHandler}   value={this.state.status}	class="form-control form-control-lg" name="status" id="Rna">
												<option hidden selected  value={this.state.status} >{this.state.status}</option>
											
												<option onChange={this.onChangestatusHandler} value="Current"><strong>Current Employee</strong></option>
												<option onChange={this.onChangestatusHandler}  value="former"><strong>Former Employee</strong>
												</option>
                        <option onChange={this.onChangestatusHandler}  value="Wrongemployee"><strong>Added by Mistake</strong>
												</option>
											</select>
										</div>

              

           
          

<br />




<button type="submit" class="btn btn-primary" style={{marginLeft:65}}  onClick={this.compare}>UpdateEmployee</button><br/>

<ToastContainer />

</form> */}
</Card.Body>

</Card>
 <footer> <p style={{marginLeft:280,marginTop:8}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p></footer>
    
  </div>
  </div>
  </div>

    

 
      </> 
      
      </>

    )
  }
}

export default UpdateEmployees;
