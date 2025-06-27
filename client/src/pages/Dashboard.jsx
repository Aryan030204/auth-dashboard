import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
    } else {
      try {
        const decoded = jwt_decode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("access");
        navigate("/login");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-200 to-indigo-300">
      <div className="bg-white p-10 rounded shadow-lg text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-600">
          🎉 You're Logged In!
        </h1>
        {user && (
          <p className="text-gray-700 text-lg">
            Welcome <span className="font-semibold">{user.username}</span>!
          </p>
        )}
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
