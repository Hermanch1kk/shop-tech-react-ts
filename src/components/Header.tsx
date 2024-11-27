import { Link } from "react-router-dom"
import { AuthService } from "../services/auth.service";
import { useAppDispatch, useAppSelector } from "../store/hook";
import React, { useEffect, useState } from "react";
import { getTokenFromLocalStorage } from "../helper/localStorage.helper";
import { logout } from "../store/slices/userSlice";
import { useAuth } from "../hooks/useAuth";
import { ILoginDto } from "../types/user";
import { useAuthUser } from "../hooks/useAuthUser";

const Header: React.FC = () => {

    // const [token, setToken] = useState(getTokenFromLocalStorage());

    // const isAuth = useAppSelector((state) => state.user.isAuth);
    const isAuth = useAuth(); //custom hook
    const userAuth = useAuthUser(); //custom hook
    const dispatch = useAppDispatch();
    // const [user, setUser] = useState<ILoginDto | null>(userAuth); //react hook
    console.log(isAuth);
    // console.log(user);
    const logoutHandler = async () => {
        await AuthService.logout();
        // setUser(null);
        dispatch(logout());
    }
    if (isAuth) {
        return (
            <header>
                <Link to={"/"}>Home</Link>
                <p className="divider"> | </p>
                <Link to={"/products"}>Products</Link>
                <p className="divider"> | </p>
                <Link to={"/create-product"}>Create Product</Link>
                <p className="divider"> | </p>
                <Link onClick={logoutHandler} to={"/"}>Logout</Link>
                <p className="divider"> | </p>
                {/* {user ? (
                    <span>{user.email}</span>
                ) : (
                    <span>Guest</span>
                )}
                 */}
                {/* <span>{user?.email}</span> */}
                <span>{userAuth?.email}</span>


            </header>
        );
    }
    return (
        <header>
            <Link to={"/"}>Home</Link>
            <p className="divider"> | </p>
            <Link to={"/products"}>Products</Link>
            <p className="divider"> | </p>
            <Link to={"/login"}>Login</Link>
            <p className="divider"> | </p>
            <Link to={"/register"}>Register</Link>
        </header>
    )
}


export default Header