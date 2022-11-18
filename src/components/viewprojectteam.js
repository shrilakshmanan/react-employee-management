import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';


 class viewprojectteam extends Component {

    constructor(props){
        super(props)
        var url=window.location.pathname
        var idds= url.substring(url.lastIndexOf('/') + 1);
        
        this.state={
        
            projects:[ ],
        id:idds,
        Role:sessionStorage.getItem("Role")
       
        }
    }


    componentDidMount(){
      //  console.log("id"+this.state.id);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getTeammanager(this.state.id).then((res) =>{
        
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
        <>
     
     <div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Employee />
  </div>
  <Col>
      <div>
          
<h2 className='text-center'>project List</h2>
<br></br>


<div className='row '>

<table className='table'>

<thead>

<tr>

    <th scope='col'> TeamMates </th>


    
    </tr>

</thead>


<tbody>
{

this.state.projects.map(
    
    projects=>
    <tr key={projects.projectid}>

    <td>{projects.employeeid}</td>
<td>

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
     
      </>
    )
  }
}
export default viewprojectteam;








