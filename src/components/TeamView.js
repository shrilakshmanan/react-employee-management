import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidenavbar_Employee from './Sidenavbar_Employee';
import EmployeeServices from './Serviceclass';
import Sidenavbar_Admin from './Sidenavbar_Admin';
import { FaAngleDoubleLeft } from "react-icons/fa";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";


 class TeamView extends Component {

    constructor(props){
        super(props)
        var url=window.location.pathname
        var idds= url.substring(url.lastIndexOf('/') + 1);
        
        this.state={
        
            projects:[ ],
            empdata:[],
        id:idds,
        Role:sessionStorage.getItem("Role")
       
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
          }, 100);
        });
      }

      //  console.log("id"+this.state.id);
        //This is js promise here this will wait until the response is came
                EmployeeServices.getTeam(this.state.id).then((res) =>{
        
                //    this.setState({projects:res.data.split(',')})

                this.setState({empdata:res.data})
        
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
      <div>
      <a href="/ProjectEmpDisplay" style={{color:'blue'}}><FaAngleDoubleLeft /> Back</a>      
<h2 className='text-center'>project Details</h2>
<br></br>


<div className='row '>

<table id='table' className='table table-striped table-hover'>

<thead style={{color:'white',backgroundColor:'#78afe6'}}>

<tr>

    <th scope='col'> Serial number </th>
    <th scope='col'> Team Mates </th>

    <th scope='col'> Job Position </th>
    <th></th>
    </tr>

</thead>


<tbody>
{

this.state.empdata.map(
    
    (empdata,index)=>
    <tr key={index}>
    <td>{index+1}</td>
    <td>{empdata.username}</td>
    <td>{empdata.salary.position}</td>
<td>

</td>
</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)

}

</tbody>


</table>


</div>
      </div>
      </Col>
      </div>
     
      </>
    )
  }
}
export default TeamView;








