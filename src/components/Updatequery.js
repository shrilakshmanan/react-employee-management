import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterLogin from './AfterLogin';
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
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 class updatequery extends Component {
    constructor(props){
        super(props)
         var url=window.location.pathname
        var idds= url.substring(url.lastIndexOf('/') + 1);
console.log("awerawe"+idds);
        this.state={
    
          
          id:idds,
          category:'',
          queries:'',
          Role:sessionStorage.getItem("Role")
    
        }
    
    }

    componentDidMount(){
//         const params = useParams();
// console.log("awerawe"+params);
        EmployeeServices.updatequery(this.state.id).then((res) =>{


            //this.setState({leaves:res.data}) res.data
           console.log("respdata "+ JSON.stringify(res.data));
            let employee = res.data;
            console.log("gthisis "+employee.ids);
            // console.log("sefaweaw "+employee.firstName);
            this.setState({
                category:employee.category,
                queries:employee.queries

            });
        });
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
    
    var ids=this.state.id;
    console.log("afeetaerw"+ids);
      let employee={queryid:ids,category:this.state.category,queries:this.state.queries};
      console.log('employee =>'+JSON.stringify(employee));
    
      EmployeeServices.updatequeries(employee,ids).then((res)=>{
     //   navigate('/ManagerEmpDisplay');
    console.log("value of res",res)
     
    // localStorage.setItem(res.data.data);
    
          console.log("user saved successfully");
          
         
          toast.success('query Updated successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
        });

        const timer = setTimeout(() => {
          window.location.href = '/ListQueries';
        }, 1100);
  
            // window.location.href = '/ListQueries';
      //    history.push("./components/managerEmpDisplay") 
       //  this. props.history.push("/managerEmpDisplay");
          // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />
    
      })
      // this.redirect()
       
        

    } 
  render() {
    return (
   
        this.state.Role =="Employee" ? <> 
<div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <div className="col-md-10 d-flex justify-content-center">

<br />

  <div>

<br/>
  <Card className='shadow-lg  mb-5 bg-white rounded mt-5' style={{ width: '22rem' }}>

<Card.Body>


<form>
					
              <div class="mb-3">
              <h3> Raise query</h3>
    <label class="form-label" for="inputPassword">category</label>
							
								
								<select value={this.state.category} name="category" onChange={this.onChangecategoryHandler}   id="lname" class="form-control form-control-lg" required>
								
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
    <textarea  type="text" id="pass" value={this.state.queries} onChange={this.onChangeReasonHandler} name="queries" class="form-control form-control-lg" rows="2"cols="40" required ></textarea>
</div>


<button type="submit" class="btn btn-primary" style={{marginLeft:95}}   onClick={this.compare}>Update Query</button>

<ToastContainer />
<br />

<button type="button" class="btn btn-primary" style={{marginLeft:120}}    >	<a href="/ListQueries" style={{color:'white',textDecoration:'none'}}>Back </a></button>
</form>
</Card.Body>
</Card>

  </div>
  </div>
  </div>

    

 
      </>:<>


      <div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <div className="col-md-10 d-flex justify-content-center">

<br />

  <div>

<br/>
  <Card className='shadow-lg  mb-5 bg-white rounded mt-5' style={{ width: '22rem' }}>

<Card.Body>


<form>
					
              <div class="mb-3">
              <h3> Raise query</h3>
    <label class="form-label" for="inputPassword">category</label>
							
								
								<select value={this.state.category} name="category" onChange={this.onChangecategoryHandler}   id="lname" class="form-control form-control-lg" required>
								
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
    <textarea  type="text" id="pass" value={this.state.queries} onChange={this.onChangeReasonHandler} name="queries" class="form-control form-control-lg" rows="2"cols="40" required ></textarea>
</div>


<button type="submit" class="btn btn-primary" style={{marginLeft:95}}  onClick={this.compare}>Update Query</button>

<ToastContainer />
<br />

<button type="button" class="btn btn-primary" style={{marginLeft:120}}   >	<a href="/ListQueries" style={{color:'white',textDecoration:'none'}}>Back </a></button>
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

export default updatequery;