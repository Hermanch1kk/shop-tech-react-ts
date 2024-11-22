import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { IRegisterDto } from "../../types/user";
import { AuthService } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export function Register()
{
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm<IRegisterDto>();

    const onSubmit = async (user: IRegisterDto) => {
        try {
            await AuthService.register(user);
    
            navigate("/login");
        } catch (err : any)
        {
            const error = err.data?.message;

            console.log(error);
        }
    }

    return (
        <div className="Registration">
            <h2>Registration</h2>

            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    required
                    {...register('username')}
                    id="username"
                    label="username"
                    type="username"
                    variant="filled"
                />
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
                <Button variant="contained" type="submit">Register</Button>
                </form>
            </Box>
        </div>
    )
}