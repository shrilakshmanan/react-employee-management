import React,{usestate,useEffect} from "react";


function Protected(props) {
    let Cmp=props.Cmp


    useEffect(() =>{

        if(!(sessionStorage.getItem('name'))){
            window.location.href = '/loginpage';
           
        }
    },[])
return(
    <div>

    <Cmp />
    </div>

)
}

export default Protected;