import { useNavigate } from "react-router-dom";
import '../styles/Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="dashboard card">
      <h2>Welcome, {user.email}</h2>
      <p>You are logged in to the Customer Segmentation system.</p>
      <button onClick={handleLogout} className="secondary">Logout</button>
    </div>
  );
}
