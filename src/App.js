import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
      
        <h1 className="app-title">Welcome to Great Page</h1>
      </header>
      <div className="app-content">
        <p className="app-description">
          Thank you for visiting our Great Page. We're excited to have you here!
          Explore the features and enjoy your time with us.
        </p>
        <button className="app-button">Get Started</button>
      </div>
      <footer className="app-footer">
        <p>&copy; Sample Footer</p>
      </footer>
    </div>
  );
}

export default App;
