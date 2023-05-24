import './App.css';
import React, {useState, useEffect, createRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Route, Switch } from 'react-router';
import styled from 'styled-components';

import HomeScreenBckgrnd from './components/HomeScreenBckgrnd';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeTitle from './components/HomeTitle';
import Feature from './components/Feature';

function App() {

  const [isOpen,setIsOpen] = useState(false)
  const navToggle = () => {
    setIsOpen(!isOpen)
    console.log('confirmed it was clicked')
    console.log(navToggle)
    console.log(isOpen)
  }

  const [visible, setVisibility] = useState(false);
  useEffect(() => {
    if (isOpen){
      setVisibility(true);
    }
    else{
      setVisibility(false);
    }
  }, [isOpen]);

  return (
    <div className="App">
      <Router>
        <Navbar isOpen={isOpen} visibility={visible} />
        <Header navToggle={navToggle} isOpen={isOpen}/>
      
        <Routes>
          <Route path="/" element={[
            <HomeTitle/>, 
            // <Feature/>
          ]}>
          </Route>
        </Routes>
        {/* <HomeScreenBckgrnd /> */}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  /* Positioning */
  position: absolute;
  position: sticky;
  z-index: 10

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */

`

/* Positioning */

/* Display & Box Model | Sizing */

/* Color, Background & Text */

/* Animations and Other */