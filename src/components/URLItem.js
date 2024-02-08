import React from 'react';
import Navbar from './components/Navbar';
import ShortenURLForm from './components/ShortenURLForm';
import Dashboard from './components/Dashboard';
import './App.css'; // You can add custom global styles here

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <ShortenURLForm />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
