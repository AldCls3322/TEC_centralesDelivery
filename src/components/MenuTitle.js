import React, { useState, useEffect }from 'react'
import styled from 'styled-components'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

const MenuTitle = () => {
  return (
    <Container>
      <ImgContainer>
        <ImgLogo src='https://tecfood.tec.mx/sites/g/files/vgjovo1061/files/styles/de2e/public/2022-09/MTY-al-star-logo.jpeg?itok=mGIc2MM8'/>
      </ImgContainer>
      <TitleContainer>
        <Title>AL's Star Burger Mexico</Title>
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
`

const ImgLogo = styled.img`
  /* Positioning */

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */
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
`