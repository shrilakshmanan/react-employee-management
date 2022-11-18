
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
 class CompletedProjects extends Component {

    constructor(props){
        super(props)
        
        this.state={
        
            projects:[ ],
            ids:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role"),
       temp:''
        }
    }

    editEmployee(id){
      
      console.log(id);
//Navigate(`/Update-employee/${id}`);
// window.location.href=`/deleteEmployee/${id}`;

window.location.href=`/updateproject/${id}`;

// EmployeeServices.deleteEmployee(id);

  }

  deletemployee(id){

    EmployeeServices.deletecompleted(id).then(res =>{
      this.setState({projects:this.state.projects.filter(leave=> leave.id !==id )})
  
      
toast.success("Deleted Successfully", {
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
  window.location.href = '/CompletedProjects';
}, 1100);




  })
  }
  tempemployee(id){
        
    this.setState({temp:id});
    console.log("this is id"+id);
}

    componentDidMount(){
      //  console.log("id"+this.state.id);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getCompletedproject(this.state.ids).then((res) =>{
        
                    console.log(res.data);
                    this.setState({projects:res.data})
        
                  var a=  sessionStorage.getItem("id")
                 
                    this.setState({id:a});
                  //  console.log(this.state);
                    var b=sessionStorage.getItem("Role");
                   // console.log(b);
                    this.setState({Role:b});
                   // console.log(this.state);

                })
            }
  render() {
    return (
        <>
      <div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <Col>

      <div>
  <br />        
<h2 className='text-center'> Completed Projects List</h2>
<br />

<div className='row'>
<Card className='p-4 ' style={{border:'white'}}>
<table className='table table-striped table-hover'>

<thead style={{color:'white',backgroundColor:'#1B6FC2'}}>

<tr style={{position: 'sticky',backgroundColor:'#1B6FC2',
	top: 0}}>
<th scope='col'> Serial number</th>
    <th scope='col'> Project name</th>
    <th scope='col'>Project description</th>
    <th scope='col'> Startdate</th>
    <th scope='col'> Enddate</th>
    <th scope='col'>Status</th>
    <th scope='col'>Employees</th>
    <th scope='col' colspan='2'>Actions</th>
  <th></th>
    </tr>

</thead>


<tbody>
{

this.state.projects.map(
    
    (projects,index)=>

    <tr key={projects.projectid }>
    <td>{index+1}</td>
    <td>{projects.projectname}</td>
    <td>{projects.projectdescription}</td>
    <td>{projects.startdate}</td>
    <td>{projects.enddate}</td>
    <td>{projects.status}</td>
    <td>{projects.employeeid}</td>
    <td><a onClick={ () =>  this.editEmployee(projects.projectid)} ><AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>

      

	<td>
<a href="#myModal" onClick={ () =>  this.tempemployee(projects.projectid)}  style={{color:'white',textDecoration:'none'}} data-toggle="modal"><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/></a>
</td>


<div id="myModal" class="modal fade">
<div class="modal-dialog modal-confirm">
<div class="modal-content">
  <div class="modal-header flex-column">
    <div class="icon-box">
      <i class="material-icons">&#xE5CD;</i>
    </div>						
    <h4 class="modal-title w-100">Are you sure?</h4>	
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
  </div>
  <div class="modal-body">
    <p>Do you really want to delete? This process cannot be undone.</p>
  </div>
  <div class="modal-footer justify-content-center">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button   onClick={ () =>  this.deletemployee(this.state.temp)} data-dismiss="modal"  className="btn btn-danger">Delete</button>
  </div>
</div>
</div>
</div>
      {/* <td><button onClick={ () =>  this.deletemployee(projects.projectid)}  className="btn btn-danger">Delete </button> */}
     
      <td></td>
    
</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}

<ToastContainer />
</tbody>


</table>
</Card>
</div>
      </div>
      <Footer />
      </Col>
      </div>
      </>
    
    )
  }
}

export default CompletedProjects;







