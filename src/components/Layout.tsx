import { Link, Outlet } from "react-router-dom"
import { AuthService } from "../services/auth.service";
import { useAppSelector } from "../store/hooks";
import Header from "./Header";

const Layout=()=>{

return(
    <>
    <Header/>
        <main>
            <Outlet/>
        </main>
        </>
    );
}
export default Layout;