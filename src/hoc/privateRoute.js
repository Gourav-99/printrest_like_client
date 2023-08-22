import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const privateRoute = (Component) => {
  const Route = (props) => {
    const auth = useSelector((state) => state.auth);
    console.log("private route", auth);
    return auth.token ? <Component {...props} /> : <Navigate to="/login" />;
  };
  return Route;
};
export default privateRoute;
