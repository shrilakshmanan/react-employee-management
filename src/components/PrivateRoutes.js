import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

if(sessionStorage.getItem('id')){

    let auth =  { 'token':true }
    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}
else{
    let auth =  { 'token':false }
    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}
}

export default PrivateRoutes