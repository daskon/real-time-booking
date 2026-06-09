import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const logout = useAuthStore((s)=>s.logout);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg cursor-pointer" onClick={() => navigate("/dashboard")}>
        🚀 StarterKit
      </h1>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/users")}
          className="text-gray-600 hover:text-black cursor-pointer"
        >
          Users
        </button>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-500 text-white px-3 py-1 rounded-lg cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}