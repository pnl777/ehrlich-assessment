import {useAuth0} from "@auth0/auth0-react";
import Spinner from "./Spinner";

const LogoutButton = () => {
  const {logout, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <Spinner variant="small-spinner" />;

  return isAuthenticated ? (
    <button className="logout-btn-blk" onClick={() => logout()}>
      LOGOUT
    </button>
  ) : null;
};

export default LogoutButton;
