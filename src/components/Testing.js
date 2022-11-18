import React, { Component } from 'react'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";


const names = [
    {
      "title" : "mr",
      "firstname" : "Lawson",
      "lastname" : "Luke",
      "age" : 28,
      "occupation" : "Software Developer",
      "hobby" : "coding"
    },
    {
      "title" : "mr",
      "firstname" : "Michael",
      "lastname" : "Jackson",
      "age" : 35,
      "occupation" : "Singer",
      "hobby" : "dancing"
    },
    {
        "title" : "mr",
        "firstname" : "Michael",
        "lastname" : "Jackson",
        "age" : 35,
        "occupation" : "Singer",
        "hobby" : "dancing"
      },
      {
        "title" : "mr",
        "firstname" : "Michael",
        "lastname" : "Jackson",
        "age" : 35,
        "occupation" : "Singer",
        "hobby" : "dancing"
      },
      {
        "title" : "mr",
        "firstname" : "Michael",
        "lastname" : "Jackson",
        "age" : 35,
        "occupation" : "Singer",
        "hobby" : "dancing"
      },
    {
      "title" : "mr",
      "firstname" : "Janet",
      "lastname" : "Jackson",
      "age" : 35,
      "occupation" : "Singer",
      "hobby" : "dancing"
    }
  ]
  

class Testing extends Component {
    componentDidMount(){
        if (!$.fn.dataTable.isDataTable("#myTable")) {
                   $(document).ready(function () {
                     setTimeout(function () {
                       $("#table").DataTable({
                         pagingType: "numbers",
                         pageLength: 5,
                         processing: true,
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
                           [5, 20, 30, 50, -1],
                           [5, 20, 30, 50, "All"],
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
                     }, 1000);
                   });
                 }
       }  
       
       showTable = () => {
               try {
                 return names.map((item, index) => {
                   return (
                       <tr>
                       <td className="text-xs font-weight-bold">{index +1}</td>
                      <td className="text-xs font-weight-bold">{item.title}</td>
                      <td className="text-xs font-weight-bold">{item.firstname+ ' ' + item.lastname}</td>
                      <td className="text-xs font-weight-bold">{item.age}</td>
                      <td className="text-xs font-weight-bold">{item.hobby}</td>
                      <td className="text-xs font-weight-bold">{item.occupation}</td>
       <td></td>
       </tr>
                       );
                 });
               } catch (e) {
                 alert(e.message);
               }
             };
       
         render(){
         return(
         <div class="container-fluid py-4">
                <div class="table-responsive p-0 pb-2">
              <table id="table" className="table align-items-center justify-content-center mb-0">
                  <thead>
                      <tr>
                      <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">S/N</th>
                      <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Title</th>
                      <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Name</th>
                      <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Age</th>
                      <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Hobby</th>
                      <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Occupation</th>
       <th></th>
       </tr>
                  </thead>
       
                  <tbody>
                          {this.showTable()}
                  </tbody>
              </table>
                  </div>
                  </div>
       )
       }
}

export default Testing;