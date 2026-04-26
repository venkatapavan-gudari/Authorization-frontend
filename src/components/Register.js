import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "JOBSEEKER"
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    await axios.post("https://backend-tquc.onrender.com/register", user);
    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Name"
        onChange={e => setUser({...user, name:e.target.value})} />

      <input placeholder="Email"
        onChange={e => setUser({...user, email:e.target.value})} />

      <input type="password" placeholder="Password"
        onChange={e => setUser({...user, password:e.target.value})} />

      <select onChange={e => setUser({...user, role:e.target.value})}>
        <option value="JOBSEEKER">Jobseeker</option>
        <option value="RECRUITER">Recruiter</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;