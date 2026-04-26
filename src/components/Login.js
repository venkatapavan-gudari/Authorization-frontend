import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post(
      "https://your-backend.onrender.com/login",
      user,
      { withCredentials: true } // 🔥 session
    );

    if (res.data !== "Invalid") {
      sessionStorage.setItem("role", res.data);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={e => setUser({...user, email:e.target.value})} />

      <input type="password" placeholder="Password"
        onChange={e => setUser({...user, password:e.target.value})} />

      <button onClick={handleLogin}>Login</button>

      <p><Link to="/register">New User? Register</Link></p>
    </div>
  );
}

export default Login;