

import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
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
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";

 class AdminLeave extends Component {

    constructor(props){
        super(props)
        
        this.state={
        
            leaves:[ ],
            ids:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role")
       
        }
    }
    editEmployee(id){
        console.log(id);
//Navigate(`/Update-employee/${id}`);

window.location.href=`/updateleaveAdmin/${id}`;

//<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>

    }
    componentDidMount(){
      
//  if (!$.fn.dataTable.isDataTable("#myTable")) {
//   $(document).ready(function () {
//     setTimeout(function () {
//       $("#table").DataTable({
//         pagingType: "numbers",
//         pageLength: 5,
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
//           [10, 20, 30, 50, -1],
//           [5,10, 20, 30, 50, "All"],
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
//     }, 1);
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

       console.log("id"+this.state.ids);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getAllEmployeeLeaveAdmin().then((res) =>{
        
                    this.setState({leaves:res.data})
        
                  var a=  sessionStorage.getItem("id")
                 
                    this.setState({id:a});
                  //  console.log(this.state);
                    var b=sessionStorage.getItem("Role");
                   // console.log(b);
                    this.setState({Role:b});
                   // console.log(this.state);
          
          //This is to get the alert messages
                   //    toast.success(, {
                //     position: "bottom-center",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                //     });

                })
            }
  render() {
    return (


        <div className='row'>
  <div className="col-sm-2">
  <Sidenavbar_Admin />
  </div>
  
  <div className="col-sm-10">

      <div>
          <br />
          <br />
<h2 className='text-center' style={{marginBottom:'15px'}}>Leave List</h2>
<br />

<div className='row'>
<Card className='p-4 ' style={{border:'white'}}>

<table id='table' className='table table-striped table-hover'>

<thead  style={{backgroundColor:'#29A76F',color:'white'}}>

<tr style={{position: 'sticky',backgroundColor:'#29A76F',top: 0}}>
<th scope='col'> Serial number</th>
    <th scope='col'> Employee Name</th>
    <th scope='col'> Leave start date</th>
    <th scope='col'> Leave end date</th>
    <th scope='col'>leave category</th>
    <th scope='col'>Reason</th>
    <th scope='col'>Kind of leave</th>
    <th scope='col'>Total days</th>
    <th scope='col'>Status</th>
    <th scope='col'>Acions</th>
    <th scope='col'></th>
    </tr>

</thead>


<tbody>
{

this.state.leaves.map(
    
   ( leaves,index)=>

    <tr key={leaves.leaveid }>
    <td>{index+1}</td> 
    <td>{leaves.jva_clas.username}</td> 
<td>{leaves.leavestartdate }</td>

<td>{leaves.leaveenddate}</td>
<td>{leaves.category}</td>
<td>{leaves.reason}</td>
<td>{leaves.kindof}</td>
<td>{leaves.totalDays}</td>


{ leaves.status == 'pending'? <td className='text-warning' > <b>{leaves.status}</b></td>: leaves.status =="Accept" ?<td className='text-success' > <b>{leaves.status}</b></td>:<td className='text-danger' > <b>{leaves.status}</b></td>}


{/* <td>
 <button onClick={ () =>  this.editEmployee(leaves.leaveid)}   className="btn btn-success">Update </button>
      

    </td> */}
    <td>
 <a onClick={ () =>  this.editEmployee(leaves.leaveid)}  ><AiFillEye  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      

    </td>
    <td></td></tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}




</tbody>


</table>
</Card>

</div>
      </div>    <Footer />
      </div>
      </div>

    )
  }
}

export default AdminLeave;







