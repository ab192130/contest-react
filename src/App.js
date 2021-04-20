import React from 'react';
import './App.css';
import Footer from './components/Footer';


import Home from './pages/Home';
import About from './pages/About';


import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container md:mx-auto max-w-lg h-screen flex items-center">
        <div className="w-full">
          <Route path="/" exact component={Home}/>

          <Route path="/about" component={About}/> 

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
