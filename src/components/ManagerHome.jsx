// import React, { Component } from 'react'
// import { Col, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

//  class ManagerHome extends Component {
//   render() {
//     return (
//       <div>
//       <div>
//       <br />
//       <br />
// <Row style={{marginLeft:80}}>    
// <Col>
//         <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Query count</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Queries raised</Card.Subtitle>
//         <Card.Text>
//       <h1> { sessionStorage.getItem("allqueries")}</h1>
//         </Card.Text>
       
//         <Card.Subtitle className="mb-2 text-muted">Queries pending</Card.Subtitle>
//         <Card.Text>
//       <h1> { sessionStorage.getItem("querycount")}</h1>
//         </Card.Text>
//         <Card.Subtitle className="mb-2 text-muted">Queries Accepted</Card.Subtitle>
//         <Card.Text>
//       <h1> { sessionStorage.getItem("AcceptQueries")}</h1>
//         </Card.Text>
//         <Card.Subtitle className="mb-2 text-muted">Queries Rejected</Card.Subtitle>
//         <Card.Text>
//       <h1> { sessionStorage.getItem("Reject")}</h1>
//         </Card.Text>
//       </Card.Body>
//     </Card></Col>
//     <Col>
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//          <Card.Title>Leaves</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Available leaves</Card.Subtitle>
//         <Card.Text>
//  <h1>{ sessionStorage.getItem("Totalleave")}</h1>
//         </Card.Text>
//         <Card.Subtitle className="mb-2 text-muted">Casual Leaves</Card.Subtitle>
//         <Card.Text>
//  <h1>{ sessionStorage.getItem("Totalleave")}</h1>
//         </Card.Text>
//         <Card.Subtitle className="mb-2 text-muted">Paid leaves</Card.Subtitle>
//         <Card.Text>
//  <h1>{ sessionStorage.getItem("Totalleave")}</h1>
//         </Card.Text>
//         <Card.Subtitle className="mb-2 text-muted">Sick leaves</Card.Subtitle>
//         <Card.Text>
//  <h1>{ sessionStorage.getItem("Totalleave")}</h1>
//         </Card.Text>
   
//       </Card.Body>
//     </Card>


//     </Col>
//     </Row>
//     <br/>
//     <br />

// {/* <Row style={{marginLeft:80}}>
//     <Col>
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Leaves</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Available leaves</Card.Subtitle>
//         <Card.Text>
//  <h1>{ sessionStorage.getItem("Totalleave")}</h1>
//         </Card.Text>
//         <Card.Subtitle className="mb-2 text-muted">Used leaves</Card.Subtitle>
//         <Card.Text>
//  <h1>{ sessionStorage.getItem("Totalleave")}</h1>
//         </Card.Text>

//       </Card.Body>
//     </Card>
//     </Col>
//     <Col>
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>projects</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Current Projects</Card.Subtitle>
//         <Card.Text>
// 5
//         </Card.Text>
//         <Card.Subtitle className="mb-2 text-muted">Completed Projects</Card.Subtitle>
//         <Card.Text>
// 5
//         </Card.Text>


//       </Card.Body>
//     </Card>
//     </Col>
// </Row> */}
//       </div>
//       </div>
//     )
//   }
// }

// export default ManagerHome;









import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import EmployeeServices from './Serviceclass';
import Footer from './Footer';

class ManagerHome extends Component {

  constructor(props){
    super(props)
    
    this.state={
    
        employees:[ ],
    id: sessionStorage.getItem("id"),
    Role:sessionStorage.getItem("Role"),
    name:sessionStorage.getItem("name"),
   Managerempcount:'',
   queries:'',
queriesclear:'',
currentproject:'',
completed:'',
yetto:'',
wfh:''
    }
}


// console.log(Role);
componentDidMount(){
    //This is js promise here this will wait until the response is came
            EmployeeServices.getEmployeesLeavecount( sessionStorage.getItem("id")).then((res) =>{
    
                this.setState({employees:res.data.leaves})
                this.setState({wfh:res.data.wfh})
                this.setState({Managerempcount:res.data.managerEmp})
                this.setState({yetto:res.data.yetto})
                this.setState({completed:res.data.completed})
               console.log(res.data);

               this.setState({currentproject:res.data.current})
               this.setState({queriesclear:res.data.Totalqueryres})
               this.setState({queries:res.data.Totalquery})

              var a= sessionStorage.getItem("id")
                console.log(a);
                this.setState({id:a});
                var b=sessionStorage.getItem("Role");
                console.log(b);
                this.setState({Role:b});
                console.log(this.state);
var c=sessionStorage.getItem("name");
this.setState({name:c});
console.log(c);


            })
        }





  render() {
    return (
      <div>
   <br />
      <br />
      <br />
      <br />
      <div>
     
     
      <div class="card-group">
      
  <div class="card mr-5 "  style={{ border: '2px solid #3E7DC0'}}>
  

   <Card.Title  style={{backgroundColor:'#19495d',height:75,color:'white'}}><p className='text-center mt-2'>Leaves</p></Card.Title> 
    
    <div class="card-body text-center">
    <table className='table'>

<thead>

<tr>


    
    </tr>

</thead>


<tbody>
{

this.state.employees.map(
    
  employees=>
    <tr key={employees.employeeid }>


  



  
<Card.Body className='text-center'>


  
  <Card.Subtitle className=" text-muted mb-3">Casual Leaves</Card.Subtitle>
  <Card.Text>
<h1>{employees.casualleave}</h1>
  </Card.Text>
  <Card.Subtitle className=" text-muted mb-3">Paid leaves</Card.Subtitle>
  <Card.Text>
<h1>{employees.paidleave}</h1>
  </Card.Text>
  <Card.Subtitle className="  text-muted mb-3">Sick leaves</Card.Subtitle>
  <Card.Text>
<h1 >{employees.sickleave}</h1>
  </Card.Text>
 
</Card.Body>




<br />



</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}




</tbody>


</table>
    </div>
  </div>
 

  <div class="card mr-5"  style={{ border: '2px solid #3E7DC0'}}>
  <Card.Title  style={{backgroundColor:'#19495d',height:75,color:'white'}}><p className='text-center mt-2'>My Queries</p></Card.Title>
    <div class="card-body ">
  

  
<Card.Body className='text-center'>

  

  <Card.Subtitle className="mb-2 text-muted"> Pending Queries</Card.Subtitle>
  {/* <Card.Subtitle className="mb-2 text-muted">Casual Leaves</Card.Subtitle> */}
  <Card.Text>
<h1>{this.state.queries}</h1>
  </Card.Text>

  <Card.Subtitle className="mb-2 text-muted"> Responded Queries</Card.Subtitle>

  {/* <Card.Subtitle className="mb-2 text-muted">Casual Leaves</Card.Subtitle> */}
  <Card.Text>
<h1>{this.state.queriesclear}</h1>
  </Card.Text>
   <Card.Subtitle className="mb-2 text-muted">Total Employees</Card.Subtitle>

  <Card.Text>
<h1></h1>
  </Card.Text>
  {/* <Card.Subtitle className="mb-2 text-muted">Casual Leaves</Card.Subtitle> */}
  <Card.Text>
<h1>{this.state.Managerempcount}</h1>
  </Card.Text>
  <Card.Subtitle className="  text-muted">Work from home</Card.Subtitle>
  <Card.Text>
<h1 >{this.state.wfh}</h1>
  </Card.Text> 

</Card.Body>


    </div>
  </div>
  <div class="card mr-1"  style={{ border: '2px solid #3E7DC0'}}>
  <Card.Title  style={{backgroundColor:'#19495d',height:75,color:'white'}}><p className='text-center mt-2'>Project</p></Card.Title>
    <div class="card-body text-center">
   
   

  
<Card.Body>


  <Card.Subtitle className="mb-3 text-muted">Active project</Card.Subtitle>
  <Card.Text>
<h1>{this.state.currentproject}</h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Yet to start</Card.Subtitle>
  <Card.Text>
<h1>{this.state.yetto}</h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">completed</Card.Subtitle>
  <Card.Text>
<h1>{this.state.completed}</h1>
  </Card.Text>

</Card.Body>




    </div>
  </div>
</div>



{/* <Row style={{marginLeft:80}}>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Leaves</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Available leaves</Card.Subtitle>
        <Card.Text>
 <h1>{ sessionStorage.getItem("Totalleave")}</h1>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>projects</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
</Row> */}
      </div>
      <Footer />
      </div>
    )
  }
}

export default ManagerHome;