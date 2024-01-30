import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import WeatherPage from "./pages/WeatherPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
