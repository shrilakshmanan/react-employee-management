import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AfterLogin from '../components/AfterLogin';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import ListEmpLeaves from './ListEmpLeaves';
import EmployeeServices from './Serviceclass';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { Component } from 'react'
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";

var employelist=[];
class Addproject extends Component {

  constructor(props){
    super(props)

    this.state={
      Employees:[],
      Employeeid:'',
      // employeename:'',
      projectname:'',
      startdate:'',
      enddate:'',
      Status:'',
      projectdesc:'',
      managerid:sessionStorage.getItem("id"),
      
    }



}


 
componentDidMount(){
     EmployeeServices.getAllEmployeeId().then( (res) =>{
      this.setState({Employees:res.data}
        )
     
   
    //  console.log("employees",Employees)//s
    
  //    this.setState({
      
  //     // Employeeid: Employees.username,
     
  // });
// 
      // console.log("this is "+Employeeid);
         
         });
    
 }


onChangeleavestartHandler=(event) =>{

  this.setState({startdate:event.target.value})

}
onChangeleaveendHandler=(event) =>{

  this.setState({enddate:event.target.value})

}

onChangestatus=(event) =>{

    this.setState({Status:event.target.value})

}
onChangeTotaldaysHandler=(event) =>{

  this.setState({Totaldays:event.target.value})

}
onChangecategoryHandler=(event) =>{

  this.setState({category:event.target.value})

}
onChangeReasonHandler=(event) =>{

  this.setState({Reason:event.target.value})

}
onChangeEmployeeHandler=(event) =>{

  const index = event.target.selectedIndex;
  const el = event.target.childNodes[index]
  const option =  el.getAttribute('employeeid');  
    this.setState({Employeeid:event.target.value})
    if(employelist.includes(event.target.value)){
      console.log("The value is already present ");
      toast.warning(event.target.value +" already added", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:500,
        
      });

    }
else{
    employelist.push(event.target.value);
console.log("employyy",event.target.value);

toast.success(event.target.value +" added", {
  position: toast.POSITION.TOP_RIGHT,
  autoClose:500,
  
});
}

var li=document.createElement("li");
var mytxt=event.target.value;

console.log("thisis optin"+mytxt);

var crtTxt=document.createTextNode(mytxt);
li.appendChild(crtTxt);
if(mytxt=="")
{
  alert("empty");
}
else{
  document.getElementById("ul").appendChild(li);
  document.getElementById("addings").value = "";
}
var myNodelist = document.getElementsByTagName("LI");
var i;
console.log(myNodelist.length);
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
   span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");

var i;
for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {
    var div = this.parentElement;

    div.style.display = "none";
  }
}



  }

  pushbtn(){

  }

onChangeprojectHandler=(event)=>{

    this.setState({projectname:event.target.value})
}

onChangeprojectdesc=(event)=>{

  this.setState({projectdesc:event.target.value})
}
// change = e => {

//   // create a copy of  this.state.groups
//   const copyGroups = JSON.parse(JSON.stringify(this.state.groups));

//   // get data-group value
//   const group = event.target.dataset.group;

//   if (!copyGroups[0][group]) {
//     copyGroups[0][group] = []; // add type if it doesn't exists
//   }

//   const groups = copyGroups[0][group];
//   const index = this.findFieldIndex(groups, e.target.name);

//   if (index < 0) {
//     // if input doesn't exists add to the array
//     copyGroups[0][group] = [...groups, { [e.target.name]: e.target.value }];
//   } else {
//     // else update the value
//     copyGroups[0][group][index][e.target.name] = e.target.value;
//   }

//   this.setState({ groups: copyGroups });
// };
deleteproject=(index)=>{
  console.log('aeet',index);
  
        //  this.state.Employeeid.splice(index,1);
           this.setState({employelist:employelist.splice(index,1)})
           toast.success("Deleted successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1300,
          
         });

console.log(this.state.Employeeid);
           
          // this.setState({leaves:this.state.leaves.filter(leave=> leave.id !==id )})
        //   onChangestatusHandler=(event) =>{
        //     this.setState({status:event.target.value})
        // }    
        }
compare=(event)=>{
  var a=  sessionStorage.getItem("id")
  console.log("this is id"+a);
  this.setState({id : a});
  console.log(this.state);

  event.preventDefault();
 // let history = useHistory();

 let employee={employeeid:employelist.toString(), projectname:this.state.projectname,projectdescription:this.state.projectdesc,startdate:this.state.startdate,enddate:this.state.enddate,status:this.state.Status,managerid:this.state.managerid
 };

if(this.state.projectname==""){

  toast.warning("Please enter the project name", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1300,
    
  });

}

else if(this.state.projectdesc==""){

  toast.warning("Please enter the project description", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1300,
    
  });

}

else if(this.state.startdate==""){

  toast.warning("Please enter the project Start date", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1300,
    
  });

}

else if(this.state.enddate==""){

  toast.warning("Please enter the project End date", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1300,
    
  });

}

else if(this.state.Status==""){

  toast.warning("Please enter the project status", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1300,
    
  });

}

else if(this.state.Employeeid==""){

  toast.warning("Please select the employees", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose:1300,
    
  });

}

else{


  console.log('employee =>'+JSON.stringify(employee));

  EmployeeServices.project(employee).then(res=>{

 //   navigate('/ManagerEmpDisplay');

 
// localStorage.setItem(res.data.data);

      console.log("user saved successfully");

      toast.success("Project added successfully ,Your project id is "+ res.data, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:1300,
        
      });
      
      const timer = setTimeout(() => {
     
        window.location.href=`/displaymanagerproject/${sessionStorage.getItem("id")}`;
      }, 1200);
      
    //  window.location.href = '/Addproject';
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
 <div className='row'  style={{overflow: 'clip'}}>
        <div className="col-sm-2"  >
        <Sidenavbar_Admin />
  </div>
  <div className="col-md-10 mt-5 d-flex justify-content-center" >

<br />

<br />

  <div >



  <Card style={{ width: '50rem' , 
   }}>

<Card.Body>
<form class="form-card">
<h3 style={{ 'justify-content': 'center'}}>New project</h3>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                    <div class="mb-3">
    <label class="form-label" for="inputPassword">Project name</label>
    <textarea  type="text" id="pass" value={this.state.projectname} onChange={this.onChangeprojectHandler} name="Reason" class="form-control form-control-lg" rows="2"cols="40" ></textarea>
</div>

                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                    <div class="mb-3">
    <label class="form-label" for="inputPassword">Project description</label>
    <textarea  type="text" id="projectdesc"  onChange={this.onChangeprojectdesc} name="Reason" class="form-control form-control-lg" rows="2"cols="40"  required></textarea>
</div>
                    </div>
                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> 
                    
<div class="mb-3">
    <label class="form-label" for="inputEmail">From</label>
    <input type="date" class="form-control"  name="leavestartdate"
     value={this.state.startdate} onChange={this.onChangeleavestartHandler} required id="inputEmail" placeholder="Email" />
</div>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> 
                    <div class="mb-3">
    <label class="form-label" for="inputPassword">To</label>
    <input type="date" value={this.state.enddate} onChange={this.onChangeleaveendHandler}  class="form-control" id="inputPassword"  name="leaveenddate"  placeholder="Password" />
</div>
 <input type="date" hidden  class="form-control" id="inputPord"  name="leaveenddate"  placeholder="Password" required/>

                    </div>

                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><div class="mb-3">
    <label class="form-label" for="inputPassword">status</label>
    {/* <input type="text" value={this.state.Status} onChange={this.onChangestatus} class="form-control" name="Status"  id="inputPassword"  /> */}


      		<select  name="kindof" onChange={this.onChangestatus}   id="lname" class="form-control form-control-md">
								
									<option hidden name="kindof" onChange={this.onChangestatus}  selected label="Select One...">Select One...</option>
											<option name="kindof" onChange={this.onChangestatus}   value="Yettostart"><strong>Yet to start</strong>
											</option>
											<option name="kindof"  onChange={this.onChangestatus}  value="Current"><strong> current</strong></option>
											<option name="kindof" onChange={this.onChangestatus}   value="completed"><strong>completed</strong>
											</option>
											
								</select>		
                </div>	
                <label class="form-label" for="inputPassword">Employee names</label>
              <Form.Select  onChange={this.onChangeEmployeeHandler}  >
      {

this.state.Employees.map(
    
  Employees=>
 
 
          <option  id="addings" onChange={this.onChangeEmployeeHandler}  value={Employees.username}>{Employees.username}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select>
        <br/>
        <button type="submit" class="btn btn-primary"   onClick={this.compare}>submit</button><br/>   </div>
                    <div class="form-group col-sm-6 flex-column d-flex"><label class="form-label" for="inputPassword"> Added Employee</label>
        
        <table>
                <thead>
        
        <tr>
        <th scope='col'> Serial number</th>
            <th scope='col'> Employee Name</th>
            
            </tr>
        
        </thead>
                <tbody>
        {
        
        
                employelist.map(
         
            
            (employeelist,index)=>
        
            <tr key={index }>
            <td>{index+1}</td>
            <td>{employeelist}</td>
            
         <td><a onClick={ () =>  this.deleteproject(index)}  ><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/> </a>
      </td>
            </tr>
               
                ) } 
             
        </tbody>
        </table>
                <ToastContainer /></div></div>
</div>
                    <div class="row justify-content-between text-left">

                    <div class="form-group col-sm-6 flex-column d-flex">         
		 </div>
                  

                    
                    </div>

                  
                    </form>

</Card.Body>
</Card>

<p style={{marginTop:20,marginLeft:280}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p>
    
  </div>
  </div>
  </div>

    

 
      </>  
    )
  }
}

export default Addproject;



