// AuthForm.js
import Auth from "../assets/auth.png";
import { Link, useNavigate  } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const AuthForm = ({
  title,
  buttonText,
  toggleText,
  toggleLink,
  toggleLinkText,
  setName,
  setEmail,
  setPassword,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
   
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <img
          src={Auth}
          alt="Illustration"
          className="w-60 h-60 object-cover rounded-md mb-4"
        />
      </div>
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        {title}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {title === "Create a new Account" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="name"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          )}
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200"
        >
          {buttonText}
        </button>
      </form>
      <div className="mt-6 text-center flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-2">Or continue with</p>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            navigate("/dashboard")
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          {toggleText}
          <Link
            to={toggleLink}
            className="text-green-600 font-semibold hover:underline ml-2"
          >
            {toggleLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
