import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";

 class Displayemployeeview extends Component {



    constructor(props){
        super(props)
            var url=window.location.pathname
        var idds= url.substring(url.lastIndexOf('/') + 1);
        
        this.state={
        
            projects:[ ],
        id:idds,
        Empname:sessionStorage.getItem("name"),

        Role:sessionStorage.getItem("Role")
       
        }
    }

    editEmployee(name){
        //console.log(id);
//Navigate(`/Update-employee/${id}`);
window.location.href=`/displayteam/${name}`;
//<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>

    }

    editEmployee(id){
        console.log(id);
  //Navigate(`/Update-employee/${id}`);
  // window.location.href=`/deleteEmployee/${id}`;
  
  window.location.href=`/updateproject/${id}`;
  
  // EmployeeServices.deleteEmployee(id);
  
    }
  


    componentDidMount(){
      //  console.log("id"+this.state.id);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getEmployeeproject(this.state.id).then((res) =>{
        
                    this.setState({projects:res.data})

                  var a=  sessionStorage.getItem("id")
                 
                    this.setState({id:a});
                   // console.log(this.state);
                    var b=sessionStorage.getItem("Role");
                    console.log(b);
                    this.setState({Role:b});
                    console.log(this.state);

                })
            }
  render() {
    return (
        this.state.Role =="Admin" ?        <>
     
     <div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin/>
  </div>
  <Col>
      <div>
          
<h2 className='text-center'>project List</h2>
<br></br>


<div className='row '>

<table className='table table-hover'>

<thead  style={{backgroundColor:'#29A76F',color:'white'}}>

<tr>    
<th scope='col'> Serial number</th>
    <th scope='col'> Project Name</th>
    <th scope='col'> Project Startdate</th>
    <th scope='col'> Project Enddate</th> 
    <th scope='col'> Status</th>
    <th scope='col'> Manager Incharge</th>
    <th scope='col'> TeamMates</th>

    <th scope='col'> Action</th>
    <th></th>
    </tr>

</thead>


<tbody>
{

this.state.projects.map(
    
   ( projects,index)=>


    <tr key={projects.projectid}>
    <td>{index+1}</td>
    
    <td>{projects.projectname}</td>
<td>{projects.startdate }</td>
<td>{projects.enddate}</td>

<td>{projects.status}</td>
<td>{projects.jva_clas1.username}</td>

<td>{projects.employeeid}</td>

 <td><a onClick={ () =>  this.editEmployee(projects.projectid)} ><AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>
</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)

}

</tbody>


</table>


</div>
      </div>
      </Col>
      </div>
     
      </>:
      <>

<div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin/>
  </div>
  <Col>
      <div>
          
<h2 className='text-center'>project List</h2>
<br></br>


<div className='row '>

<table className='table table-hover table-striped'>

<thead style={{color:'white',backgroundColor:'#1b6fc2'}}>

<tr>
<th scope='col'> Serial number</th>
    <th scope='col'> Project Name</th>
    <th scope='col'> Project Startdate</th>
    <th scope='col'> Project Enddate</th> 
    <th scope='col'> Status</th>
    <th scope='col'> TeamMates</th>

    <th scope='col'> Actions </th>
    <th></th>
    </tr>

</thead>


<tbody>
{

this.state.projects.map(
    
   ( projects,index)=>


    <tr key={projects.projectid}>
    <td>{index+1}</td>
    <td>{projects.projectname}</td>
<td>{projects.startdate }</td>
<td>{projects.enddate}</td>

<td>{projects.status}</td>

<td>{projects.employeeid}</td>

   <td><a onClick={ () =>  this.editEmployee(projects.projectid)} > <AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/></a>
      </td>
<td></td>
</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)

}

</tbody>


</table>


</div>
      </div>
      </Col>
      </div>
      </>
    )
  }
}

export default Displayemployeeview;




