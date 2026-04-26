import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    // ✅ simple validation
    if (!user.email || !user.password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await axios.post(
        "https://backend-tquc.onrender.com/login",
        user
      );

      if (res.data !== "Invalid") {
        sessionStorage.setItem("role", res.data);
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }

    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        alert("Error: " + error.response.data);
      } else if (error.request) {
        alert("No response from server");
      } else {
        alert("Login failed");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <h1>TEST DEPLOY</h1>

      <input
        placeholder="Email"
        onChange={e => setUser({ ...user, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setUser({ ...user, password: e.target.value })}
      />

      <button onClick={handleLogin}>Login</button>

      <p><Link to="/register">New User? Register</Link></p>
    </div>
  );
}

export default Login;