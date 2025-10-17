
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import '../styles/Landing.css';
import finance from '../assets/finance.svg'
import barchart from '../assets/bar-chart.svg'
import recommendation from '../assets/recommendation.svg'
import analysis from '../assets/analysis.svg'

export default function Landing() {
  return (
    <div>
      <Navbar />

      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Empower Smarter Cross-Selling</h1>
          <p>Leverage AI-driven customer segmentation to recommend the right financial products at the right time.</p>
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/pricing" className="btn-secondary">Pricing</Link>
        </div>
        <div className="hero-image">
          <img src={finance} alt="Analytics illustration" style={{maxWidth: '400px'}} />

        </div>
      </section>

      <section className="features" id="features">
        <h2>Why FinSeg?</h2>
        <div className="feature-cards">
          <div className="card">
            <img src={barchart} alt="Insights" />
            <h3>Data Insights</h3>
            <p>Understand your customer behavior with actionable insights and analytics.</p>
          </div>
          <div className="card">
            <img src={recommendation} alt="Recommendations" />
            <h3>Smart Recommendations</h3>
            <p>Deliver personalized financial product suggestions to maximize cross-selling.</p>
          </div>
          <div className="card">
            <img src={analysis} alt="Real-time" />
            <h3>Real-time Analysis</h3>
            <p>Monitor customer interactions and adapt strategies instantly.</p>
          </div>
        </div>
      </section>

<section className="customers" id="customers">
  <h2>Trusted by Leading Companies</h2>
  <div className="customer-slider">
    <div className="customer-track">
      <img src="https://img.icons8.com/color/150/000000/google-logo.png" alt="Google" />
      <img src="https://img.icons8.com/color/150/000000/microsoft.png" alt="Microsoft" />
      <img src="https://img.icons8.com/color/150/000000/amazon.png" alt="Amazon" />
      <img src="https://img.icons8.com/color/150/000000/apple-logo.png" alt="Apple" />
      <img src="https://img.icons8.com/color/150/000000/ibm.png" alt="IBM" />
      {/* Repeat logos for seamless scrolling */}
      <img src="https://img.icons8.com/color/150/000000/google-logo.png" alt="Google" />
      <img src="https://img.icons8.com/color/150/000000/microsoft.png" alt="Microsoft" />
      <img src="https://img.icons8.com/color/150/000000/amazon.png" alt="Amazon" />
      <img src="https://img.icons8.com/color/150/000000/apple-logo.png" alt="Apple" />
      <img src="https://img.icons8.com/color/150/000000/ibm.png" alt="IBM" />
    </div>
  </div>
</section>



      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>"FinSeg transformed our customer engagement strategy!"</p>
            <h4>- Jane Doe, Marketing Head</h4>
          </div>
          <div className="card">
            <p>"We saw a 30% increase in cross-sales within 3 months."</p>
            <h4>- John Smith, Product Manager</h4>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
