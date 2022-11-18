import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import ManagerEmpDisplay from './components/managerEmpDisplay';
import Applyleave from './components/Applyleave';
import AfterLogin from './components/AfterLogin';
import ListEmpLeaves from './components/ListEmpLeaves';
import ProjectEmpDisplay from './components/ProjectEmpDisplay';
import ListQueries from './components/ListQueries';
import Myprofile from './components/Myprofile';
import { BrowserRouter, Navigate, Route, Router,Routes,withRouter} from 'react-router-dom';
import Support from './components/Support';
import ManagerHome from './components/ManagerHome';
import Addproject from './components/Addproject';
import Updateleave from './components/updateleave';
import CompletedProjects from './components/CompletedProjects';
import ActiveProjects from './components/ActiveProjects';
import AllempDisplay from './components/AllempDisplay';
import CompletedProjectAdmin from './components/CompletedProjectAdmin';
import ActiveAdminproject from './components/ActiveAdminproject';
import AdminLeave from './components/AdminLeave';
import AdminQuery from './components/AdminQuery';
import UpdateSalary from './components/UpdateSalary';
import Updatequery from './components/Updatequery';
import UpdateleaveAdmin from './components/updateleaveAdmin';
import CreateNewEmployee from './components/CreateNewEmployee';
import Updateadminqueries from './components/Updateadminqueries';
import TeamView from './components/TeamView';
import UpdateEmployees from './components/UpdateEmployees';
import CurrentEmployee from './components/CurrentEmployee';
import FormerEmployee from './components/FormerEmployee';
import Addsalary from './components/Addsalary';
import Viewprojectteam from './components/viewprojectteam';
import Yettocome from './components/Yettocome';
import UpdatesalaryDept from './components/updatesalaryDept';
import Updateprojects from './components/updateprojects';
import Yettostart from './components/yettostart';
import PrivateRoutes from './components/PrivateRoutes';
import Displayemployeeview from './components/Displayemployeeview';
import Displaymanagerproject from './components/Displaymanagerproject';
import Wrongemployee from './components/Wrongemployee';
import Testing from './components/Testing';
import Footer from './components/Footer';
import Otp from './components/otp';
function App() {
  return (
    <div>
 
 
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element ={ <Loginpage />}></Route>
    
    <Route element={<PrivateRoutes />}>


<Route path="/FormerEmployee" element ={ <FormerEmployee />}></Route>
<Route path="/yettocome" element ={ <Yettocome />}></Route>
<Route path="/otp" element ={ <Otp />}></Route>
<Route path="/Testing" element ={ <Testing />}></Route>
<Route path="/Myprofile" element ={ <Myprofile />}></Route>
<Route path="/Wrongemployee" element ={ <Wrongemployee />}></Route>
<Route path="/CurrentEmployee" element ={ <CurrentEmployee />}></Route>
<Route path="/updateproject/:id" element ={<Updateprojects />}></Route>
<Route path="/CreateNewEmployee" element ={ <CreateNewEmployee />}></Route>
<Route path="/updatequeries/:id" element ={<Updatequery />}></Route>
<Route path="/updateEmployee/:id" element ={<UpdateEmployees />}></Route>
<Route path="/Addsalary" element ={<Addsalary />}></Route>
<Route path="/displayteam/:name" element ={<TeamView />}></Route>
<Route path="/updateadminqueries/:id" element ={<Updateadminqueries />}></Route>
<Route path="/updateleaveAdmin/:id" element ={<UpdateleaveAdmin />}></Route>
<Route path="/updateleave/:id" element ={<Updateleave />}></Route>
<Route path="/ManagerEmpDisplay" element ={ <ManagerEmpDisplay />}></Route>
<Route path="/displayAllemployee/:name" element ={ <Displayemployeeview />}></Route>
<Route path="/Displaymanagerproject/:id" element ={ <Displaymanagerproject />}></Route>
<Route path="/leavedisplay" element ={ <Applyleave />}></Route>
<Route path="/AfterLogin" element={<AfterLogin />}></Route>
<Route path="/ListEmpLeaves" element={<ListEmpLeaves />}></Route>
<Route path="/ProjectEmpDisplay" element={<ProjectEmpDisplay />}></Route>
<Route path="/Support" element={<Support />}></Route>
<Route path="/ListQueries" element={<ListQueries />}></Route>
<Route path="/yettostart" element={<Yettostart />}></Route>
<Route path="/updatesalaryandDept/:id" element ={<UpdatesalaryDept />}></Route>
<Route path="/ListQueries" element={<ListQueries />}></Route>
<Route path="/CompletedProjects" element={<CompletedProjects />}></Route>
<Route path="/ManagerHome" element={<ManagerHome />}></Route>
<Route path="/Addproject" element={<Addproject />}></Route>
<Route path="/CompletedProjectAdmin" element={<CompletedProjectAdmin />}></Route>
<Route path="/ActiveProjects" element={<ActiveProjects />}></Route>
<Route path="/AllempDisplay" element={<AllempDisplay />}></Route>
<Route path="/AdminQuery" element={<AdminQuery />}></Route>
<Route path="/AdminLeave" element={<AdminLeave />}></Route>
<Route path="/UpdateSalary" element={<UpdateSalary />}></Route>
<Route path="/ActiveAdminproject" element={<ActiveAdminproject />}></Route>
<Route path="/" element ={<Navigate replace to="/Loginpage"/>}/>
</Route>
<Route path="/Footer" element={<Footer />}></Route>

</Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
