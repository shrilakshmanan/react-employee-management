import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterLogin from '../components/AfterLogin';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import ListEmpLeaves from './ListEmpLeaves';
import EmployeeServices from './Serviceclass';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { useParams } from "react-router-dom";   
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import { FaAngleDoubleLeft, FaTextWidth } from "react-icons/fa";
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 class updateleaveAdmin extends Component {
    constructor(props){
        super(props)
         var url=window.location.pathname
        var idds= url.substring(url.lastIndexOf('/') + 1);
console.log("ids"+idds)
        this.state={    
          leaveid:idds,
          employeeid:'',
          leavestartdate:'',
          leaveenddate:'',
          totalDays:'',
          category:'',
          reason:'',
          isDisabled: false,
          status:'',
          kindof:'',
          username:'',
          Role:sessionStorage.getItem("Role"),
          employees:[ ],
        }
  console.log("Efweg"+this.state.id)  
    }

    componentDidMount(){
     
//         const params = useParams();
// console.log("awerawe"+params);
        EmployeeServices.updateEmployeeleave(this.state.leaveid).then((res) =>{

            //this.setState({leaves:res.data}) res.data
           console.log("respdata "+ JSON.stringify(res.data));
            let employee = res.data;
            console.log("gthisis "+employee.ids);
            // console.log("sefaweaw "+employee.firstName);
            this.setState({
                leavestartdate: employee.leavestartdate,
                leaveenddate : employee.leaveenddate,
                totalDays : employee.totalDays,
                category : employee.category,
                reason : employee.reason,
                status:employee.status,
                employeeid:employee.ids,
                kindof:employee.kindof,
                username:employee.jva_clas.username,
                eid:employee.employeeid
            });

     
        EmployeeServices.getEmployeesLeavecount(employee.ids).then((res) =>{
      

          this.setState({employees:res.data.leaves})
  
          this.setState({queriesclear:res.data.Totalqueryres})
          this.setState({queries:res.data.Totalquery})
  
        
         console.log(res.data);
  
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
    });
    }

    
    onChangeleavestartHandler=(event) =>{
    
      this.setState({leavestartdate:event.target.value})
    
    }
    onChangeleaveendHandler=(event) =>{
    
      this.setState({leaveenddate:event.target.value})
    
    }
    onChangeTotaldaysHandler=(event) =>{
    
      this.setState({totalDays:event.target.value})
    
    }
    onChangecategoryHandler=(event) =>{
    
      this.setState({category:event.target.value})
    
    }
    onChangeReasonHandler=(event) =>{
    
      this.setState({reason:event.target.value})
    
    }
    onChangestatusHandler=(event) =>{
        this.setState({status:event.target.value})
    }                                                                                                                               
    
    compare=(event)=>{
      var a=  sessionStorage.getItem("id")
      console.log("this is id"+a);
      this.setState({id : a});
      console.log(this.state);
    
      event.preventDefault();
     // let history = useHistory();
    
    var ids=this.state.id;
      let employee={ids:this.state.employeeid,  username:this.state.username, leavestartdate:this.state.leavestartdate, leaveenddate :this.state.leaveenddate,status:this.state.status,kindof:this.state.kindof,totalDays:this.state.totalDays};

      console.log('employee =>'+JSON.stringify(employee));
    
      console.log("value of res",this.state.id)

      {
      this.setState({
        isDisabled: 'false',
     
      });}
      EmployeeServices.updateAdminleave(employee,this.state.leaveid).then((res)=>{
     //   navigate('/ManagerEmpDisplay');
    console.log("value of res",res)
     
    // localStorage.setItem(res.data.data);
    
          console.log("user saved successfully");
          this.setState({
            isDisabled: 'true',
         
          });
          toast.success("Updated successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1200,
            
          });
          
          
 const timer = setTimeout(() => {
  window.location.href = '/AdminLeave';
}, 1700);

         // window.location.href = '/AdminLeave';
      //    history.push("./components/managerEmpDisplay") 
       //  this. props.history.push("/managerEmpDisplay");
          // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />
    
      })
      // this.redirect()
       
        

    } 
  render() {
    return (
    <div>
  {this.state.isDisabled!='false'?

    
<Container >

<div hidden className="loader-container" ></div>
  <div hidden  className="spinner"></div>

  </Container>:<></>
}
<div className='row'>
        <div className="col-sm-2">
        {this.state.isDisabled=='false'?

   
        <div  className="loader-container" ></div>:<></>
        }
        <Sidenavbar_Admin />
  </div>
  
  <div className="col-md-10 d-flex justify-content-center">
  

<br />

  <div>


<br/>
{/* <button type="submit" class="btn btn-primary"  ><a href="/ListEmpLeaves" style={{color:'white'}}>back </a></button> */}
<a href="/AdminLeave" style={{color:'blue'}}><FaAngleDoubleLeft />Back </a>
  <Card style={{ width: '50rem' 
   }}>

<Card.Body>
<h3 style={{ 'justify-content': 'center'}}>Update leave</h3>

<form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputEmail">Employee name</label>
    <input type="text" class="form-control"  name="leavestartdate"
     value={this.state.username} onChange={this.onChangeleavestartHandler} disabled id="inputEmail"  required />
</div> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label"  for="inputPassword" value={this.state.kindof}>Kind of Leave</label>
							
								
								<select value={this.state.kindof}   disabled name="kindof" onChange={this.onChangekindHandler}   id="lname" class="form-control form-control-md">
								
									<option hidden name="kindof" onChange={this.onChangekindHandler}  selected label="Select One...">Select One...</option>
											<option name="kindof" onChange={this.onChangekindHandler}  value="casualleave"><strong>Casual Leave</strong>
											</option>
											<option name="kindof"  onChange={this.onChangekindHandler} value="Paidleave"><strong>Paid Leave</strong></option>
											<option name="kindof" onChange={this.onChangekindHandler}  value="sickleave"><strong>Sick Leave</strong>
											</option>
                      
													<option name="category" onChange={this.onChangekindHandler}  value="Workfromhome"><strong>Work from home</strong>
											</option>
								</select>
							</div>	 </div>
                    </div>

                 
                   
<table className='table'>

<thead>

<tr>


    
    </tr>

</thead>


<tbody>
{

this.state.employees.map(
    
  employees=>
    <tr key={employees.employeeid }>

    <div class="row justify-content-between text-left">
    <div class="form-group col-sm-3 flex-column d-flex"> <div class="mb-1">
    <label class="form-label" for="inputEmail">Work from home</label>
    <input type="text" class="form-control"  name="leavess"
     value={employees.workfromhome}  disabled id="inputEmail"  required />
</div></div>
                    <div class="form-group col-sm-3 flex-column d-flex"><div class="mb-1">
    <label class="form-label" for="inputEmail">Available Casual Leave</label>
    <input type="text" class="form-control"  name="leavestartdate"
     value={employees.casualleave}  disabled id="inputEmail"  required />
</div>
</div>
                    <div class="form-group col-sm-3 flex-column d-flex"><div class="mb-1">
    <label class="form-label" for="inputEmail">Available Paid Leave</label>
    <input type="text" class="form-control"  name="leavestartdate"
     value={employees.paidleave}  disabled id="inputEmail"  required />
</div></div>
                    <div class="form-group col-sm-3 flex-column d-flex"><div class="mb-1">
    <label class="form-label" for="inputEmail">Available Sick Leave</label>
    <input type="text" class="form-control"  name="leavestartdate"
     value={employees.sickleave}  disabled id="inputEmail"  required />
</div>
</div>
                    </div>
                    </tr>




// <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}
</tbody>
</table>
                  
                  <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputEmail">From</label>
    <input type="date" class="form-control"  name="leavestartdate"
     value={this.state.leavestartdate} onChange={this.onChangeleavestartHandler} disabled id="inputEmail"  required />
</div> </div>
                  <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">To</label>
    <input type="date" value={this.state.leaveenddate} onChange={this.onChangeleaveendHandler} disabled  class="form-control" id="inputPassword"  name="leaveenddate"  placeholder="Password" required />
</div></div>
                  </div>
                  <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Number of days</label>
    <input type="Number" value={this.state.totalDays} disabled onChange={this.onChangeTotaldaysHandler}  class="form-control" name="TotalDays"  id="inputPassword"  required/>
</div></div>
                  <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label"  for="inputPassword" value={this.state.kindof}>Kind of Leave</label>
							
								
								<select value={this.state.kindof}   disabled name="kindof" onChange={this.onChangekindHandler}   id="lname" class="form-control form-control-md">
								
									<option hidden name="kindof" onChange={this.onChangekindHandler}  selected label="Select One...">Select One...</option>
											<option name="kindof" onChange={this.onChangekindHandler}  value="casualleave"><strong>Casual Leave</strong>
											</option>
											<option name="kindof"  onChange={this.onChangekindHandler} value="Paidleave"><strong>Paid Leave</strong></option>
											<option name="kindof" onChange={this.onChangekindHandler}  value="sickleave"><strong>Sick Leave</strong>
											</option>
                      
													<option name="category" onChange={this.onChangekindHandler}  value="Workfromhome"><strong>Work from home</strong>
											</option>
								</select>
							</div>	</div>

                  </div>

                  <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputPassword">category</label>
							
								
								<select disabled value={this.state.category} name="category" onChange={this.onChangecategoryHandler}   id="lname" class="form-control form-control-lg">
                                {/* <select value={this.state.category} onChange={this.handleChange}>     			 */}
									<option hidden name="category" onChange={this.onChangecategoryHandler}  label="Select One...">Select One...</option>
											<option name="category" onChange={this.onChangecategoryHandler}  value="Fever"><strong>Fever</strong>
											</option>
											<option name="category"  onChange={this.onChangecategoryHandler} value="Function"><strong>Function</strong></option>
											<option name="category" onChange={this.onChangecategoryHandler}  value="Outing"><strong>Outing</strong>
											</option>
													<option name="category" onChange={this.onChangecategoryHandler}  value="Outingb"><strong>Work from home</strong>
											</option>
											<option name="category" onChange={this.onChangecategoryHandler}  value="Some other"><strong>Some other</strong></option>

								</select>
							</div> </div>
                  <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Reason</label>
    <textarea  type="text" id="pass" value={this.state.reason} onChange={this.onChangeReasonHandler} name="Reason" class="form-control form-control-lg" rows="2"cols="40" disabled required></textarea>
</div></div>
</div>

<div class="row justify-content-between text-left">
<div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Status</label>
							
								
								<select value={this.state.status} name="status" onChange={this.onChangestatusHandler}   id="lname" class="form-control form-control-lg">
                                {/* <select value={this.state.category} onChange={this.handleChange}>     			 */}
									<option hidden name="status" onChange={this.onChangestatusHandler}  label="Select One...">Pending</option>
											<option name="status" onChange={this.onChangestatusHandler}  value="Accept"><strong>Accept</strong>
											</option>
											<option name="status"  onChange={this.onChangestatusHandler} value="Reject"><strong>Reject</strong></option>

								</select>
							</div></div>
 <div class="form-group col-sm-6 flex-column d-flex"></div>
</div>

<div class="row justify-content-between text-left">
<div class="form-group col-sm-6 flex-column d-flex">
<div class="form-group col-sm-6 flex-column d-flex"><button type="submit" class="btn btn-primary"   onClick={this.compare}>Updateleave</button></div>
</div>

 <div class="form-group col-sm-3 flex-column d-flex">
 <button type="button" class="btn btn-primary"   >	<a href="/AdminLeave" style={{color:'white',textDecoration:'none'}}>Back </a></button><br/>
</div>
</div>
<ToastContainer />
</form>

</Card.Body>
</Card>
 <p style={{marginLeft:280,marginTop:35}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p>
  </div>
  </div>
  </div>

    

 </div>
 
  
    )
  }
}

export default updateleaveAdmin;