import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './App.css'; 

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router basename="/react-portfolio">
        <Nav />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
