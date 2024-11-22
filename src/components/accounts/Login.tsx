import { Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { ILoginDto } from "../../types/user";
import { AuthService } from "../../services/auth.service";
import { setTokenToLocalStorage } from "../../helper/localStorage.helper";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/user/userSlice";

const Login: React.FC = () => {
    const dispatch=useAppDispatch();
    //react-hook-form
    const  navigate=useNavigate();
    const {
        register, // to attrack changes of form inputs
        handleSubmit, //onSubmit event handler
        formState: { errors }
    } = useForm<ILoginDto>();

    const onSubmit = async (user: ILoginDto) => {
        try {
            // alert(user.email);
            // alert(user.password);
            const token = await AuthService.login(user);
            if (token){
                console.log(token);
                setTokenToLocalStorage(token);
                dispatch(login(user));
                navigate("/products");
            }
        } catch (err: any) {

            const error = err.response?.data.message;
            alert(error);
        }
    }
    return (
        <>
            <div className="Login">
                <h2>Login</h2>
                <Box sx={{ width: '100%' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            required
                            {...register('email')}
                            id="email"
                            label="email"
                            type="email"
                            variant="filled"
                        />
                        <TextField
                            required
                            {...register('password')}
                            id="password"
                            label="password"
                            type="password"
                            variant="filled"
                        />
                        <Button variant="contained" type="submit">Login</Button>
                    </form>

                </Box>
            </div>
        </>
    );
}

export default Login;