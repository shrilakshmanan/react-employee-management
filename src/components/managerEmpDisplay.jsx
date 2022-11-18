import React, { Component } from 'react'
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";
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
 class managerEmpDisplay extends Component {

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
               pageLength: 10,
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


        //This is js promise here this will wait until the response is came
                EmployeeServices.getAllEmployees(sessionStorage.getItem('id')).then((res) =>{
        
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

            editEmployee(id){
               console.log(id);
       //Navigate(`/Update-employee/${id}`);
       window.location.href=`/updateEmployee/${id}`;
       //<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
       
       
           }
            displayEmployee(name){
                //console.log(id);
        //Navigate(`/Update-employee/${id}`);
        window.location.href=`/displayAllemployee/${name}`;
        //<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
        
            }
            

  render() {
    return ( 
        <div >
<div className='row '>
   <div className="col-lg-2 col-sm-2">
      <Sidenavbar_Admin />
   </div>
   <div className="col-lg-10 ">
      <div>
         <h2 className='text-center'>Employees List</h2>
         <div className='table-responsive mt-4'>
         <Card className='p-4 ' style={{border:'white'}}>
            <table id='table' className='table table-striped table-hover'>
               <thead style={{color:'white',backgroundColor:'#26619C'}}>
                  <tr style={{position: 'sticky',backgroundColor:'#1B6FC2',top: 0}}>
                     <th scope='col'> Serial number</th>
                     <th scope='col'> Employee Name</th>
                     <th scope='col'> Role</th>
                     <th scope='col'> Salary</th>
                     <th scope='col'>Employee Email-id</th>
                     <th scope='col'>Job role</th>
                     <th scope='col'>Employee status</th>
                     <th scope='col'>Department</th>
                     <th scope='col'>View</th>
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
                     <td>{employee.employeestatus}</td>
                     <td>{employee.salary.department}</td>
                     <td>
                     <a onClick={ () =>  this.editEmployee(employee.employeeid)}  ><AiFillEye  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>
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
   </div>
</div>
    
</div>
    )
  }
}

export default managerEmpDisplay;






