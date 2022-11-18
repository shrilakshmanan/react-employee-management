import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import EmployeeServices from './Serviceclass';
import Footer from './Footer';

class EmployeeHome extends Component {

  constructor(props){
    super(props)
    
    this.state={
    
        employees:[ ],
        queriesclear:'',
        queries:'',
        queriesreject:'',
currentproject:'',
completedproject:'',
yettostart:'',
wfh:'',
    id: sessionStorage.getItem("id"),
    Role:sessionStorage.getItem("Role"),
    name:sessionStorage.getItem("name")
   
    }
}
// console.log(Role);
componentDidMount(){
    //This is js promise here this will wait until the response is came
            EmployeeServices.getEmployeesLeavecount( sessionStorage.getItem("id")).then((res) =>{
    
                this.setState({employees:res.data.leaves})
                this.setState({queriesreject:res.data.rejectedqueryemp})
                this.setState({queriesclear:res.data.Totalqueryres})
                this.setState({queries:res.data.Totalquery})
                this.setState({currentproject:res.data.empcurrent})
                this.setState({completedproject:res.data.completedemp})
                this.setState({yettostart:res.data.Yetemp})
this.setState({wfh:res.data.wfh});
              
               console.log(res.data);

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
      <div>
      <br />
      <br />
 


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

    

    <Row style={{marginLeft:20,marginTop:40}}>   
    
<Col>
<Card style={{ width: '17rem',padding:18,border: '2px solid #3E7DC0' }}>

<Card.Body>
 

  <Card.Text>
<h1></h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Casual Leaves</Card.Subtitle>
  <Card.Text>
<h1>{employees.casualleave} </h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">paid Leaves</Card.Subtitle>
  <Card.Text>
<h1>{employees.paidleave}</h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Sick Leaves</Card.Subtitle>
  <Card.Text>
<h1>{employees.sickleave}</h1>
  </Card.Text>
  <Card.Subtitle className="  text-muted">Work from home</Card.Subtitle>
  <Card.Text>
<h1 >{this.state.wfh}</h1>
  </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{marginLeft:150}}>
<Card style={{ width: '18rem',border: '2px solid #3E7DC0'  }}>

  
<Card.Body>
 

  <Card.Text>
<h1></h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Pending Queries</Card.Subtitle>
  <Card.Text>
  <h1>{this.state.queries}</h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Accepted Query</Card.Subtitle>
  <Card.Text>
<h1><td>{this.state.queriesclear}</td></h1>
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Rejected Query</Card.Subtitle>
  <Card.Text>
<h1><td>{this.state.queriesreject}</td></h1>
  </Card.Text>
  <Card.Subtitle className=" pb-5 text-muted"></Card.Subtitle>
  <Card.Text>
<h1 ></h1>
  </Card.Text>


  </Card.Body>
  </Card>
  </Col>
  <Col style={{marginLeft:30,marginLeft:150}}>
<Card style={{ width: '18rem',border: '2px solid #3E7DC0'  }}>

  
<Card.Body>
 

  <Card.Text>
<h1></h1>
  </Card.Text>
 
  <Card.Subtitle className=" text-muted">Current projects</Card.Subtitle>
  {/* <Card.Subtitle className="mb-2 text-muted">Casual Leaves</Card.Subtitle> */}
  <Card.Text>
<h1><td>{this.state.currentproject}</td></h1>
  </Card.Text>
  <Card.Subtitle className=" text-muted">completed projects</Card.Subtitle>

<Card.Text>
<h1><td>{this.state.completedproject}</td></h1>
</Card.Text>

<Card.Subtitle className=" text-muted">Yet to start</Card.Subtitle>

<Card.Text>

<h1><td>{this.state.yettostart}</td></h1>
<h1></h1>
</Card.Text>
 <Card.Subtitle className=" pb-5 text-muted"></Card.Subtitle>
  <Card.Text>
<h1 ></h1>
  </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  
  <Col>

</Col>


</Row>
<br />



</tr>

   // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
)


}




</tbody>


</table>


    <br/>
    <br />



      </div>
      { <p style={{marginTop:10,marginLeft:400}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p>
       }
      </div>
    )
  }
}

export default EmployeeHome;