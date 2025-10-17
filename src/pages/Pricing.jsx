import React from 'react';
import '../styles/Pricing.css';

export default function Pricing() {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Choose the Right Plan</h1>
        <p>Empower your business with AI-driven customer insights and smart cross-selling strategies.</p>
      </section>

      <section className="pricing-container">
        <div className="pricing-card">
          <h3 className="plan-title">Basic</h3>
          <div className="plan-price">
            $19<span>/month</span>
          </div>
          <ul className="plan-features">
            <li>Customer Segmentation</li>
            <li>Basic Analytics</li>
            <li>Email Support</li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>

        <div className="pricing-card popular">
          <div className="popular-badge">Most Popular</div>
          <h3 className="plan-title">Pro</h3>
          <div className="plan-price">
            $49<span>/month</span>
          </div>
          <ul className="plan-features">
            <li>Advanced Segmentation</li>
            <li>Smart Recommendations</li>
            <li>Priority Support</li>
            <li>Real-time Dashboard</li>
          </ul>
          <button className="cta-button">Get Started</button>
        </div>

        <div className="pricing-card">
          <h3 className="plan-title">Enterprise</h3>
          <div className="plan-price">
            $99<span>/month</span>
          </div>
          <ul className="plan-features">
            <li>Full Analytics Suite</li>
            <li>Custom Integrations</li>
            <li>Dedicated Support</li>
            <li>AI-driven Insights</li>
            <li>Unlimited Users</li>
          </ul>
          <button className="cta-button">Contact Sales</button>
        </div>
      </section>
    </div>
  );
}
