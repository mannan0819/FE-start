import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "./store/hooks";


const useAuth = () => {
  const cookies = document.cookie;
  console.log(cookies);
  return true;
  // const cookieArray = cookies.split(';');
  // return cookieArray.some((item) => item.includes('token'));
  // const userState = useAppSelector(state => state.users)
  // return userState && userState.isLoggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;