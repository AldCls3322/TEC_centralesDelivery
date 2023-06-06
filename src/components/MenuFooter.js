import React, { useState }  from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {NavLink as Link} from 'react-router-dom';
import cartProducts from "../stores/cart/cartSlice";
import ContactInfo from './ContactInfo';

const MenuFooter = () => {
  const productsInCart = useSelector(cartProducts);

  return (
    <Container>
      <rtnBtn>RETURN</rtnBtn>
      <spcBtwn/>
      <chkoutBtn></chkoutBtn>
    </Container>
  )
}

export default MenuFooter

const Container = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  widht: 100%;
  hight: 100px;

  /* Color, Background & Text */
  background-color: ${({ theme }) => theme.color2}l

  /* Animations and Other */
`

const rtnBtn = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */
`

const spcBtwn = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */
`

const chkoutBtn = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */

  /* Color, Background & Text */

  /* Animations and Other */
`