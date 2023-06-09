import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';
import { useSelector, useDispatch } from "react-redux";
import { clearRestaurant, selectRestaurant, restaurantInformation } from "../stores/restaurant/restaurantSlice";

const MenuTitle = () => {
  const restaurant = useSelector(restaurantInformation);
  //console.log(selectedRestaurant)

  return (
    <Container>
      <ImgContainer>
        <ImgLogo src={restaurant[0].Logo}/>
      </ImgContainer>
      <TitleContainer>
        <Title>{restaurant[0].Title}</Title>
        <TitleBar />
      </TitleContainer>
    </Container>
  )
}

export default MenuTitle

const Container = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */
`

const ImgContainer = styled.div`
  /* Positioning */

    /* Display & Box Model | Sizing */
    // max-width: 500px;
    // max-height: 500px;
    

    /* Color, Background & Text */
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-bottom: 20px;

    /* Animations and Other */
    @media screen and (max-width: 700px){
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      background-size: fit;
    }
`

const ImgLogo = styled.img`
  /* Positioning */

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */
  @media screen and (max-width: 700px){ 
    width: 90%;
  }
`

const TitleContainer = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  margin: auto;

  /* Color, Background & Text */

  /* Animations and Other */
`
const Title = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  margin: auto;
  margin-bottom: 5px;

  /* Color, Background & Text */
  font-size: 3rem;
  font-weight: 500;
  font-family: verdana, Sans-serif;

  /* Animations and Other */
`

const TitleBar = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  margin: auto;
  width: 600px;
  height: 5px;

  /* Color, Background & Text */
  background-color: ${({ theme }) => theme.color5};

  /* Animations and Other */
  @media screen and (max-width: 700px){
    width: 200px;
  }
`