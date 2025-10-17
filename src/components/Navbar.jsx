import { Link } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">FinSeg</h1>
      <div className="links">
        <a className="home" href="#">Home</a>
        <Link className="signin" to="/login">Sign in</Link>
      </div>
    </nav>
  );
}
