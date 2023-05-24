import React from 'react'
import styled from 'styled-components';
import CentralesImg from '../imgs/centrales02.jpg';

function HomeScreenBckgrnd() {
  return (
    <BackgroundImg />
  )
}

export default HomeScreenBckgrnd

const BackgroundImg = styled.div`
    position: absolute;
    
    height: 100%;
    width: 100%;

    //z-index: 1;

    //overflow-y: scroll;

    background: url(${CentralesImg}) center center;
    background-size: cover;

    background-attachment: fixed;
    filter: blur(5px) grayscale(100%) brightness(120%);
    // filter: blur(2px) sepia(100%) hue-rotate(190deg) saturate(700%) brightness(90%);
`