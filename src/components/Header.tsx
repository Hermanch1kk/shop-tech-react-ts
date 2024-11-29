import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAuth } from "../hooks/useAuth";
import { useAuthUser } from "../hooks/useAuthUser";
import { AuthService } from "../services/auth.service";
import { useAppDispatch } from "../store/hook";
import { logout } from "../store/slices/userSlice";
import freeIcon from "../assets/images/freeIcon.png";
import Avatar from "@mui/material/Avatar";
import AdbIcon from '@mui/icons-material/Adb';

function Header() {
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
    };
    if (isAuth) {
        return (
            <AppBar position="static" sx={{ backgroundColor: "#3f51b5",  weight:"100%" }}>
                <Toolbar>
                <Avatar alt="Remy Sharp" src={freeIcon} />
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                            Home
                        </Link>
                    </Typography>

                    {/* Navigatcion Links */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button color="inherit" component={Link} to="/products">
                            Products
                        </Button>



                        
                            <Button color="inherit" component={Link} to="/create-product">
                                Create Product
                            </Button>
                            <Button color="inherit" onClick={logoutHandler}>
                                Logout
                            </Button>
                        
    


                    </Box>
                </Toolbar>
            </AppBar>
        );
    }; 
    return (
        <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                        Home
                    </Link>
                </Typography>

                {/* Navigation Links */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button color="inherit" component={Link} to="/products">
                        Products
                    </Button>

                       <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button>


                </Box>
            </Toolbar>
        </AppBar>);
};
export default Header;