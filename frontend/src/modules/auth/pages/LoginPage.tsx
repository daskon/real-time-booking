import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";
import { useEffect, useState } from "react";
import { login } from "../service";

export default function LoginPage() {
  const setAuth = useAuthStore((s)=> s.setAuth);
  const navigate = useNavigate();
  const token = useAuthStore((s)=>s.token);

  useEffect(()=> {
    if(token) navigate("/");
  }, [token])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await login({email, password});
      setAuth(res.data.user, res.data.token);
      navigate("/");
    } catch(err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2x1 shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back 👋
        </h1>

        <div className="flex flex-col gap-4">
            {error && <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>}
          <input
            type="text"
            placeholder="Email"
            onChange={(e)=> setEmail(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={handleLogin}
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}