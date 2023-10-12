import React from 'react';
import SignUpForm from './SignUpForm';
import './App.css';
import Register from './Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
  
}

export default App;
