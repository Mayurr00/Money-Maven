import './Start.css';
import data from "../images/data.jpg";
import budget from "../images/budget.jpg";
import chat from "../images/chat.png"
import spend from "../images/spend.jpg"
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{ fontFamily: 'Gruppo, cursive' }}>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

const Start = () => {
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
          <a href="http://localhost:8501/" className="btn">Get Started</a>
        </section>
        <section id="features"  >
        <div class="cards">
          <div class="card">
            <div class="content">
              <h2>FinTrack</h2>
              <p>Tool that helps to track income and expenses and manage finances, based on predetermined budget.</p>
              
            </div>
            <img src={budget} alt="" class="photo"/>
          </div>
          <div class="card2">
            <div class="content">
              <h2>Data Artistry</h2>
              <p>Data visualization is presenting data in a graphical or visual format to aid understanding.</p>
             
            </div>

            <img src={data} alt="" class="photo"/>
          </div>
          <div class="card">
            <div class="content">
              <h2>SpendForecast</h2>
              <p>A predictive tool that estimates future expenses based on past spending patterns and trends.</p>
              
              
            </div>
            <img src={spend} alt="" class="photo"/>
          </div>
          <div class="card2">
            <div class="content">
              <h2>StellarBot</h2>
              <p>AI-powered tool for managing expenses and financial planning through automated conversations</p>
              
            </div>
            <img src={chat} alt="" class="photo"/>
          </div>
        </div>
        </section>
      </main>
      <footer>
        <p>&copy; Team Straw Hats KJSCE HackerStellar</p>
      </footer>
    </div>
  );
};

export default Start;
