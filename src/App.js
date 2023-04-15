import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="/" >Home</a></li>
            <li><a href="/" >Dashboard</a></li>
            <li><a href="/" >Budgeting Tool</a></li>
            <li><a href="/" >Financial Calculators</a></li>
            <li><a href="/" >Educational Resources</a></li>
            <li><a href="/" >Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Welcome to Personal Finance Website</h1>
          <p>Our mission is to help you manage your personal finances and achieve your financial goals.</p>
          <a href="/" className="btn">Get Started</a>
        </section>
        <section id="features">
          <div className="container">
            <h2>Features</h2>
            <div className="feature">
              <h3>Budgeting Tool</h3>
              <p>Create a budget and track your spending with our easy-to-use budgeting tool.</p>
            </div>
            <div className="feature">
              <h3>Financial Calculators</h3>
              <p>Use our financial calculators to make informed decisions about your finances.</p>
            </div>
            <div className="feature">
              <h3>Educational Resources</h3>
              <p>Learn about personal finance topics like saving, investing, and budgeting with our educational resources.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; Team Straw Hats KJSCE HackerStellar</p>
      </footer>
    </div>
  );
}

export default App;
