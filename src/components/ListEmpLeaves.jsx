import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from "react-bootstrap";
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { MDBDataTableV5 } from 'mdbreact';
import ReactTable from "react-table";  
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
import { AiFillEye ,AiFillEdit,AiFillDelete,AiOutlineCheckCircle} from "react-icons/ai";

 class ListEmpLeaves extends Component {

    constructor(props){
        super(props)
        
        this.state={

            
            leaves:[ ],
            currentPage: 1,
            todosPerPage: 3,
            ids:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role"),
temp:''       
        }
    }
     
        
    editEmployee(id){
        console.log(id);
//Navigate(`/Update-employee/${id}`);
window.location.href=`/updateleave/${id}`;
//<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>

    }
    tempemployee(id){
        
        this.setState({temp:id});
        console.log("this is id"+id);
    }

    
    deletemployee(id){


        
        console.log("this is id "+id);
        EmployeeServices.deleteleave(id).then(res =>{
            this.setState({leaves:this.state.leaves.filter(leave=> leave.id !==id )})
            
            
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
        window.location.href = '/ListEmpLeaves';
      }, 1200);

    


        })

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
              },100)
            });
          }
        // if (!$.fn.dataTable.isDataTable("#myTable")) {
        //     $(document).ready(function () {
        //       setTimeout(function () {
        //         $("#table").DataTable({
        //           pagingType: "numbers",
        //           pageLength: 5,
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
        //       }, );
        //     });
        //   }
       console.log("id"+this.state.ids);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getAllEmployeeLeave(this.state.ids).then((res) =>{
        
                    this.setState({leaves:res.data})
        
                 
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

  <div className="col-sm-10">
  <Container >
  <button type="button"  class="btn btn-primary m-1" style={{float:'right',color:'white'}}  >	<a href="/leavedisplay" style={{color:'white',  'text-decoration':'none' }} >Applyleave </a></button> 
      <div>
          <br />
          <br />
<h2 className='text-center'>Leave List</h2>
<br />

<div className='row'>


<table id="table"  className='table table-striped table-hover'>
{
sessionStorage.getItem("Role") =="Employee" ? <thead style={{color:'white',backgroundColor:'#78afe6'}}>

   
<tr style={{position: 'sticky',backgroundColor:'#78AFE6',top: 0}}>
    <th scope='col'>Serial number </th>
    <th scope='col'> Employee name</th>
    <th scope='col'> Leave start date</th>
    <th scope='col'> Leave end date</th>
    <th scope='col'>Leave category</th>
    <th scope='col'>Leave reason</th>
    <th scope='col'>Total days</th>
    <th scope='col'>kind of leave</th>
    
    <th scope='col'>Leave status</th>
  

    <th scope='col' colSpan={2}>Acions</th>
    <th></th>
    </tr>

</thead>:<thead style={{color:'white',backgroundColor:'#1b6fc2'}}>

<tr style={{position: 'sticky',backgroundColor:'#1B6FC2',top: 0}}>
    <th scope='col'>Serial number </th>
    <th scope='col'> Employee name</th>
    <th scope='col'> Leave start date</th>
    <th scope='col'> Leave end date</th>
    <th scope='col'>Leave category</th>
    <th scope='col'>Leave reason</th>
    <th scope='col'>Total days</th>
    <th scope='col'>kind of leave</th>
    <th scope='col'>Leave status</th>
    <th scope='col' colSpan='2'>Acions</th>
<th></th>
    </tr>

</thead>}


<tbody>
{

this.state.leaves.map(
    
    (leaves,index)=>
    <tr key={leaves.leaveid }>
    <td>{index+1}</td>
    <td>{leaves.jva_clas.username}</td>
<td>{leaves.leavestartdate }</td>
<td>{leaves.leaveenddate}</td>
<td>{leaves.category}</td>
<td>{leaves.reason}</td>
<td>{leaves.totalDays}</td>
<td>{leaves.kindof}</td>

{ leaves.status == 'pending'? <td className='text-warning' > <b>{leaves.status}</b></td>: leaves.status =="Accept" ?<td className='text-success' > <b>{leaves.status}</b></td>:<td className='text-danger' > <b>{leaves.status}</b></td>}


{ <td>
 {leaves.status == 'pending'?  <a onClick={ () =>  this.editEmployee(leaves.leaveid)}  ><AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>:<a disabled> <AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>  }
       
    </td> }

<td>
	
<a type="button"  onClick={ () =>  this.tempemployee(leaves.leaveid)}   href="#myModal" data-toggle="modal"><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/></a>




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
                 
  <button  onClick={ () =>  this.deletemployee(this.state.temp)} data-dismiss="modal"  className="btn btn-danger">Delete</button>
  </div>
		</div>
	</div>
</div>    
</td>
    <td>
    
  
    <ToastContainer />
    </td>
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
      </div>
      </div>

      </>
    )
  }
}

export default ListEmpLeaves;







