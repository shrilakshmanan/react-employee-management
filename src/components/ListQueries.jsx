import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";
import Card from 'react-bootstrap/Card';
 class ListQueries extends Component {

    constructor(props){
        super(props)
        
        this.state={
        
            queries:[ ],
            ids:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role"),
        temp:'' 
       
        }
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
      //     }, 10);
      //   });
      // }
      //  console.log("id"+this.state.id);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getEmployeeQuery(this.state.ids).then((res) =>{
        
                    this.setState({queries:res.data})
        
                  var a=  sessionStorage.getItem("id")
                 
                    this.setState({id:a});
                  //  console.log(this.state);
                    var b=sessionStorage.getItem("Role");
                   // console.log(b);
                    this.setState({Role:b});
                   // console.log(this.state);

                })
            }

            tempemployee(id){
        
              this.setState({temp:id});
              console.log("this is id"+id);
          }
      

            editEmployee(id){
                console.log(id);
        //Navigate(`/Update-employee/${id}`);
        window.location.href=`/updatequeries/${id}`;
        //<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
        
        
            }

            tempemployee(id){
        
              this.setState({temp:id});
              console.log("this is id"+id);
          }
      

            deleteEmployee(id){

              EmployeeServices.deletequery(id).then(res =>{
                  this.setState({queries:this.state.queries.filter(querie=> querie.id !==id )})
              
                  
          toast.success("Deleted Successfully", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose:980,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              
          });
        
          
        
            const timer = setTimeout(() => {
              window.location.href = '/ListQueries';
            }, 1100);
      
          
      
      
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

      <div><button type="button"  class="btn btn-primary" style={{float:'right',margin:5 ,color:'white'}}  >	<a href="/support" style={{color:'white',  'text-decoration':'none' }} >Raise Query </a></button> 
  <br />        
<h2 className='text-center'>Query List</h2>
<br />

<div className='row'>
<Card className='p-4 ' style={{border:'white'}}>
<table id="table" className='table table-striped table-hover'>

{
sessionStorage.getItem("Role") =="Employee" ? 

<thead style={{color:'white',backgroundColor:'#78AFE6'}}>

<tr style={{position: 'sticky',backgroundColor:'#78AFE6',top: 0}}>
<th scope='col'> Serial number</th>
    <th scope='col'> Query</th>
    <th scope='col'> Query category</th>
    <th scope='col'> Query raised date</th>
    <th scope='col'>Response</th>
    <th scope='col'>Status</th>
    <th scope='col' >Update</th>
    <th scope='col' >Delete</th>
  
    </tr>

</thead>:
<thead style={{color:'white',backgroundColor:'#1b6fc2'}}>

<tr style={{position: 'sticky',backgroundColor:'#1B6FC2',top: 0}}>
<th scope='col'> Serial number</th>
    <th scope='col'> Query</th>
    <th scope='col'> Query category</th>
    <th scope='col'> Query raised date</th>
    <th scope='col'>Response</th>
    <th scope='col'>Status</th>
    <th scope='col' >Update</th>
    <th scope='col' >Delete</th>
    </tr>

</thead>
}

<tbody>
{

this.state.queries.map(
    
    (queries,index)=>

    <tr key={queries.queryid }>
    <td>{index+1}</td>
    <td>{queries.queries}</td>
    <td>{queries.category}</td>
    <td>{queries.querydate}</td>
    <td>{queries.response}</td>
 
    { queries.status == 'pending'? <td className='text-warning' > <b>{queries.status}</b></td>: queries.status =="Accept" ?<td className='text-success' > <b>{queries.status}</b></td>:<td className='text-danger' > <b>{queries.status}</b></td>}
 

{/* <button onClick={ () =>  this.editEmployee(queries.queryid)}    className="btn btn-info">Update </button> */}
{ <td>
{queries.status == 'pending'?  <a onClick={ () => this.editEmployee(queries.queryid)}    ><AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>:<a disabled> <AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>  }
     
    </td> }

    <td>
    <a href="#myModal"  onClick={ () =>  this.tempemployee(queries.queryid)}  style={{color:'white',textDecoration:'none'}} data-toggle="modal"><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/>


</a>

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
                <button   onClick={ () => this.deleteEmployee(this.state.temp)} data-dismiss="modal"  className="btn btn-danger">Delete</button>
			</div>
		</div>
	</div>
</div> 


	
  <div>

</div>
<ToastContainer />

  </td>
   </tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}

</tbody>


</table></Card>
</div>
 <Footer />
      </div>
      {/* <footer> <p style={{marginLeft:450,marginTop:8}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p></footer>
      */}
      </Col>
     
      </div>
      </>
    )
  }
}

export default ListQueries;







