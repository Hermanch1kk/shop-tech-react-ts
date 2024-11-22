import { Link, Outlet } from "react-router-dom"
import { AuthService } from "../services/auth.service";
import Footer from "./products/Footer";


const Layout=()=>{
    const logoutHandler=async ()=>{
        await AuthService.logout();
    }
    return(
        <>
        <header className="headermenu">
            <Link to={"/"}>Home</Link>
            <p className="divider"> | </p>
            <Link to={"/products"}>Products</Link>
            <p className="divider"> | </p>
            <Link to={"/create-product"}>Create Product</Link>
            <p className="divider"> | </p>
            <Link to={"/login"}>Login</Link>
            <p className="divider"> | </p>
            <Link to={"/register"}>Register</Link>
            <p className="divider"> | </p>
            <Link onClick={logoutHandler} to={"/"}>Logout</Link>
            

        </header>
        <main className="main1">
            <Outlet/>
        </main>

        <Footer/>
        </>
    );
}
export default Layout;