import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";
import Sidenavbar_Admin from './Sidenavbar_Admin';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import Footer from './Footer';
import $ from "jquery";


 class ProjectEmpDisplay extends Component {

    constructor(props){
        super(props)
        
        
        this.state={
        
            projects:[ ],
        id:sessionStorage.getItem("id"),
        Empname:sessionStorage.getItem("name"),

        Role:sessionStorage.getItem("Role")
       
        }
    }

//     editEmployee(name){
//         //console.log(id);
// //Navigate(`/Update-employee/${id}`);
// window.location.href=`/displayteam/${name}`;
// //<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>

//     }
    editEmployee(id){
      
      console.log(id);
//Navigate(`/Update-employee/${id}`);
// window.location.href=`/deleteEmployee/${id}`;

window.location.href=`/updateproject/${id}`;

// EmployeeServices.deleteEmployee(id);

  }

    componentDidMount(){
      if (!$.fn.dataTable.isDataTable("#myTable")) {
        $(document).ready(function () {
          setTimeout(function () {
            $("#table").DataTable({
              pagingType: "numbers",
              pageLength: 5,
              retrieve: true,
              "bInfo" : false,
              "ordering": false,
              select: {
                style: "single",
              },
  
              buttons: [
               
               
              ],
  
              fnRowCallback: function (
                nRow,
                aData,
                iDisplayIndex,
                iDisplayIndexFull
              ) {
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
              },
  
              lengthMenu: [
                [5,10, 20, 30, 50, -1],
                [5,10, 20, 30, 50, "All"],
              ],
              columnDefs: [
                {
                  targets: 0,
                  render: function (data, type, row, meta) {
                    return type === "export" ? meta.row + 1 : data;
                  },
                },
              ],
            });
          }, 100);
        });
      }



      //  console.log("id"+this.state.id);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getEmployeeproject(this.state.Empname).then((res) =>{
        
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
        <Sidenavbar_Admin />
  </div>
  
  <Col>
<Container style={{marginBottom:420}}>
      <div>
          
<h2 className='text-center'>project List</h2>
<br></br>


<div className='row '>

<table  id='table' className='table table-striped table-hover'>

<thead style={{color:'white',backgroundColor:'#78AFE6'}}>

<tr style={{position: 'sticky',backgroundColor:'#78AFE6',top: 0}}>
<th scope='col'> Serial Number</th>
    <th scope='col'> Project Name</th>
    <th scope='col'> Project Startdate</th>
    <th scope='col'> Project Enddate</th>
    <th scope='col'> Manager Incharge</th>
    <th scope='col'> Project Description</th>
    <th scope='col'> Status</th>
<th scope='col' >View</th>
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
<td>{projects.jva_clas1.username}</td>
<td>{projects.projectdescription}</td>
<td>{projects.status}</td>
<td>
<a onClick={ () =>  this.editEmployee(projects.projectid)} ><AiFillEye  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>

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
  
     </Container>
      <Footer /> 
      </Col>
      
      </div>
     
      </>
    )
  }
}

export default ProjectEmpDisplay;






