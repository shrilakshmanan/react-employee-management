import axios from "axios";

const Employee_base_url="http://localhost:8089/";

class EmployeeService{

createEmployee(employee){
console.log(employee);

    return axios.post(Employee_base_url, employee);
    
}
leaveApplidEmployee(emps){

    return axios.post(Employee_base_url+"leavedisplay", emps);
}

getmanagerproject(id){


    return axios.get(Employee_base_url+"displaymanagerproject/"+parseInt(id));
}

updateprojectemp(id,emps){

    console.log("the id reachede")
    return axios.put(Employee_base_url+"updateproject/"+parseInt(id), emps);
    }

project(emps){

return axios.post(Employee_base_url+"Addproject", emps);
}

getAllEmployees(id){

    console.log("this is idd"+id);
    return axios.get(Employee_base_url+"managerEmpDisplay/"+parseInt(id));
}




getAllEmployeeLeave(id){


    console.log(typeof(id));
    console.log("This is id from service class "+id);

    // const formData = new FormData();
    // formData.append("id",id);
   
    return axios.get(Employee_base_url+"ListEmpLeaves/"+parseInt(id));
}

updateEmployeeleave(id){

    console.log("eeaw"+id);
    return axios.get(Employee_base_url+"updateleave/"+parseInt(id));

}

updatequery(id){

    return axios.get(Employee_base_url+"updatequeries/"+parseInt(id));

}

updatequeries(employee,id){

    console.log("serv"+id);
    return axios.put(Employee_base_url+"updatequeries/"+parseInt(id),employee);

}

updateAdminqueries(employee,id){

    return axios.put(Employee_base_url+"updateAdminqueries/"+parseInt(id),employee);

}
updateleave(employee,id)
{
    console.log("updateleave"+id);
    return axios.put(Employee_base_url+"updateleave/"+parseInt(id),employee);

}

getEmployeeproject(id){

    console.log(id);
    return axios.get(Employee_base_url+"ProjectEmpDisplay/"+id);

}

Support(emps){
    return axios.post(Employee_base_url+"Support", emps);

}
getEmployeeQuery(id){

    return axios.get(Employee_base_url+"ListQueries/"+parseInt(id));  

}


getCompletedproject(id){

    return axios.get(Employee_base_url+"CompletedProjects/"+parseInt(id));  

}
ActiveProjects(id){
    
    return axios.get(Employee_base_url+"ActiveProjects/"+parseInt(id));  

}

AdminEmployees(){
    return axios.get(Employee_base_url+"AllempDisplay");  

}
AllCompletedproject(){

    return axios.get(Employee_base_url+"CompletedProjectAdmin");  
}

getyetproject(id){

    return axios.get(Employee_base_url+"yettocome/"+parseInt(id));  
}

AllActiveproject(){
    return axios.get(Employee_base_url+"ActiveAdminproject");  

}

getAllEmployeeLeaveAdmin(){
    
    return axios.get(Employee_base_url+"AdminLeave");  

}
getAllQuery(){
    return axios.get(Employee_base_url+"AdminQuery");  

}
UpdateSalaryAndDept(){
    return axios.get(Employee_base_url+"UpdateSalary");  

}

jvaclas(){

    return axios.get(Employee_base_url+"CreateNewEmployee");  
}

jobdesc(){

    return axios.put(Employee_base_url+"CreateNewEmployee");  
}

updateAdminleave(employee,id){

    console.log("updateleaveAdmin"+id);
    return axios.put(Employee_base_url+"updateleaveAdmin/"+parseInt(id),employee);
}
getAllEmployeeId(){

    return axios.get(Employee_base_url+"Addproject");  

}
saveemployee(emps){
    
    return axios.post(Employee_base_url+"CreateNewEmployee", emps);
}




salary(emps){

    return axios.post(Employee_base_url+"Addsalary", emps);

}
getTeam(name){

    console.log("this is name"+name);
    return axios.get(Employee_base_url+"displayteam/"+name);

}


UpdateEmployees(id){

    console.log(id);

    return axios.get(Employee_base_url+"updateEmployee/"+parseInt(id));  

}

managersfind(){

    return axios.put(Employee_base_url+"updateEmployee/");

}

CurrentEmployees(){

    return axios.get(Employee_base_url+"CurrentEmployee/"); 
}
FormerEmployees(){
    return axios.get(Employee_base_url+"FormerEmployee/"); 

}

Wrongemployee(){

    return axios.get(Employee_base_url+"Wrongemployee/"); 
}
// deleteEmployee(id){

//     return axios.delete(Employee_base_url+"CompletedProjectAdmin/"); 


// }

getEmployeesLeavecount(id){

    console.log(id);
    return axios.get(Employee_base_url+"AfterLogin/"+parseInt(id)); 

}
deletecompleted(id){
 
    return axios.delete(Employee_base_url+"CompletedProjects/"+parseInt(id)); 

}

deleteproject(id){

 
    return axios.delete(Employee_base_url+"yettocome/"+parseInt(id)); 
}


deleteleave(id){
    return axios.delete(Employee_base_url+"ListEmpLeaves/"+parseInt(id));

}

deletequery(id){

    return axios.delete(Employee_base_url+"ListQueries/"+parseInt(id));
}
deletesalary(id){
    
    return axios.delete(Employee_base_url+"UpdateSalary/"+parseInt(id));
}
deleteemployee(id){
    return axios.delete(Employee_base_url+"Wrongemployee/"+parseInt(id));
}

deleteactive(id){
    return axios.delete(Employee_base_url+"ActiveProjects/"+parseInt(id));

}

Updateemployeelate(employee,id){

    console.log("serv"+id);
    return axios.put(Employee_base_url+"updateEmployee/"+parseInt(id),employee);

}
getTeammanager(id){

    return axios.get(Employee_base_url+"CompletedProjectAdmin/"+parseInt(id));

}
getyetprojectAdmin(){

    
    return axios.get(Employee_base_url+"yettostart/");
}
getsalarydetail(id){

    return axios.get(Employee_base_url+"updatesalaryandDept/"+parseInt(id));


}
updatesalaryD(id,employee){

    return axios.put(Employee_base_url+"updatesalaryandDept/"+parseInt(id),employee);

}
updateproject(id){

    return axios.get(Employee_base_url+"updateproject/"+parseInt(id));

}
getallcount(){

    return axios.put(Employee_base_url+"AfterLogin/");
}

}

export default new EmployeeService()