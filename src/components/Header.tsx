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

const Header: React.FC = () => {
  const isAuth = useAuth(); // Custom hook
  const userAuth = useAuthUser(); // Custom hook
  const dispatch = useAppDispatch();

  const logoutHandler = async () => {
    await AuthService.logout();
    dispatch(logout());
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
            <>
              <Button color="inherit" component={Link} to="/create-product">
                Create Product
              </Button>
              <Button color="inherit" onClick={logoutHandler}>
                Logout
              </Button>
            </>
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
