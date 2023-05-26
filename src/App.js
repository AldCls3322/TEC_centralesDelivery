import './App.css';
import React, {useState, useEffect, createRef, useLayoutEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//import { Route, Switch } from 'react-router';
import styled,  { ThemeProvider }  from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles } from "./Themes"

import HomeScreenBckgrnd from './components/HomeScreenBckgrnd';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeTitle from './components/HomeTitle';
import HomeRestaurants from './components/HomeRestaurants';
import Feature from './components/Feature';
import HomeAbout from './components/HomeAbout';
import ContactTitle from './components/ContactTitle';
import ContactInfo from './components/ContactInfo';

function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  } 

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

  // const ContactSection = createRef();
  // const goToContactSection = () => window.scrollTo( {top: ContactSection.current.offsetTop , behavior: "smooth"} );

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, [pathname]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
    <div className="App">
        <Navbar isOpen={isOpen} visibility={visible}/>
        <Header navToggle={navToggle} isOpen={isOpen}/>
      
        <Routes>
          <Route path="/contact" element={[
            <ContactTitle/>,
            <ContactInfo/>
          ]}/>
          <Route path="/" element={[
            // <HomeTitle/>,
            <HomeRestaurants/>,
            <HomeAbout/>
          ]}/>
        </Routes>
        {/* <HomeScreenBckgrnd /> */}
    </div>
    </ThemeProvider>
  );
}

export default App;

/* Positioning */

/* Display & Box Model | Sizing */

/* Color, Background & Text */

/* Animations and Other */

// Ref inside Router: https://stackoverflow.com/questions/61277068/react-scroll-nav-using-useref-in-seperate-routes