import { Link } from "react-router-dom"
import { AuthService } from "../services/auth.service";
import { useAppDispatch, useAppSelector } from "../store/hook";
import React, { useEffect, useState } from "react";
import { getTokenFromLocalStorage } from "../helper/localStorage.helper";
import { logout } from "../store/slices/userSlice";

const Header: React.FC = () => {

    // const [token, setToken] = useState(getTokenFromLocalStorage());

    const isAuth = useAppSelector((state) => state.user.isAuth);
    const dispatch = useAppDispatch();
    console.log(isAuth);
    const logoutHandler = async () => {
        await AuthService.logout();
        dispatch(logout());
    }
    if (isAuth)
        return (
            <header>
                <Link to={"/"}>Home</Link>
                <p className="divider"> | </p>
                <Link to={"/products"}>Products</Link>
                <p className="divider"> | </p>
                <Link to={"/create-product"}>Create Product</Link>
                <p className="divider"> | </p>
                <Link onClick={logoutHandler} to={"/"}>Logout</Link>
            </header>
        );

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