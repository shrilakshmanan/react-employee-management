


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


 class Updateadminqueries extends Component {
    constructor(props){
        super(props)
         var url=window.location.pathname
        var idds= url.substring(url.lastIndexOf('/') + 1);
console.log("awerawe"+idds);
        this.state={
    
          
          id:idds,
          category:'',
          queries:'',
          status:'',
          querydate:'',
          username:'',
          response:'',
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
                queries:employee.queries,
                querydate:employee.querydate,
                response:employee.response,
                status:employee.status,
                username:employee.jva_clas.username

            });
        });
    }

    
onChangecategoryHandler=(event) =>{

    this.setState({category:event.target.value})
  
  }
  onChangeReasonHandler=(event) =>{
  
    this.setState({queries:event.target.value})
  
  }
  onChangestatusHandler=(event) =>{
    this.setState({status:event.target.value})
}
 
onChangeresponse=(event) =>{
    this.setState({response:event.target.value})
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
      let employee={status:this.state.status,response:this.state.response};
      console.log('employee =>'+JSON.stringify(employee));
    
      EmployeeServices.updateAdminqueries(employee,ids).then((res)=>{
     //   navigate('/ManagerEmpDisplay');
    console.log("value of res",res)
     
    // localStorage.setItem(res.data.data);
    
          console.log("user saved successfully");
          
         
          
toast.success("Updatd successfully", {
  position: toast.POSITION.TOP_RIGHT,
  autoClose:1200,
  
});


        //   toast.success('query updated successfully', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });

        
 const timer = setTimeout(() => {
  window.location.href = '/AdminQuery';
}, 1100);

    //   window.location.href = '/AdminQuery';
      //    history.push("./components/managerEmpDisplay") 
       //  this. props.history.push("/managerEmpDisplay");
          // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />
    
      })
      // this.redirect()
       
        

    } 
  render() {
    return (
   
 
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

<form class="form-card" >
<h3> Update query</h3>
                    <div class="row justify-content-between text-left">

                    <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputPassword">Employee name</label>
    <input disabled  type="text" id="pname" value={this.state.username} onChange={this.onChangeReasonHandler} name="queries" class="form-control form-control-lg" rows="2"cols="40" required ></input>
</div></div>
                    <div class="form-group col-sm-6 flex-column d-flex"><label class="form-label" for="inputPassword"> Query category</label>
							

								
              <select value={this.state.category} disabled name="category" onChange={this.onChangecategoryHandler}   id="lname" class="form-control form-control-lg" required>
              
                <option hidden name="category" onChange={this.onChangecategoryHandler}  selected label="Select One...">Select One...</option>
                    <option name="category" onChange={this.onChangecategoryHandler}  value="Regarding technical issue"><strong>Regarding technical issue</strong>
                    </option>
                    <option name="category"  onChange={this.onChangecategoryHandler} value="Account Related issues"><strong>Account Related issues</strong></option>
                    <option name="category" onChange={this.onChangecategoryHandler}  value="Salary realted issues"><strong>Salary realted issues</strong>
                    </option>
                        
                    <option name="category" onChange={this.onChangecategoryHandler}  value="Some other"><strong>Some other</strong></option>

              </select></div>
                    </div>

                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">Query raised date</label>
    <input disabled  type="date" id="pass" value={this.state.querydate} onChange={this.onChangeReasonHandler} name="queries" class="form-control form-control-lg" rows="2"cols="40" required ></input>
</div></div>

                    <div class="form-group col-sm-6 flex-column d-flex">
                    
                    <div class="mb-3">
    <label class="form-label" for="inputPassword">Query</label>
    <textarea disabled  type="text" id="pass" value={this.state.queries} onChange={this.onChangeReasonHandler} name="queries" class="form-control form-control-lg" rows="2"cols="40" required ></textarea>
</div>
                    </div>
                 
                    </div>

                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                    <div class="mb-3">
    <label class="form-label" for="inputPassword"> Query Status</label>
							
								
								<select value={this.state.status} name="status" onChange={this.onChangestatusHandler}   id="lname" class="form-control form-control-lg">
                                {/* <select value={this.state.category} onChange={this.handleChange}>     			 */}
									<option hidden name="status" onChange={this.onChangestatusHandler}  label="Select One...">Pending</option>
											<option name="status" onChange={this.onChangestatusHandler}  value="Accept"><strong>Accept</strong>
											</option>
											<option name="status"  onChange={this.onChangestatusHandler} value="Reject"><strong>Reject</strong></option>

								</select>
							</div>

                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <div class="mb-3">
    <label class="form-label" for="inputPassword">Query  Response</label>
    <textarea   placeholder={this.state.response} type="text" id="pass" onChange={this.onChangeresponse} name="response" class="form-control form-control-lg" rows="2"cols="40" required ></textarea>
</div></div>

                    </div>

                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-3 flex-column d-flex"><button type="button" class="btn btn-primary"   >	<a href="/AdminQuery" style={{color:'white',textDecoration:'none'}}>Back </a></button>
</div>
                    <div class="form-group col-sm-3 flex-column d-flex"> <button type="submit" class="btn btn-primary"   onClick={this.compare}>Update Query</button>
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

    

 
     
    )
  }
}

export default Updateadminqueries;