import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import CropRecommendation from "./pages/CropRecommendation";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Set active link based on the route
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Crop Recommendation", path: "/crop" },
    { name: "Soil Analysis", path: "/soil-analysis" },
    { name: "Weather Updates", path: "/weather-updates" },
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setEmail={setEmail} setPassword={setPassword} />}
          />
          <Route
            path="/signup"
            element={
              <SignUp
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard menuItems={menuItems} />} />
          <Route path="/crop" element={<CropRecommendation menuItems={menuItems} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
