import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      alert("Invalid credentials");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit" className="primary">Login</button>
        <div>
      <p>New user? <Link to="/register">Register Now</Link></p>
          <Link>Forgot Passowrd?</Link>
        </div>
      </form>
      <p>By creating this account, you agree to our <Link> Privacy Policy &Cookie Policy.</Link></p>
    </div>
  );
}