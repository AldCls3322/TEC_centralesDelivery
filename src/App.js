import './App.css';
import React, {useState, useEffect, createRef } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HomeScreenBckgrnd from './components/HomeScreenBckgrnd';
import Header from './components/Header';
import Navbar from './components/Navbar';

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
        <HomeScreenBckgrnd />
        <Header navToggle={navToggle} isOpen={isOpen}/>
        <Navbar isOpen={isOpen} visibility={visible} />
      </Router>
    </div>
  );
}

export default App;
