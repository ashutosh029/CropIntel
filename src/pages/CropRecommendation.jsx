import React, { useState } from "react";
import { Link } from "react-router-dom";

const CropRecommendation = ({ menuItems }) => {
  // State to manage input values
  const [ph, setPh] = useState("");
  const [phosphorous, setPhosphorous] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [water, setWater] = useState("");
  const [temperature, setTemperature] = useState("");

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recommendedCrop, setRecommendedCrop] = useState("");

  // Array of crops
  const crops = [
    "Rice",
    "Wheat",
    "Corn",
    "Barley",
    "Tomato",
    "Potato",
    "Cotton",
    "Soybean",
    "Sugarcane",
    "Groundnut",
  ];

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

  // Function to handle crop recommendation
  const recommendCrop = () => {
    const randomCrop = crops[Math.floor(Math.random() * crops.length)];
    setRecommendedCrop(randomCrop);
    setIsModalOpen(true);
  };

  return (
    <div className="flex">
      <div className="w-80 h-screen bg-green-100 text-gray-800 transition-all duration-300 p-4 flex flex-col">
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

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Crop Recommendation
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="ph" className="mb-2 font-medium">
              pH Level
            </label>
            <input
              type="number"
              id="ph"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
              className="px-4 py-2 border rounded-lg"
              placeholder="Enter pH level"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phosphorous" className="mb-2 font-medium">
              Phosphorous
            </label>
            <input
              type="number"
              id="phosphorous"
              value={phosphorous}
              onChange={(e) => setPhosphorous(e.target.value)}
              className="px-4 py-2 border rounded-lg"
              placeholder="Enter phosphorous level"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nitrogen" className="mb-2 font-medium">
              Nitrogen
            </label>
            <input
              type="number"
              id="nitrogen"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              className="px-4 py-2 border rounded-lg"
              placeholder="Enter nitrogen level"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="water" className="mb-2 font-medium">
              Water Level
            </label>
            <input
              type="number"
              id="water"
              value={water}
              onChange={(e) => setWater(e.target.value)}
              className="px-4 py-2 border rounded-lg"
              placeholder="Enter water level"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="temperature" className="mb-2 font-medium">
              Temperature
            </label>
            <input
              type="number"
              id="temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="px-4 py-2 border rounded-lg"
              placeholder="Enter temperature"
            />
          </div>
        </div>

        <button
          onClick={recommendCrop}
          className="mt-6 w-full md:w-1/3 bg-blue-500 text-white py-2 rounded-lg"
        >
          Get Crop Recommendation
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-xl font-semibold text-center">
                Recommended Crop
              </h2>
              <p className="text-center text-lg mt-4">{recommendedCrop}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropRecommendation;
