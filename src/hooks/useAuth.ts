
import { useAppSelector } from "../store/hook";
export const useAuth=()=>{
    const isAuth=useAppSelector((state) => state.user.isAuth);
    return isAuth;
}