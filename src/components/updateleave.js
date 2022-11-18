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
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidenavbar_Admin from './Sidenavbar_Admin';
// toast.configure()
//import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



 class updateleave extends Component {
    constructor(props){
        super(props)
         var url=window.location.pathname
        var idds= url.substring(url.lastIndexOf('/') + 1);
console.log("awerawe"+idds);
        this.state={
    
          Eid:'',
          id:idds,
          leavestartdate:'',
          leaveenddate:'',
          totalDays:'',
          category:'',
          reason:'',
          kindof:'',
          Role:sessionStorage.getItem("Role")
    
        }
    
    }

    componentDidMount(){
//         const params = useParams();
// console.log("awerawe"+params);
        EmployeeServices.updateEmployeeleave(this.state.id).then((res) =>{

            //this.setState({leaves:res.data}) res.data
           console.log("respdata "+ JSON.stringify(res.data));
            let employee = res.data;
            console.log("gthisis "+employee.ids);
            // console.log("sefaweaw "+employee.firstName);
            this.setState({
              Eid:employee.ids,
                leavestartdate: employee.leavestartdate,
                leaveenddate : employee.leaveenddate,
                totalDays : employee.totalDays,
                category : employee.category,
                reason : employee.reason,
                kindof:employee.kindof,

            });
        });
    }

    
    
    onChangeleavestartHandler=(event) =>{
    
      this.setState({leavestartdate:event.target.value})
    
    }
    onChangeleaveendHandler=(event) =>{
    
      this.setState({leaveenddate:event.target.value})

      var dateObj = new Date(this.state.leavestartdate);
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      
       var newdate = day + "-" + month + "-" + year;
      
       var Finaldate = parseInt(newdate);
       
       console.log("qwrerzqE"+event.target.value);
      
       var dateObj1 = new Date(event.target.value);
      var month1 = dateObj1.getUTCMonth() + 1; //months from 1-12
      var day1= dateObj1.getUTCDate();
      var year1= dateObj1.getUTCFullYear();
      
       var newdate2 = day1 + "-" + month1 + "-" + year1;
      
       var Finaldate2 = parseInt(newdate2);
       
       console.log("this is finaldate2 "+newdate);
       console.log(typeof ( Finaldate));
      
      console.log("this is new date",newdate);
          var dropdt = new Date(this.state.leavestartdate);
          var pickdt = new Date(event.target.value);
        
          console.log("the startdate",this.state.leavestartdate);
      
          console.log("this.state.leavestartdate "+this.state.leavestartdate);
          console.log("event.target.value "+event.target.value);
          var totalDay =  parseInt((pickdt-dropdt) / (24 * 3600 * 1000));
          console.log(("this is final date"+totalDay));
          this.setState({totalDays:totalDay})
    
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
    onChangekindHandler=(event) =>{

      this.setState({kindof:event.target.value})
    
    }    

    

    compare=(event)=>{
      var a=  sessionStorage.getItem("id")
      console.log("this is id"+a);
      this.setState({id : a});
      console.log(this.state);
    
      event.preventDefault();
     // let history = useHistory();
    
    
    
      let employee={leaveid:this.state.id,ids:this.state.Eid,leavestartdate:this.state.leavestartdate,leaveenddate:this.state.leaveenddate,totalDays:this.state.totalDays
        ,category:this.state.category,kindof:this.state.kindof
        ,reason:this.state.reason};
      console.log('employee =>'+JSON.stringify(employee));
    
      if(this.state.leavestartdate==""){
        toast.warning("please enter the Leave starting date", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1200,
          
      });
      
       }
    
       else if(this.state.totalDays==0){
    
        toast.warning("Can't accept zero days leave", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1200,
          
      });
       }
       else if(this.state.leaveenddate==""){
    
        toast.warning("please enter the Leave Ending date", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1200,
          
      });
       }
    
       else if(this.state.reason==""){
    
        toast.warning("please Enter the Reason", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1200,
          
      });
       }
    
       else if(this.state.kindof==""){
    
        toast.warning("please Select the kind of leave", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1200,
          
      });
       }
    
    
    
       else if(this.state.category==""){
    
        toast.warning("please Select the category", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1200,
          
      });
       }
    
    
    else{
      
      EmployeeServices.leaveApplidEmployee(employee).then(res=>{
     //   navigate('/ManagerEmpDisplay');
    
    //  sessionStorage.setItem("casualLeave",employee.Casualleave)
    
    // localStorage.setItem(res.data.data);
    
    if((res.data.alert)!=undefined){
      toast.error(res.data.alert, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1200,
          
      });
    }
     else if((res.data.alert1)!=undefined){
      toast.error(res.data.alert1, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:2100,
        
    });
    }
    else{
    toast.success(res.data.wfh, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:2100,
      
    });
    
      toast.success(res.data.casualleave, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:2100,
        
    });
    
    toast.success(res.data.sickleave, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:2100,
      
    });
    
    
    toast.success(res.data.Paidleave, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:2100,
      
    });
          console.log("user saved successfully");
    
    console.log(res.data.Paidleave);
    
          if(!(res.data.casualleave == undefined)){
          sessionStorage.setItem("casualleave",res.data.casualleave);}
          if(!(res.data.sickleave==undefined)){
          sessionStorage.setItem("sickleave",res.data.sickleave);}
          if(!(res.data.Paidleave==undefined)){
          sessionStorage.setItem("paidleave",res.data.Paidleave);
          }
       
          const timer = setTimeout(() => {
            window.location.href = '/ListEmpLeaves';
          }, 2100);}
          // window.location.href = '/ListEmpLeaves';
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
<div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <div className="col-md-10 d-flex justify-content-center">

<br />

  <div>

<br/>

  <Card style={{ width: '50rem' 
   }}>

<Card.Body>

<form >

<h3 style={{ 'justify-content': 'center'}}>Update leave</h3>
<div class="row justify-content-between text-left">

<div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
<label class="form-label" for="inputEmail">From</label>
<input type="Date" class="form-control"  name="leavestartdate"
value={this.state.leavestartdate} onChange={this.onChangeleavestartHandler}
  id="inputEmail"  required />
</div></div>
<div class="form-group col-sm-4 flex-column d-flex"><div class="mb-3">
<label class="form-label" for="inputPassword">To</label>
<input type="Date" value={this.state.leaveenddate} onChange={this.onChangeleaveendHandler} onc  class="form-control" id="inputPassword"  name="leaveenddate"  placeholder="Password" required />
</div></div>
<div class="form-group col-sm-4 flex-column d-flex">
<div class="mb-3">
<label class="form-label" for="inputPassword">Number of days</label>
<input type="Number" value={this.state.totalDays}  onChange={this.onChangeTotaldaysHandler}  class="form-control" name="TotalDays"   disabled/>
</div>
</div>
</div>
<div class="row justify-content-between text-left">

<div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
<label class="form-label" for="inputPassword">category</label>


<select  name="category" value={this.state.category}  onChange={this.onChangecategoryHandler}   id="lname" class="form-control form-control-lg">

<option hidden name="category" onChange={this.onChangecategoryHandler}  selected label="Select One...">Select One...</option>
  <option name="category" onChange={this.onChangecategoryHandler}  value="Fever"><strong>Fever</strong>
  </option>
  <option name="category"  onChange={this.onChangecategoryHandler} value="Function"><strong>Function</strong></option>
  <option name="category" onChange={this.onChangecategoryHandler}  value="Outing"><strong>Outing</strong>
  </option>
      
  <option name="category" onChange={this.onChangecategoryHandler}  value="Some other"><strong>Some other</strong></option>

</select>
</div></div>
<div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
<label class="form-label" for="inputPassword">Kind of Leave</label>


<select  name="kindof" value={this.state.kindof} onChange={this.onChangekindHandler}   id="lname" class="form-control form-control-lg">

<option hidden name="kindof" onChange={this.onChangekindHandler}  selected label="Select One...">Select One...</option>
  <option name="kindof" onChange={this.onChangekindHandler}  value="casualleave"><strong>Casual Leave</strong>
  </option>
  <option name="kindof"  onChange={this.onChangekindHandler} value="Paidleave"><strong>Paid Leave</strong></option>
  <option name="kindof" onChange={this.onChangekindHandler}  value="sickleave"><strong>Sick Leave</strong>
  </option>
  
      <option name="category" onChange={this.onChangekindHandler}  value="Workfromhome"><strong>Work from home</strong>
  </option>
</select>
</div></div>
</div>
<div class="row justify-content-between text-left">

<div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
<label class="form-label" for="inputPassword">Reason</label>
<textarea  type="text" id="pass"  value={this.state.reason} onChange={this.onChangeReasonHandler}  name="Reason" class="form-control form-control-lg" rows="2"cols="40"  required></textarea>
</div></div>
<div class="form-group col-sm-4 flex-column d-flex"></div>
</div>
<div class="row justify-content-between text-left">

<div class="form-group col-sm-3 flex-column d-flex"><button type="submit" class="btn btn-primary"   onClick={this.compare}>Update</button></div>



<div class="form-group col-sm-3 flex-column d-flex"><a href="/ListEmpLeaves" class="btn btn-primary" >cancel</a></div>
</div>



</form>
<ToastContainer />
</Card.Body>
</Card>

  </div>
  </div>
  </div>
 
      </>
  
    )
  }
}

export default updateleave;