import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import EmployeeServices from './Serviceclass';
import { BsFillCursorFill,BsBellFill } from "react-icons/bs";
import { FaTelegramPlane,FaUsers,FaPencilAlt, FaWpforms } from "react-icons/fa";

class AdminHome extends Component {

  constructor(props){
    super(props)
    
    this.state={
    
        employees:[ ],
    id: sessionStorage.getItem("id"),
    Role:sessionStorage.getItem("Role"),
    name:sessionStorage.getItem("name"),
    Totalemp:'',
    Totalleave:'',
    TotQuery:'',
    project:'',
    wfh:''
    }
}
// console.log(Role);
componentDidMount(){
    //This is js promise here this will wait until the response is came
            EmployeeServices.getEmployeesLeavecount( sessionStorage.getItem("id")).then((res) =>{
    this.setState({project:res.data.totprt});
                this.setState({employees:res.data.leaves});
                this.setState({wfh:res.data.wfh});
                this.setState({TotQuery:res.data.TotQuery});
                this.setState({Totalleave:res.data.Totalleave});

                this.setState({Totalemp:res.data.Totalemp});

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
<Row style={{marginLeft:8,marginTop:60}}>    


<Col>

<Card style={{ width: '19rem',borderColor:'#094628' }}>

  
<Card.Body>
   <Card.Title  className='text-warning'>Details</Card.Title>
   <Row>
  <Col>
 
  <h1 className='text-warning'>{this.state.Totalleave} </h1>
  <Card.Subtitle className="mb-2 text-muted">Pending Leaves</Card.Subtitle>
 
  </Col>
  <Col>


  <BsBellFill className='text-warning' style={{width:150,height:50}}/>
  </Col>
  </Row>
  <Card.Text>
<h1></h1>
  </Card.Text>

  
  </Card.Body>
  </Card>
  </Col>
  <Col style={{marginLeft:50}}>

  
  <Card  style={{ width: '19rem',borderColor:'#094628' }}>
  <Card.Body>
  <Card.Title className='text-primary'>Employees</Card.Title>
  <Row>
 <Col>


  <h1 className='text-primary' >{this.state.Totalemp} </h1>

  <Card.Subtitle className="mb-2 text-muted">Total Employees</Card.Subtitle>
  </Col>
  <Col>
  <FaUsers className='text-primary' style={{width:150,height:50}}/>
  </Col>
  </Row>
  <Card.Text>
<h1></h1>
  </Card.Text>
 
  </Card.Body>
  <Card.Text>

  </Card.Text>
  </Card>
  </Col>


  <Col style={{marginLeft:50}}>
  <Card  style={{ width: '19rem',borderColor:'#094628' }}>
  <Card.Body>
  <Card.Title className='text-info'>My Queries</Card.Title>
  <Row>
 <Col>


 <h1 className='text-info'>{this.state.TotQuery}</h1>


 <Card.Subtitle className="mb-2 text-muted">pending Queries</Card.Subtitle>
  </Col>
  <Col>
  <FaPencilAlt  className='text-info' style={{width:150,height:50}}/>
  </Col>
  </Row>
  <Card.Text>
  <h1></h1>
  </Card.Text>

</Card.Body>
</Card>
</Col>
</Row>
<br />
<Row>
<Col style={{marginLeft:20,marginTop:30}}>
  <Card  style={{ width: '19rem',borderColor:'#094628' }}>
  <Card.Body>
  <Card.Title className='text-success'>Total projects</Card.Title>
  <Row>
 <Col>


 <h1 className='text-success'>{this.state.project}</h1>

 <Card.Subtitle className="mb-2 text-muted">No of projects</Card.Subtitle>
  </Col>
  <Col>
  < FaWpforms className='text-success' style={{width:150,height:50}}/>
  </Col>
  </Row>
  <Card.Text>
<h2></h2>
  </Card.Text>
 


</Card.Body>
</Card>
</Col>




<br />




   {/* // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a> */}








  
    </Row>
    <br/>
    <br />

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
      <footer> <p style={{marginLeft:450,marginTop:80}}>Eoxys © 2022 .  
Powered by <img _ngcontent-jjc-c98="" src="http://localhost/eoxys_store/assets/images/e_logo.png" style={{height: '20px'}}></img></p></footer>
     
      </div>
    )
  }
}

export default AdminHome;