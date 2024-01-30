import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import LoginButton from "../components/LoginButton";
import {useAuth0} from "@auth0/auth0-react";
import Spinner from "../components/Spinner";

const LoginPage = () => {
  const {isAuthenticated, isLoading} = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading)
    return <Spinner variant="large-spinner" alignSpin="center-spinner" />;

  return (
    <div className="login-container-blk">
      <h1> Welcome to The Weather Forecast</h1>
      <p>
        Please login with your Github user to use the application and view the
        weather in your city
      </p>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
