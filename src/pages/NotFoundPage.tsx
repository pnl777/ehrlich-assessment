import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Spinner from "../components/Spinner";

const NotFoundPage = () => {
  const {isAuthenticated, isLoading} = useAuth0();

  if (isLoading)
    return <Spinner variant="large-spinner" alignSpin="center-spinner" />;

  return (
    <div className="not-found-blk">
      <h1>OOPS!</h1>
      <h2>404 - Page Not Found</h2>
      <p>
        The page you're attempting to access does not exist.
        <br />
        {!isAuthenticated ? (
          <Link to="/">Return to Login Page</Link>
        ) : (
          <Link to="/dashboard">Return to Dashboard Page</Link>
        )}
      </p>
    </div>
  );
};

export default NotFoundPage;
