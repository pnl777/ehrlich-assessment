import {useAuth0} from "@auth0/auth0-react";
import Spinner from "./Spinner";

const LoginButton = () => {
  const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <Spinner />;

  //   return !isAuthenticated ? (
  //     <button onClick={() => loginWithRedirect()}>LOGIN</button>
  //   ) : null;

  return <Spinner />;
};

export default LoginButton;
