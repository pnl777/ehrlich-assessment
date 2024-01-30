import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import WeatherPage from "./pages/WeatherPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
