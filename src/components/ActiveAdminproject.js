
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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


 class ActiveAdminproject extends Component {

    constructor(props){
        super(props)
        
        this.state={
        
            projects:[ ],
            ids:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role"),
       temp:''
        }
    }
    tempemployee(id){
        
      this.setState({temp:id});
      console.log("this is id"+id);
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
    window.location.href = '/ActiveAdminproject';
  }, 1100);
  
  
  
  
    })
    }
    componentDidMount(){

       
      // if (!$.fn.dataTable.isDataTable("#myTable")) {
      //   $(document).ready(function () {
      //     setTimeout(function () {
      //       $("#table").DataTable({
      //         pagingType: "numbers",
      //         pageLength: 5,
      //         processing: true,
      //         "bInfo" : false,
      //         "ordering": false,
      //         retrieve: true,
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
      //           [5, 20, 30, 50, -1],
      //           [5, 20, 30, 50, "All"],
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
      //     }, 1000);
      //   });
      // }


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
                [10, 20, 30, 50, -1],
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
          },100)
        });
      }

      //  console.log("id"+this.state.id);
        //This is js promise here this will wait until the response is came
                EmployeeServices.AllActiveproject().then((res) =>{
        
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
<h2 className='text-center'>  Active Projects List</h2>
<br />

<div className='row'>
<Card className='p-4 ' style={{border:'white'}}>
<table id='table' className='table table-striped table-hover'>

<thead  style={{backgroundColor:'#29A76F',color:'white'}}>

<tr style={{position: 'sticky',backgroundColor:'#29A76F',top: 0}}>
<th scope='col'> Serial number</th>
    <th scope='col'> project name</th>

    <th scope='col'> Startdate</th>
    <th scope='col'> Enddate</th>
    <th scope='col'>Status</th>
    <th scope='col'>Manager incharge</th>
    <th scope='col'>Employees</th>

<th scope='col' >View</th>
  <th scope='col'>Delete</th>
    </tr>

</thead>


<tbody>
{

this.state.projects.map(
    
    (projects,index)=>

    <tr key={projects.projectid }>
     <td>{index+1}</td>
    <td>{projects.projectname}</td>

    <td>{projects.startdate}</td>
    <td>{projects.enddate}</td>
    <td>{projects.status}</td>
    <td>{projects.jva_clas1.username}</td>
    <td>{projects.employeeid}</td>
   
    <td><a onClick={ () =>  this.editEmployee(projects.projectid)} ><AiFillEye  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>  
     
	<td>
<a href="#myModal"  onClick={ () =>  this.tempemployee(projects.projectid)}  style={{color:'white',textDecoration:'none'}} data-toggle="modal"><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/></a>
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
   <Footer />
      </Col>
      </div>
      </>
    
    )
  }
}

export default ActiveAdminproject;







