import {Navigate, Outlet} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Spinner from "./Spinner";
const PrivateRoute = () => {
  const {isAuthenticated, isLoading} = useAuth0();

  if (isLoading)
    return <Spinner variant="large-spinner" alignSpin="center-spinner" />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
