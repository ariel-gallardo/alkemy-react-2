import { Navigate } from "react-router-dom";
const RouteAuth = ({children}) => localStorage.getItem('status') ? children : <Navigate to='/login' replace={true}/>

export default RouteAuth