import { Link, useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="border-b  flex justify-between items-center py-2.5 px-10 bg-gray-800 text-white shadow-lg">
      <Link to="/" className="text-2xl font-bold">
        Blogit
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/publish">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 transition"
          >
            New
          </button>
        </Link>
        <div className="relative cursor-pointer" onClick={handleLogout}>
          <span className="font-medium text-sm text-gray-600 dark:text-gray-300">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
