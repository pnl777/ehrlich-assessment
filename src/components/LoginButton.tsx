import {useAuth0} from "@auth0/auth0-react";
import Spinner from "./Spinner";

const LoginButton = () => {
  const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0();

  const loginHandler = async () => {
    await loginWithRedirect();
  };

  if (isLoading) return <Spinner variant="small-spinner" />;

  return !isAuthenticated ? (
    <button onClick={loginHandler}>LOGIN</button>
  ) : null;
};

export default LoginButton;
