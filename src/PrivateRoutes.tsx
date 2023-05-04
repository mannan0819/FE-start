import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "./store/hooks";


const useAuth = () => {
  const userState = useAppSelector(state => state.users)
  return userState && userState.isLoggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;