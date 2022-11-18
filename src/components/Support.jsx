import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterLogin from '../components/AfterLogin';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import ListEmpLeaves from './ListEmpLeaves';
import EmployeeServices from './Serviceclass';
import ListQueries from './ListQueries';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';

import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import Sidenavbar_Admin  from './Sidenavbar_Admin';
 class Support extends Component {
  constructor(props){
    super(props)

    this.state={

      id:sessionStorage.getItem("id"),
      category:'',
      queries:''

    }


}

onChangecategoryHandler=(event) =>{

  this.setState({category:event.target.value})

}
onChangeReasonHandler=(event) =>{

  this.setState({queries:event.target.value})

}

compare=(event)=>{
  var a=  sessionStorage.getItem("id")
  console.log("this is id"+a);
  this.setState({id : a});
  console.log(this.state);

  event.preventDefault();
 // let history = useHistory();


  let employee={ids:this.state.id,category:this.state.category,queries:this.state.queries};
  console.log('employee =>'+JSON.stringify(employee));

if(this.state.category==""){
  toast.warning('Please select the category', {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
});

}
else if(this.state.queries==""){
  toast.warning('Please enter Your comments', {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
});

}
else{
  EmployeeServices.Support(employee).then(res=>{
 //   navigate('/ManagerEmpDisplay');

 
// localStorage.setItem(res.data.data);

      console.log("user saved successfully");
  
      toast.success('query sent successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:980,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
    });

      var a=sessionStorage.getItem("querycount");
      
      console.log(a);
      sessionStorage.setItem("querycount",a);

      const timer = setTimeout(() => {
        window.location.href = '/ListQueries';
      }, 1300);

      // window.location.href = '/ListQueries';
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
        <div className="col-md-2">
        <Sidenavbar_Admin />
  </div>
  <div  className="col-md-10  d-flex justify-content-center">

<br />

  <div  className='mt-5' > 


  <Card className='shadow-lg  mb-5 bg-white rounded' style={{ width: '22rem' }}>

<Card.Body>



<form>
					
              <div class="mb-5">
              <h3> Raise query</h3>
    <label class="form-label" for="inputPassword">category</label>
							
								
								<select  name="category" onChange={this.onChangecategoryHandler}   id="lname" class="form-control form-control-lg">
								
									<option hidden name="category" onChange={this.onChangecategoryHandler}  selected label="Select One...">Select One...</option>
											<option name="category" onChange={this.onChangecategoryHandler}  value="Regarding technical issue"><strong>Regarding technical issue</strong>
											</option>
											<option name="category"  onChange={this.onChangecategoryHandler} value="Account Related issues"><strong>Account Related issues</strong></option>
											<option name="category" onChange={this.onChangecategoryHandler}  value="Salary realted issues"><strong>Salary realted issues</strong>
											</option>
													
											<option name="category" onChange={this.onChangecategoryHandler}  value="Some other"><strong>Some other</strong></option>

								</select>
							</div>

<div class="mb-3">
    <label class="form-label" for="inputPassword">Comments</label>
    <textarea placeholder='Enter your comments'  type="text" id="pass" value={this.state.queries} onChange={this.onChangeReasonHandler} name="queries" class="form-control form-control-lg" rows="2"cols="40" ></textarea>
</div>


<button type="submit" class="btn btn-primary" style={{marginLeft:95}}   onClick={this.compare}>Submit Query</button>

<ToastContainer />

<br />
<button type="button" class="btn btn-primary"  style={{marginLeft:120}} ><a href="/ListQueries" style={{color:'white',textDecoration:'none'}}>cancel </a></button>
</form>

</Card.Body>
</Card>
  </div>

</div>
</div>


      </>
    )
  }
}

export default Support;


