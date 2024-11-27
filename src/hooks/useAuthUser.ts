
import { useAppSelector } from "../store/hook";
export const useAuthUser=()=>{
    const user=useAppSelector((state) => state.user.user);
    console.log(user);
    return user;
}