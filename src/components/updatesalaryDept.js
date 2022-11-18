import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterLogin from '../components/AfterLogin';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import ListEmpLeaves from './ListEmpLeaves';
import EmployeeServices from './Serviceclass';
import ListQueries from './ListQueries';
import { FaAngleDoubleLeft } from "react-icons/fa";

import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import Sidenavbar_Admin from './Sidenavbar_Admin';

 class updatesalaryDept extends Component {
  constructor(props){
    super(props)
    var url=window.location.pathname
    var idds= url.substring(url.lastIndexOf('/') + 1);
    this.state={

      id:idds,
   department:'',
      salary:'',
   position:'',
department:''

    }


}

componentDidMount(){
    //         const params = useParams();
    // console.log("awerawe"+params);
            EmployeeServices.getsalarydetail(this.state.id).then((res) =>{
    
    
                //this.setState({leaves:res.data}) res.data
               console.log("respdata "+ JSON.stringify(res.data));
                let employee = res.data;
                console.log("gthisis "+employee.ids);
                // console.log("sefaweaw "+employee.firstName);
                this.setState({
                    department:employee.department,
                    salary:employee.salary,
                    position:employee.position
    
                });
            });
        }
    


onChangecategoryHandler=(event) =>{

  this.setState({category:event.target.value})

}
onChangeReasonHandler=(event) =>{

  this.setState({salary:event.target.value})

}
onChangepositionHandler=(event) =>{

    this.setState({position:event.target.value})

}
onchangedept=(event) =>{

    this.setState({department:event.target.value})

}

compare=(event)=>{
  var a=  sessionStorage.getItem("id")
  console.log("this is id"+a);
  this.setState({id : a});
  console.log(this.state);

  event.preventDefault();
 // let history = useHistory();

 let employee={salary:this.state.salary,position:this.state.position,department:this.state.department};
  console.log('employee =>'+JSON.stringify(employee));

  EmployeeServices.updatesalaryD(this.state.id,employee).then(res=>{
 //   navigate('/ManagerEmpDisplay');

 
// localStorage.setItem(res.data.data);

      console.log("user saved successfully");

      

toast.success("Updated successfully", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1200,
    
  });
  
      var a=sessionStorage.getItem("querycount");
      
      console.log(a);
      sessionStorage.setItem("querycount",a);


     // window.location.href = '/UpdateSalary';

      const timer = setTimeout(() => {
        window.location.href = '/UpdateSalary';
      }, 1100);
  //    history.push("./components/managerEmpDisplay") 
   //  this. props.history.push("/managerEmpDisplay");
      // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />

  },
  // this.redirect()
  
      
      )
      

} 
  render() {
    return (
       <>
      
     
      <div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <div className="col-md-10 mt-5 d-flex justify-content-center">

<br />

  <div> 

  <a href="/UpdateSalary" style={{color:'blue'}}><FaAngleDoubleLeft /> Back</a>
  <Card style={{ width: '20rem' }}>

  

<Card.Body>



<form>
<h3>Update SALARY AND DEPARTMENT</h3>
            
                            <div class="mb-3">
    <label class="form-label" for="inputPassword">Department</label>
							
								
								<select  name="kindof" onChange={this.onchangedept} value={this.state.department}   id="lname" class="form-control form-control-lg">
                                <option hidden name="kindof"  selected label="Select One...">Select One...</option>
									<option  name="kindof" onChange={this.onchangedept}  value="Software" >Software  Department</option>
											<option name="kindof" onChange={this.onchangedept}  value="Hardware"><strong>Hardware Department</strong>
											</option>
										
											
								</select>
							</div>
    

                            <div class="mb-5">
             
             <label class="form-label" for="inputPassword">position</label>
                                     
             <input  type="text" id="dept" value={this.state.position} onChange={this.onChangepositionHandler} name="dept" class="form-control form-control-lg"  ></input>
         
                                     </div>	

                                     <div class="mb-5">
        
        <label class="form-label" for="inputPassword">salary</label>
                                
        <input  type="text" id="salary" value={this.state.salary} onChange={this.onChangeReasonHandler} name="queries" class="form-control form-control-lg" rows="2"cols="40" ></input>
    
                                </div>

                                     <ToastContainer />
<button type="submit" class="btn btn-primary" style={{marginLeft:102}}  onClick={this.compare}>Submit</button>
<br />
<br />
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

export default updatesalaryDept;


