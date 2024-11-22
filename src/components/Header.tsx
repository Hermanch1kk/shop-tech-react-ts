import { Link } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { logout } from "../store/user/userSlice";

const Header: React.FC = () => {
    const isAuth = useAppSelector((state) => state.user.isAuth);
    const dispatch = useAppDispatch();
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
    );

}
export default Header;