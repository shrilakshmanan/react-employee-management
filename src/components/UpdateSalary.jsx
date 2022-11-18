
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';
 class UpdateSalary extends Component {

    constructor(props){
        super(props)
        
        this.state={
        
            employees:[ ],
        id:sessionStorage.getItem("id"),
        Role:sessionStorage.getItem("Role")
       
       
        }
    }




        editEmployee(id){
            console.log(id);
    //Navigate(`/Update-employee/${id}`);
    window.location.href=`/updatesalaryandDept/${id}`;
    //<a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
    
    
        }
        deletemployee(id){


        
            console.log("this is id "+id);
            EmployeeServices.deletesalary(id).then(res =>{
                this.setState({employees:this.state.employees.filter(employees=> employees.id !==id )})
                
                
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
            window.location.href = '/UpdateSalary';
          }, 1200);
    
        
    
    
            })
    
        }
        tempemployee(id){
        
            this.setState({temp:id});
            console.log("this is id"+id);
        }
    
    
   // console.log(Role);
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
   
        //This is js promise here this will wait until the response is came
                EmployeeServices.UpdateSalaryAndDept().then((res) =>{
        
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
      
<h2 className='text-center'>department List</h2>

<div className='row' style={{'marginTop':50}}>
<Card className='p-4 ' style={{border:'white'}}>
<table id='table' className='table table-striped table-hover'>

<thead  style={{backgroundColor:'#29A76F',color:'white'}}>

<tr style={{position: 'sticky',backgroundColor:'#29A76F',top: 0}}>
<th scope='col'> Serial number</th>

<th scope='col'> Position</th>
    <th scope='col'> Salary</th>

    <th scope='col'> Department</th>
<th>Update</th>

    </tr>

</thead>


<tbody>
{

this.state.employees.map(
    
    (employee,index)=>
    <tr key={employee.salaryid}>
    <td>{index+1}</td>
<td>{employee.position}</td>
<td>{employee.salary}</td>
<td>{employee.department}</td>
<td><a onClick={ () =>  this.editEmployee(employee.salaryid)}  ><AiFillEdit  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
</td>

{/* <td>
	
<a type="button"  onClick={ () =>  this.tempemployee(employee.salaryid)}   href="#myModal" data-toggle="modal"><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/></a>




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
</td> */}
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
      

    )
  }
}

export default UpdateSalary;






