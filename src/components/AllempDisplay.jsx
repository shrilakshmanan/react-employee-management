import React, { Component } from 'react'
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdUpdate } from "react-icons/fa";
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
import Card from 'react-bootstrap/Card';


 class AllempDisplay extends Component {

    constructor(props){
        super(props)
        
        this.state={
        
            employees:[ ],
        id:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role"),
       name:sessionStorage.getItem("name")

       
        }
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
    displaymanagerproject(id){

        window.location.href=`/displaymanagerproject/${id}`;
    }


    deleteEmployee(id){


        EmployeeServices.deleteemployee(id).then(res =>{
            this.setState({employees:this.state.employees.filter(leave=> leave.id !==id )})
        
            
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
        window.location.href = '/AllempDisplay';
      }, 1100);

    


        })
    }
   // console.log(Role);
    componentDidMount(){

      
      // if (!$.fn.dataTable.isDataTable("#myTable")) {
      //   $(document).ready(function () {
      //     setTimeout(function () {
      //       $("#table").DataTable({
      //         pagingType: "numbers",
      //         pageLength:' 5',
      //         retrieve: true,
              
      //         "bInfo" : false,
      //         "ordering": false,
      //         select: {
      //           style: "single",
      //         },
  
      //         buttons: [
               
              
               
      //         ],
  
      //         fnRowCallback: function (
      //           nRow,
      //           aData,
      //           iDisplayIndex,
      //           iDisplayIndexFull
      //         ) {
      //           var index = iDisplayIndexFull + 1;
      //           $("td:first", nRow).html(index);
      //           return nRow;
      //         },
      //         lengthMenu: [
      //           [5, 10, 20, 50, -1],
      //           [5, 10, 20, 50, "All"],
      //         ],
      //         columnDefs: [
      //           {
      //             targets: 0,
      //             render: function (data, type, row, meta) {
      //               return type === "export" ? meta.row + 1 : data;
      //             },
      //           },
      //         ],
      //       });
      //     }, 100);
      //   });
      // }

      
      if (!$.fn.dataTable.isDataTable("#myTable")) {
        $(document).ready(function () {
          setTimeout(function () {
            $("#table").DataTable({
              pagingType: "numbers",
              pageLength: 10,
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
          }, 100);
        });
      }


        //This is js promise here this will wait until the response is came
                EmployeeServices.AdminEmployees().then((res) =>{
        

                    console.log(res.data);
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
      
<h2 className='text-center'>Employees List</h2>

<div className='row' style={{'marginTop':20}}>
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
    {/* <th scope='col' colSpan={4} >leaves</th>   */}
    <th scope='col'>Employee status</th>
    <th scope='col'   >View</th>
    {/* <th scope='col' >View</th> */}
<th></th>
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
{/* <td>{"C.L "+employee.casualleave}</td> */}
{/* <td>
<span class="hovertext" data-hover="Casual Leave">
{"C.L "+employee.casualleave}
  </span></td>
<td>
<span class="hovertext" data-hover="paid Leave">
{"P.L "+employee.paidleave}
  </span></td>
  
  <td>
<span class="hovertext" data-hover="Sick Leave">
{"S.L "+employee.sickleave}
  </span></td>

  <td>
<span class="hovertext" data-hover="Work from Home">
{"WFH "+employee.workfromhome}
  </span></td> */}
{/* <td>{"P.L "+employee.paidleave}</td> */}
{/* <td>{"S.L "+employee.sickleave}</td> */}


<td>{employee.employeestatus}</td>
 <td><a onClick={ () =>  this.editEmployee(employee.employeeid)}  ><AiFillEye     style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>
      {/* <td>
    
      {  employee.roles != 'Manager'  ?   <a onClick={ () =>  this.displayEmployee(employee.username)}  ><AiFillEye  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>:   <a onClick={ () =>  this.displaymanagerproject(employee.employeeid)}  ><AiFillEye  style={{width:'25',color:'#64c0e3',height:'35'}}/></a> }
 
      </td> */}

      {/* <td><a onClick={ () =>  this.deleteEmployee(employee.employeeid)} ><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/> </a>
      
     
      </td> */}
     
<td></td>
      
    </tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}




</tbody>
 <ToastContainer />

</table>

</Card>
</div>

      </div>
      <footer> <p style={{marginLeft:450,marginTop:8}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p></footer>
      </Col>
      
      </div>
      

    )
  }
}

export default AllempDisplay;






