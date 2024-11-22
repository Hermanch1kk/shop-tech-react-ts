import { Link, Outlet } from "react-router-dom"
import { AuthService } from "../services/auth.service";
import Footer from "./Footer";
import Header from "./Header";


const Layout=()=>{

    return(
        <>
        <Header/>
        <main className="main1">
            <Outlet/>
        </main>

        <Footer/>
        </>
    );
}
export default Layout;