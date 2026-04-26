import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://your-backend.onrender.com/dashboard", {
      withCredentials: true
    })
    .then(res => {
      setMessage(res.data);
    })
    .catch(() => {
      navigate("/");
    });
  }, [navigate]);

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={() => {
        sessionStorage.clear();
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;