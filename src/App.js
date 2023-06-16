import './App.css';
import React, {useState, useEffect, createRef, useLayoutEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//import { Route, Switch } from 'react-router';
import styled,  { ThemeProvider }  from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles } from "./Themes";
import { auth, signInWithGoogle, signOutOfGoogle } from './firebase/Firebase';
import HomeScreenBckgrnd from './components/HomeScreenBckgrnd';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeTitle from './components/HomeTitle';
import HomeRestaurants from './components/HomeRestaurants';
import Feature from './components/Feature';
import HomeAbout from './components/HomeAbout';
import ContactTitle from './components/ContactTitle';
import ContactInfo from './components/ContactInfo';
import HomeVoluntariados from './components/HomeVoluntariados'; 
import MenuTitle from './components/MenuTitle';
import MenuList from './components/MenuList.jsx';
//import MenuFooter from './components/MenuFooter2.jsx';
import MenuFooter from './components/MenuFooter';
import Cart from './components/Cart';
import PaymentSuccess from './components/PaymentSuccess.jsx';
import { onAuthStateChanged } from "firebase/auth";
import SignUp from './components/SignUp';
import { useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('profilePic');
      setUser(null);
      signOutOfGoogle();
      navigate('/');
    })
  }

  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  } 

  const [isopen,setIsopen] = useState(false)
  const navToggle = () => {
    setIsopen(!isopen)
    // console.log('confirmed it was clicked')
    // console.log(navToggle)
    // console.log(isopen)
  }
  const navOff = () => {
    setIsopen(false)
  }

  const [visible, setVisibility] = useState(false);
  useEffect(() => {
    if (isopen){
      setVisibility(true);
    }
    else{
      setVisibility(false);
    }
  }, [isopen]);

  const ContactSection = createRef();
  const goToContactSection = async() => {
    await new Promise((r) => setTimeout (r, 1000))
    .then(window.scrollTo( {top: ContactSection.current.offsetTop - 100, behavior: "smooth"}))
    .then(navOff);
  }
  
  const HomeRestaurantsSection = createRef();
  const goToHomeRestaurantsSection = async() => {
    await new Promise((r) => setTimeout (r, 1000))
    .then(window.scrollTo( {top: HomeRestaurantsSection.current.offsetTop - 100, behavior: "smooth"}))
    .then(navOff);
  }

  const HomeAboutSection = createRef();
  const goToHomeAboutSection = async() => {
    await new Promise((r) => setTimeout (r, 1000))
    .then(window.scrollTo( {top: HomeAboutSection.current.offsetTop - 90, behavior: "smooth"}))
    .then(navOff);
  }

  const HomeVoluntariadosSection = createRef();
  const goToHomeVoluntariadosSection = async() => {
    await new Promise((r) => setTimeout (r, 1000))
    .then(window.scrollTo( {top: HomeVoluntariadosSection.current.offsetTop - 90, behavior: "smooth"}))
    .then(navOff);
  }

  const { pathname } = useLocation();
  useEffect(() => {
    new Promise((r) => setTimeout(r, 10)).then(window.scrollTo({top: 0, behavior: "smooth"})).then(navOff);
  }, [pathname]);

  //const [picture, setPicture] = useState(localStorage.getItem('profilePic'));
  const [restaurantSelected, setRestaurantSelected] = useState();
  useEffect(() => {
    //console.log(restaurantSelected)
    //console.log(user)
    console.log(localStorage)
    //setPicture(localStorage.getItem('profilePic'));
    //onAuthStateChanged(auth,  )
  })

  return (
    !user ? <SignUp setUser={setUser} user={user}/>
    :
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <div className="App">
          <Navbar isopen={isopen} visibility={visible} goToHomeRestaurantsSection={goToHomeRestaurantsSection} goToContactSection={goToContactSection} goToHomeAboutSection={goToHomeAboutSection} goToHomeVoluntariadosSection={goToHomeVoluntariadosSection}/>
          <Header navToggle={navToggle} isopen={isopen} goToHomeRestaurantsSection={goToHomeRestaurantsSection} signOut={signOut} />
        
          <Routes>
            <Route path="/contact" element={[
              <ContactTitle ref={ContactSection}/>,
              <ContactInfo/>
            ]}/>
            <Route path="/homerestaurants" element={[
              // <HomeTitle/>,
              <HomeRestaurants ref={HomeRestaurantsSection} setRestaurantSelected={setRestaurantSelected}/>,
              <HomeAbout ref={HomeAboutSection}/>,
              <HomeVoluntariados ref={HomeVoluntariadosSection}/>
            ]}/>
            <Route path="/menu-page" element={[
              <MenuTitle />,
              <MenuList />,
              <MenuFooter/>
            ]}/>
            <Route path="/checkout" element={[
              <Cart/>
            ]}/>
            <Route path="/payment-success" element={[
              <PaymentSuccess />
            ]}/>
            <Route path="/" element={[
              <HomeTitle/>
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