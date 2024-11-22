import { Link, Outlet } from "react-router-dom";
import { getTokenFromLocalStorage } from "../helper/localStorage.helper"

const ProtectedRoute:React.FC=()=>{
    const token=getTokenFromLocalStorage();
    if(!token){
        return(
            <div>
                <h1> Unauthorized :(</h1>
                <span> <Link to='/login'> Login </Link> to access </span>
            </div>
        );
    }
        //returns child route elements
        return <Outlet/>
}
export default ProtectedRoute;