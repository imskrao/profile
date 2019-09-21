import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Menu from './components/menu';
import Footer from './components/footer';
import About from './components/about';
import Services from './components/services';
import Home from './components/home';
import Skills from './components/skills';
import Education from './components/education';
import Project from './components/project';
import Contact from './components/contact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>
        <div className="content">
          <Route path='/about-me' component={About}/>
          <Route path='/services'  component={Services}/>
          <Route path='/skills'  component={Skills}/>
          <Route path='/eduction'  component={Education}/>
          <Route path='/projects'  component={Project}/>
          <Route path='/contact'  component={Contact}/>
          <Route path='/' exact component={Home}/>
        </div>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
