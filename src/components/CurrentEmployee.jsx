

import React, { Component } from 'react'
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import Footer from './Footer';
import Card from 'react-bootstrap/Card';


 class CurrentEmployee extends Component {

    constructor(props){
        super(props)
        
        this.state={
        
            employees:[ ],
        id:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role")
       
       
        }
    }
   
   // console.log(Role);
    componentDidMount(){
        
      if (!$.fn.dataTable.isDataTable("#myTable")) {
        $(document).ready(function () {
          setTimeout(function () {
            $("#table").DataTable({
              pagingType: "numbers",
              pageLength: 5,
              processing: true,
              "bInfo" : false,
              "ordering": false,
              retrieve: true,
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
                [5, 20, 30, 50, -1],
                [5, 20, 30, 50, "All"],
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
          }, 1000);
        });
      }
       
        // if (!$.fn.dataTable.isDataTable("#myTable")) {
        //     $(document).ready(function () {
        //       setTimeout(function () {
        //         $("#table").DataTable({
        //           pagingType: "numbers",
        //           pageLength: 10,
        //           retrieve: true,
        //           "bInfo" : false,
        //           "ordering": false,
        //           select: {
        //             style: "single",
        //           },
      
        //           buttons: [
                   
                   
        //           ],
      
        //           fnRowCallback: function (
        //             nRow,
        //             aData,
        //             iDisplayIndex,
        //             iDisplayIndexFull
        //           ) {
        //             var index = iDisplayIndexFull + 1;
        //             $("td:first", nRow).html(index);
        //             return nRow;
        //           },
      
        //           lengthMenu: [
        //             [10, 20, 30, 50, -1],
        //             [5,10, 20, 30, 50, "All"],
        //           ],
        //           columnDefs: [
        //             {
        //               targets: 0,
        //               render: function (data, type, row, meta) {
        //                 return type === "export" ? meta.row + 1 : data;
        //               },
        //             },
        //           ],
        //         });
        //       }, 1);
        //     });
        //   }
   
    
    
    
        //This is js promise here this will wait until the response is came
                EmployeeServices.CurrentEmployees().then((res) =>{
        
                    this.setState({employees:res.data})
        
                 var a= sessionStorage.getItem("id")
                    console.log("waeserse"+a);
                    //this.setState({id:a});
                    var b=sessionStorage.getItem("Role");
                    console.log(b);
                    this.setState({Role:b});
                    console.log(this.state);
                })
            }

            

  render() {
    return ( 

        <div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <Col>
      <div>
      
<h2 className='text-center'>Current Employees List</h2>

<div className='row' style={{'marginTop':50}}>
<Card className='p-4 ' style={{border:'white'}}>
<table id='table' className='table table-striped table-hover'>

<thead  style={{backgroundColor:'#29A76F',color:'white'}}>

<tr style={{position: 'sticky',backgroundColor:'#29A76F',top: 0}}>
<th scope='col'> Serial number</th>
    <th scope='col'> Employee Name</th>
    <th scope='col'> Role</th>
    <th scope='col'> Salary</th>
    <th scope='col'>Employee Email-id</th>
    <th scope='col'>Job role</th>
    <th scope='col'>Date of joining</th>
    </tr>

</thead>


<tbody>
{

this.state.employees.map(
    
    (employee,index)=>
    <tr key={employee.employeeid}>
    <td>{index+1}</td>
<td>{employee.username}</td>
<td>{employee.roles}</td>
<td>{employee.salary.salary}</td>
<td>{employee.emailid}</td>
<td>{employee.salary.position}</td>
<td>{employee.dateofjoining}</td>

    </tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}




</tbody>


</table>
</Card>

</div>

      </div>
    <Footer />
      </Col>
      </div>
      

    )
  }
}

export default CurrentEmployee;





