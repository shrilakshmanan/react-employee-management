import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AfterLogin from "../components/AfterLogin";
import Sidenavbar_Employee from "./Sidenavbar_Employee";
import ListEmpLeaves from "./ListEmpLeaves";
import EmployeeServices from "./Serviceclass";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidenavbar_Manager from "./Sidenavbar_Manager";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import Dropdown from "react-bootstrap/Dropdown";
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import Sidenavbar_Admin from "./Sidenavbar_Admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEditOff } from "react-icons/md";
import { FaAngleDoubleLeft } from "react-icons/fa";

var employelist = [];

class updateprojects extends Component {
  constructor(props) {
    super(props);

    var url = window.location.pathname;
    var idds = url.substring(url.lastIndexOf("/") + 1);

    this.state = {
      projectid: idds,
      Employees: [],
      // Splitarr:Employeeid.split(','),
      Employeeid: [],
      // employeename:'',
      managers: [],
      isDisabled: true,
      hidden: true,
      projectname: "",
      startdate: "",
      enddate: "",
      status: "",
      projectdescription: "",
      ManagerIncharge: "",
      Role: sessionStorage.getItem("Role"),
      empdata: [],
    };

    employelist = this.state.Employeeid;
  }

  componentDidMount() {
    EmployeeServices.jvaclas().then((res) => {
      console.log(res.data);
      this.setState({ managers: res.data });

      //    var a=  sessionStorage.getItem("id")

      //      this.setState({id:a});
      //    //  console.log(this.state);
      //      var b=sessionStorage.getItem("Role");
      //     // console.log(b);
      //      this.setState({Role:b});
      //     // console.log(this.state);
    });

    EmployeeServices.updateproject(this.state.projectid).then((res) => {
      this.setState({
        projectname: res.data.projectname,
        ManagerIncharge: res.data.managerid,
        projectdescription: res.data.projectdescription,
        status: res.data.status,
        startdate: res.data.startdate,
        Employeeid: res.data.employeeid.split(","),
        enddate: res.data.enddate,
      });

      employelist = res.data.employeeid.split(",");

      //  console.log("employees",Employees)//s

      //    this.setState({

      //     // Employeeid: Employees.username,

      // });
      //
      // console.log("this is "+Employeeid);
      EmployeeServices.getTeam(res.data.projectname).then((res) => {
        //    this.setState({projects:res.data.split(',')})

        this.setState({ empdata: res.data });

        var a = sessionStorage.getItem("id");

        this.setState({ id: a });
        // console.log(this.state);
        var b = sessionStorage.getItem("Role");
        console.log(b);
        this.setState({ Role: b });
        console.log(this.state);
      });
    });

    EmployeeServices.getAllEmployeeId().then((res) => {
      this.setState({ Employees: res.data });
    });
  }

  onChangeleavestartHandler = (event) => {
    this.setState({ startdate: event.target.value });
  };

  onChangedescription = (event) => {
    this.setState({ projectdescription: event.target.value });
  };
  onChangeleaveendHandler = (event) => {
    this.setState({ enddate: event.target.value });
  };

  deleteproject = (index) => {
    console.log("aeet", index);

    //  this.state.Employeeid.splice(index,1);
    this.setState({ employelist: employelist.splice(index, 1) });

    toast.success(" Deleted successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1300,
    });
    console.log(this.state.Employeeid);

    // this.setState({leaves:this.state.leaves.filter(leave=> leave.id !==id )})
    //   onChangestatusHandler=(event) =>{
    //     this.setState({status:event.target.value})
    // }
  };

  onChangestatus = (event) => {
    console.log(event.target.value);
    this.setState({ status: event.target.value });
  };

  onChangemanagerincharge = (event) => {
    if (event.target.value == " ") {
      console.log("The value os null");
    }

    console.log("sdgETZWRTzbr  " + event.target.value);
    this.setState({ ManagerIncharge: event.target.value });
  };

  onChangeTotaldaysHandler = (event) => {
    this.setState({ Totaldays: event.target.value });
  };
  onChangecategoryHandler = (event) => {
    this.setState({ category: event.target.value });
  };
  onChangeReasonHandler = (event) => {
    this.setState({ Reason: event.target.value });
  };
  onChangeEmployeeHandler = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const option = el.getAttribute("employeeid");
    this.setState({ employelist: event.target.value });
    if (employelist.includes(event.target.value)) {
      console.log("The value is already present ");
      toast.warning(event.target.value + " already added", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
      });
    } else {
      employelist.push(event.target.value);

      console.log("employyy", event.target.value);

      toast.success(event.target.value + " added", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
      });
    }

    var li = document.createElement("li");
    var mytxt = event.target.value;

    console.log("thisis optin" + mytxt);

    var crtTxt = document.createTextNode(mytxt);
    li.appendChild(crtTxt);
    if (mytxt == "") {
      alert("empty");
    } else {
      document.getElementById("ul").appendChild(li);
      document.getElementById("addings").value = "";
    }
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    console.log(myNodelist.length);
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
    var close = document.getElementsByClassName("close");

    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;

        div.style.display = "none";
      };
    }
  };

  pushbtn() {}

  onChangeprojectHandler = (event) => {
    this.setState({ projectname: event.target.value });
  };
  handleSubmitClicked() {
    this.setState({
      isDisabled: false,
      hidden: false,
    });
  }

  HandleSubmitClicked() {
    this.setState({
      isDisabled: true,
      hidden: true,
    });
  }
  able() {
    console.log("i clicked");
  }

  //   // create a copy of  this.state.groups

  // change = e => {

  //   const copyGroups = JSON.parse(JSON.stringify(this.state.groups));

  //   // get data-group value
  //   const group = event.target.dataset.group;

  //   if (!copyGroups[0][group]) {
  //     copyGroups[0][group] = []; // add type if it doesn't exists
  //   }

  //   const groups = copyGroups[0][group];
  //   const index = this.findFieldIndex(groups, e.target.name);

  //   if (index < 0) {
  //     // if input doesn't exists add to the array
  //     copyGroups[0][group] = [...groups, { [e.target.name]: e.target.value }];
  //   } else {
  //     // else update the value
  //     copyGroups[0][group][index][e.target.name] = e.target.value;
  //   }

  //   this.setState({ groups: copyGroups });
  // };

  compare = (event) => {

    if(this.state.ManagerIncharge==1){
      toast.warning("Please assign a manager", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
    }
    else{
    var a = sessionStorage.getItem("id");
    console.log("this is id" + a);
    this.setState({ id: a });
    console.log(this.state);

    event.preventDefault();
    // let history = useHistory();

    let employee = {
      employeeid: employelist.toString(),
      managerid: this.state.ManagerIncharge,
      projectid: this.state.projectid,
      projectname: this.state.projectname,
      projectdescription: this.state.projectdescription,
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      status: this.state.status,
    };

    console.log("employee =>" + JSON.stringify(employee));

    EmployeeServices.updateprojectemp(this.state.projectid, employee).then(
      (res) => {
        //   navigate('/ManagerEmpDisplay');

        // localStorage.setItem(res.data.data);

        // console.log("user saved successfully");

        toast.success("Project updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1300,
        });
        if (sessionStorage.getItem("Role") == "Manager") {
          const timer = setTimeout(() => {
            window.location.href = `/displaymanagerproject/${sessionStorage.getItem(
              "id"
            )}`;
          }, 1200);
        }
        
      
        // const timer = setTimeout(() => {
        //   window.location.href = '/Addproject';
        // }, 1200);

        //  window.location.href = '/Addproject';
        //    history.push("./components/managerEmpDisplay")
        //  this. props.history.push("/managerEmpDisplay");
        // <Route path="/managerEmpDisplay" render={() => <Navigate to="/managerEmpDisplay" />} />
      }
      
      // this.redirect()
    );
    }
  };

  render() {
    return this.state.Role == "Manager" ? (
      <>
        <div className="row" style={{ overflow: "clip" }}>
          <div className="col-sm-2">
            <Sidenavbar_Admin />
          </div>
          <div className="col-md-10 mt-5 d-flex justify-content-center">
            <br />

            <br />

            <div>
              <Card style={{ width: "55rem" }}>
                <Card.Body>
                  <h3 style={{ "justify-content": "center" }}>
                    {" "}
                    project View
                    {this.state.isDisabled == true ? (
                      <>
                        {" "}
                        <a className="text-right ">
                          <button
                            className=" btn btn-primary col-sm-1"
                            onClick={this.handleSubmitClicked.bind(this)}
                          >
                            Edit
                          </button>
                        </a>
                      </>
                    ) : (
                      <>
                        <a className="text-right m-1">
                          <button
                            onClick={this.HandleSubmitClicked.bind(this)}
                            className=" btn btn-primary col-sm-1"
                          >
                            View
                          </button>
                        </a>
                      </>
                    )}
                  </h3>
                  <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <div class="mb-3">
                          <label class="form-label" for="inputPassword">
                            Project name
                          </label>
                          <textarea
                            type="text"
                            id="pass"
                            value={this.state.projectname}
                            disabled={this.state.isDisabled}
                            onChange={this.onChangeprojectHandler}
                            name="Reason"
                            class="form-control form-control-lg buton"
                            rows="2"
                            cols="40"
                          ></textarea>
                        </div>
                      </div>
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <div class="mb-3">
                          <label class="form-label" for="inputPassword">
                            Project description
                          </label>
                          <textarea
                            type="text"
                            id="pass"
                            value={this.state.projectdescription}
                            disabled={this.state.isDisabled}
                            onChange={this.onChangedescription}
                            name="Reason"
                            class="form-control form-control-lg buton"
                            rows="2"
                            cols="40"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <div class="mb-3">
                          <input
                            type="date"
                            class="form-control"
                            name="leavestartdate"
                            id="inputEmail"
                            placeholder="Email"
                            required
                            hidden
                          />

                          <label class="form-label" for="inputEmail">
                            From
                          </label>
                          <input
                            type="date"
                            class="form-control"
                            name="leavestartdate"
                            value={this.state.startdate}
                            onChange={this.onChangeleavestartHandler}
                            disabled={this.state.isDisabled}
                            required
                            id="inputEmail"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <div class="mb-3">
                          <label class="form-label" for="inputPassword">
                            To
                          </label>
                          <input
                            type="date"
                            value={this.state.enddate}
                            onChange={this.onChangeleaveendHandler}
                            disabled={this.state.isDisabled}
                            class="form-control"
                            id="inputPassword"
                            name="leaveenddate"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <label class="form-label" for="inputPassword">
                          Employee names
                        </label>
                        <Form.Select
                          disabled={this.state.isDisabled}
                          onChange={this.onChangeEmployeeHandler}
                        >
                          {this.state.Employees.map((Employees) => (
                            <option
                              id="addings"
                              onChange={this.onChangeEmployeeHandler}
                              value={Employees.username}
                            >
                              {Employees.username}
                              {
                                //  console.log("employeeid",id)
                              }
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <div class="mb-3">
                          <div class="mb-3">
                            <label class="form-label" for="inputPassword">
                              status
                            </label>
                            {/* <input type="text" value={this.state.Status} onChange={this.onChangestatus} class="form-control" name="Status"  id="inputPassword"  /> */}

                            <select
                              name="kindof"
                              onChange={this.onChangestatus}
                              value={this.state.status}
                              disabled={this.state.isDisabled}
                              id="lname"
                              class="form-control form-control-md"
                            >
                              <option
                                hidden
                                name="kindof"
                                onChange={this.onChangestatus}
                                selected
                              >
                                select one..
                              </option>
                              <option
                                name="kindof"
                                onChange={this.onChangestatus}
                                value="Yettostart"
                              >
                                <strong>Yet to start</strong>
                              </option>
                              <option
                                name="kindof"
                                onChange={this.onChangestatus}
                                value="Current"
                              >
                                <strong> current</strong>
                              </option>
                              <option
                                name="kindof"
                                onChange={this.onChangestatus}
                                value="completed"
                              >
                                <strong>completed</strong>
                              </option>
                            </select>
                          </div>
                          {/* <label class="form-label" for="inputPassword">Employee names</label>
              <Form.Select  onChange={this.onChangeEmployeeHandler}  >
      {

this.state.Employees.map(
    
  Employees=>
 
 
          <option  id="addings" onChange={this.onChangeEmployeeHandler}  value={Employees.username}>{Employees.username}
        {
        //  console.log("employeeid",id)
        }
           </option>
    
       
        ) } 
        </Form.Select> */}
                          {/* {
         this.state.Employeeid.map(

Employeeid =>

             <div class="mb-3">
        <label class="form-label" for="inputPassword">Employee name</label>
        <textarea  type="text" id="pass" value={this.state.Employeeid} onChange={this.onChangeEmployeeHandler} name="Reason" class="form-control form-control-lg" rows="2"cols="40" ></textarea>
    </div>
     
            <ToastContainer />
         )} */}

                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col"> Serial number</th>
                                <th scope="col"> Employee Name</th>
                              </tr>
                            </thead>

                            <tbody>
                              {employelist.map(
                                (employelist, index) => (
                                  <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{employelist}</td>

                                    {
                                      <td>
                                        <a
                                          onClick={() =>
                                            this.deleteproject(index)
                                          }
                                        >
                                          <AiFillDelete
                                            hidden={this.state.hidden}
                                            style={{
                                              width: "25",
                                              color: "#dc3545",
                                              height: "35",
                                            }}
                                          />{" "}
                                        </a>
                                      </td>
                                    }
                                    {/*
      <td><button onClick={ () =>  this.deleteEmployee(employee.employeeid)}  className="btn btn-danger">Delete </button>
      
      <ToastContainer />
      </td> */}
                                  </tr>
                                )

                                // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary col-sm-3  "
                      hidden={this.state.hidden}
                      style={{ marginLeft: 320 }}
                      onClick={this.compare}
                    >
                      submit
                    </button>
                    <br />
                    <ToastContainer />
                  </form>
                </Card.Body>
              </Card>
              <p style={{ marginTop: 2, marginLeft: 640 }}>
                Eoxys © 2022 . Powered by{" "}
                <img
                  _ngcontent-jjc-c98=""
                  src="http://localhost/eoxys_store/assets/images/e_logo.png"
                  style={{ height: "20px" }}
                ></img>
              </p>
            </div>
          </div>
        </div>
      </>
    ) : this.state.Role == "Employee" ? (
      <>
        <div className="row" style={{ overflow: "clip" }}>
          <div className="col-sm-2">
            <Sidenavbar_Admin />
          </div>
          <div className="col-md-10 mt-5 d-flex justify-content-center">
            <br />

            <br />

            <div>
              <a href="/ProjectEmpDisplay" style={{ color: "blue" }}>
                <FaAngleDoubleLeft /> Back
              </a>

              <Card style={{ width: "55rem" }}>
                <Card.Body>
                  <h3 style={{ "justify-content": "center" }}>
                    {" "}
                    {this.state.projectname}
                  </h3>

                  <form class="form-card" onsubmit="event.preventDefault()">
             
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <div class="mb-3">
                          <label class="form-label" for="inputPassword">
                            <h5>Project description</h5>
                          </label>
                          <p
                            style={{ fontSize: "20px" }}
                            type="text"
                            id="pass"
                            value={this.state.projectdescription}
                            disabled={this.state.isDisabled}
                            onChange={this.onChangedescription}
                            name="Reason"
                            class=" buton"
                            rows="2"
                            cols="40"
                          >
                            {this.state.projectdescription}
                          </p>
                        </div>
                      </div>
                      <div class="form-group col-sm-4 flex-column d-flex">
                        <div class="mb-3">
                          <label class="form-label" for="inputPassword">
                            <h5>Status</h5>
                          </label>
                          {/* <input type="text" value={this.state.Status} onChange={this.onChangestatus} class="form-control" name="Status"  id="inputPassword"  /> */}

                          <p
                            style={{ fontSize: "20px" }}
                            type="date"
                            value={this.state.enddate}
                            onChange={this.onChangeleaveendHandler}
                            disabled={this.state.isDisabled}
                            id="inputPassword"
                            name="leaveenddate"
                            placeholder="Password"
                          >
                            {this.state.status}
                          </p>
                          {/* <select  name="kindof" onChange={this.onChangestatus} value={this.state.status} disabled={this.state.isDisabled} id="lname" class="form-control form-control-md">
                                    
                                        <option hidden name="kindof" onChange={this.onChangestatus}  selected >select one..</option>
                                                <option name="kindof" onChange={this.onChangestatus}   value="Yettostart"><strong>Yet to start</strong>
                                                </option>
                                                <option name="kindof"  onChange={this.onChangestatus}  value="Current"><strong> current</strong></option>
                                                <option name="kindof" onChange={this.onChangestatus}   value="completed"><strong>completed</strong>
                                                </option>
                                                
                                    </select>		 */}
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <div class="mb-3">
                          <input
                            type="date"
                            class="form-control"
                            name="leavestartdate"
                            id="inputEmail"
                            placeholder="Email"
                            required
                            hidden
                          />

                          <label class="form-label" for="inputEmail">
                            <h5>From</h5>
                          </label>
                          <p
                            style={{ fontSize: "20px" }}
                            type="date"
                            name="leavestartdate"
                            value={this.state.startdate}
                            onChange={this.onChangeleavestartHandler}
                            disabled={this.state.isDisabled}
                            required
                            id="inputEmail"
                            placeholder="Email"
                          >
                            {this.state.startdate}
                          </p>
                        </div>
                      
                      </div>
                      <div class="form-group col-sm-4 flex-column d-flex">
                        <div class="mb-3">
                          <label class="form-label" for="inputPassword">
                            <h5>To</h5>
                          </label>
                          <p
                            style={{ fontSize: "20px" }}
                            type="date"
                            value={this.state.enddate}
                            onChange={this.onChangeleaveendHandler}
                            disabled={this.state.isDisabled}
                            id="inputPassword"
                            name="leaveenddate"
                            placeholder="Password"
                          >
                            {this.state.enddate}
                          </p>
                        </div>
                      </div>
                    </div>
               
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex"></div>

                      <div className="row ">
                        <table
                          id="table"
                          className="table table-striped table-hover"
                        >
                          <thead>
                            <tr>
                              <th scope="col"> Serial number </th>
                              <th scope="col"> Team Mates </th>

                              <th scope="col"> Job Position </th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.empdata.map(
                              (empdata, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{empdata.username}</td>
                                  <td>{empdata.salary.position}</td>
                                  <td></td>
                                </tr>
                              )

                              // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </form>
             
                </Card.Body>
              </Card>
              <p style={{ marginTop: 2, marginLeft: 640 }}>
                Eoxys © 2022 . Powered by{" "}
                <img
                  _ngcontent-jjc-c98=""
                  src="http://localhost/eoxys_store/assets/images/e_logo.png"
                  style={{ height: "20px" }}
                ></img>
              </p>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="row" style={{ overflow: "clip" }}>
          <div className="col-sm-2">
            <Sidenavbar_Admin />
          </div>
          <div className="col-md-10 mt-5 d-flex justify-content-center">
            <br />

            <br />

            <div>
              <Card className="p-2" style={{ width: "60rem" }}>
                <h3 style={{ "justify-content": "center" }}>
                  {" "}
                  project View
                  {this.state.isDisabled == true ? (
                    <>
                      {" "}
                      <a className="text-right ">
                        <button
                          className=" btn btn-primary col-sm-1"
                          onClick={this.handleSubmitClicked.bind(this)}
                        >
                          Edit
                        </button>
                      </a>
                    </>
                  ) : (
                    <>
                      <a className="text-right m-1">
                        <button
                          onClick={this.HandleSubmitClicked.bind(this)}
                          className=" btn btn-primary col-sm-1"
                        >
                          View
                        </button>
                      </a>
                    </>
                  )}
                </h3>
                <form class="form-card" onsubmit="event.preventDefault()">
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <div class="mb-3">
                        <label class="form-label" for="inputPassword">
                          Project name
                        </label>
                        <textarea
                          type="text"
                          id="pass"
                          value={this.state.projectname}
                          disabled={this.state.isDisabled}
                          onChange={this.onChangeprojectHandler}
                          name="Reason"
                          class="form-control form-control-lg"
                          rows="2"
                          cols="40"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <div class="mb-3">
                        <label class="form-label" for="inputPassword">
                          Project description
                        </label>
                        <textarea
                          type="text"
                          id="pass"
                          value={this.state.projectdescription}
                          disabled={this.state.isDisabled}
                          onChange={this.onChangedescription}
                          name="Reason"
                          class="form-control form-control-lg"
                          rows="2"
                          cols="40"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <div class="mb-3">
                        <label class="form-label" for="inputEmail">
                          From
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          name="leavestartdate"
                          value={this.state.startdate}
                          onChange={this.onChangeleavestartHandler}
                          disabled={this.state.isDisabled}
                          required
                          id="inputEmail"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <div class="mb-3">
                        <label class="form-label" for="inputPassword">
                          To
                        </label>
                        <input
                          type="date"
                          value={this.state.enddate}
                          onChange={this.onChangeleaveendHandler}
                          disabled={this.state.isDisabled}
                          class="form-control"
                          id="inputPassword"
                          name="leaveenddate"
                          placeholder="Password"
                        />
                      </div>
                      <input
                        type="date"
                        class="form-control"
                        id="inputPassword"
                        name="leaveenddate"
                        hidden
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <div class="mb-3">
                        <label class="form-label" for="inputPassword">
                          status
                        </label>
                        {/* <input type="text" value={this.state.Status} onChange={this.onChangestatus} class="form-control" name="Status"  id="inputPassword"  /> */}

                        <select
                          name="kindof"
                          disabled={this.state.isDisabled}
                          onChange={this.onChangestatus}
                          value={this.state.status}
                          id="lname"
                          class="form-control form-control-lg"
                        >
                          <option
                            hidden
                            name="kindof"
                            onChange={this.onChangestatus}
                            selected
                          >
                            select one..
                          </option>
                          <option
                            name="kindof"
                            onChange={this.onChangestatus}
                            value="Yettostart"
                          >
                            <strong>Yet to start</strong>
                          </option>
                          <option
                            name="kindof"
                            onChange={this.onChangestatus}
                            value="Current"
                          >
                            <strong> current</strong>
                          </option>
                          <option
                            name="kindof"
                            onChange={this.onChangestatus}
                            value="completed"
                          >
                            <strong>completed</strong>
                          </option>
                        </select>
                      </div>
                      <label class="form-label" for="inputPassword">
                        Employee names
                      </label>
                      <Form.Select
                        disabled={this.state.isDisabled}
                        onChange={this.onChangeEmployeeHandler}
                      >
                        {this.state.Employees.map((Employees) => (
                          <option
                            id="addings"
                            onChange={this.onChangeEmployeeHandler}
                            value={Employees.username}
                          >
                            {Employees.username}
                            {
                              //  console.log("employeeid",id)
                            }
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-label" for="inputPassword">
                        Manager Incharge
                      </label>
                      <Form.Select
                        disabled={this.state.isDisabled}
                        onChange={this.onChangemanagerincharge}
                        value={this.state.ManagerIncharge}
                      >
                        {this.state.managers.map((Employees) => (
                          <option
                            onChange={this.onChangemanagerincharge}
                            id="addings"
                            value={Employees.employeeid}
                          >
                            {Employees.username}
                            {
                              //  console.log("employeeid",id)
                            }
                          </option>
                        ))}
                      </Form.Select>
                      <div class="mb-3">
                        {/* {
         this.state.Employeeid.map(

Employeeid =>

             <div class="mb-3">
        <label class="form-label" for="inputPassword">Employee name</label>
        <textarea  type="text" id="pass" value={this.state.Employeeid} onChange={this.onChangeEmployeeHandler} name="Reason" class="form-control form-control-lg" rows="2"cols="40" ></textarea>
    </div>
     
            <ToastContainer />
         )} */}
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col"> Serial number</th>
                              <th scope="col"> Employee Name</th>
                            </tr>
                          </thead>

                          <tbody>
                            {employelist.map(
                              (employelist, index) => (
                                <tr key={index + 1}>
                                  <td>{index + 1}</td>
                                  <td>{employelist}</td>
                                  <td>
                                    <a
                                      onClick={() => this.deleteproject(index)}
                                    >
                                      <AiFillDelete
                                        hidden={this.state.hidden}
                                        style={{
                                          width: "25",
                                          color: "#dc3545",
                                          height: "35",
                                        }}
                                      />{" "}
                                    </a>
                                  </td>
                                  {/* <td><button onClick={ () =>  this.deleteproject(index)}  className="btn btn-success">delete </button>
      </td> */}
                                  {/*
      <td><button onClick={ () =>  this.deleteEmployee(employee.employeeid)}  className="btn btn-danger">Delete </button>
      
      <ToastContainer />
      </td> */}
                                </tr>
                              )

                              // <a className="nav-link" href="/Update-employee/${id}">Add new employee</a>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary col-sm-3  "
                    style={{ marginLeft: 320 }}
                    hidden={this.state.hidden}
                    onClick={this.compare}
                  >
                    submit
                  </button>
                  <br />{" "}
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-5 flex-column d-flex"></div>
                  </div>
                  <ToastContainer />
                </form>
              </Card>
              <p style={{ marginTop: 2, marginLeft: 720 }}>
                Eoxys © 2022 . Powered by{" "}
                <img
                  _ngcontent-jjc-c98=""
                  src="http://localhost/eoxys_store/assets/images/e_logo.png"
                  style={{ height: "20px" }}
                ></img>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default updateprojects;
