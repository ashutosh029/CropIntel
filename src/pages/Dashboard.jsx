import { Link, Outlet, useNavigate } from "react-router-dom";
import { HiLogout } from "react-icons/hi"; // Avatar icon
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ menuItems }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state for initial render

  const cropStats = {
    totalCrops: 150,
    averageYield: "2500 kg/hectare",
    recentGrowth: "Healthy",
  };

  const upcomingTasks = [
    "Inspect soil quality",
    "Schedule irrigation for the next week",
    "Prepare equipment for harvest",
  ];

  const weather = {
    temperature: "28°C",
    humidity: "75%",
    forecast: "Sunny with a chance of light showers",
  };

  const graphData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months
    datasets: [
      {
        label: "Crop Yield (kg/hectare)",
        data: [2000, 2200, 2400, 2300, 2500, 2700, 2800], // Dummy crop yield data
        fill: false,
        borderColor: "#4caf50", // Line color
        tension: 0.1,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex h-screen">
      <div className="w-80 bg-green-100 text-gray-800 transition-all duration-300 p-4 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-xl">CropIntel</h2>
        </div>
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "bg-green-500 text-white"
                  : "text-gray-600"
              } p-2 rounded-md mb-2 hover:bg-green-300 transition-all duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gray-100 p-6">
        {/* Navbar */}
        <div className="mb-4 bg-white shadow-md p-4 rounded-md flex justify-between items-center w-full">
          <h2 className="text-2xl font-semibold flex-1">Dashboard</h2>

          {/* Right section of the navbar */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-lg font-medium">Logout</span>
            <HiLogout className="text-2xl text-gray-600" />
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Crop Statistics Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Crop Statistics</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Total Crops:</strong> {cropStats.totalCrops}
                </li>
                <li>
                  <strong>Average Yield:</strong> {cropStats.averageYield}
                </li>
                <li>
                  <strong>Recent Growth:</strong> {cropStats.recentGrowth}
                </li>
              </ul>
            </div>

            {/* Weather Forecast Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Weather Forecast</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Temperature:</strong> {weather.temperature}
                </li>
                <li>
                  <strong>Humidity:</strong> {weather.humidity}
                </li>
                <li>
                  <strong>Forecast:</strong> {weather.forecast}
                </li>
              </ul>
            </div>

            {/* Upcoming Tasks Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Upcoming Tasks</h3>
              <ul className="space-y-2">
                {upcomingTasks.map((task, index) => (
                  <li key={index}>- {task}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Crop Yield Graph */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full md:w-3/4 lg:w-2/3 mx-auto">
          <h3 className="text-xl font-semibold mb-4">Crop Yield Trend</h3>
          <Line data={graphData} options={graphOptions} />
        </div>

        {/* Outlet for child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
