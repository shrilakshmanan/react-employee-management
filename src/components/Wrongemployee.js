import React, { Component } from 'react'
import EmployeeServices from './Serviceclass';
import Sidenavbar_Manager from './Sidenavbar_Manager';
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Admin from './Sidenavbar_Admin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdUpdate } from "react-icons/fa";
import { AiFillEye ,AiFillEdit,AiFillDelete} from "react-icons/ai";
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
 class Wrongemployee extends Component {

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
        //This is js promise here this will wait until the response is came
                EmployeeServices.Wrongemployee().then((res) =>{
        
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
            

  render() {
    return ( 

        <div className='row'>
        <div className="col-sm-2">
        <Sidenavbar_Admin />
  </div>
  <Col>
      <div>
      
<h2 className='text-center'>Employees List</h2>

<div className='row' style={{'marginTop':50}}>
<Card className='p-4 ' style={{border:'white'}}>
<table className='table table-striped table-hover'>

<thead  style={{backgroundColor:'#29A76F',color:'white'}}>

<tr style={{position: 'sticky',backgroundColor:'#29A76F',top: 0}}>
<th scope='col'> Serial number</th>
    <th scope='col'> Employee Name</th>
    <th scope='col'> Role</th>
    <th scope='col'> Salary</th>
    <th scope='col'>Employee Email-id</th>
    <th scope='col'>Job role</th>
    <th scope='col'>Date of joining</th>
    <th scope='col'>Date of leaving</th>
    <th scope='col' colSpan={2}>Action</th>
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
<td>{employee.dateofleaving}</td>
<td><a onClick={ () =>  this.editEmployee(employee.employeeid)}  ><AiFillEye  style={{width:'25',color:'#64c0e3',height:'35'}}/> </a>
      </td>
<td><a onClick={ () =>  this.deleteEmployee(employee.employeeid)} ><AiFillDelete  style={{width:'25',color:'#dc3545',height:'35'}}/> </a>
      
     
      </td>
    </tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}


<ToastContainer />

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

export default Wrongemployee;





