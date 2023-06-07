import React, { useState }  from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {NavLink as Link} from 'react-router-dom';
import cartProducts from "../stores/cart/cartSlice";
import ContactInfo from './ContactInfo';

const MenuFooter = () => {
  //const productsInCart = useSelector(cartProducts);
  return (
    <Container>
      <rtnBtn>RETURN</rtnBtn>
      <spcBtwn/>
      <chkoutBtn>CHECKOUT</chkoutBtn>
    </Container>
  )
}

export default MenuFooter

const Container = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  display: flex;
  widht: 100%;
  height: 100px;
  justify-content: left;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color5};

  /* Color, Background & Text */
  background-color: ${({ theme }) => theme.color8};
  color: ${({ theme }) => theme.body};

  /* Animations and Other */
`

const rtnBtn = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  width: 20%;
  margin-left: 50px;

  /* Color, Background & Text */

  /* Animations and Other */
`

const spcBtwn = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  width: 100%;
  height: 100%;

  /* Color, Background & Text */

  /* Animations and Other */
`

const chkoutBtn = styled.div`
  /* Positioning */

  /* Display & Box Model | Sizing */
  width: 20%;

  /* Color, Background & Text */

  /* Animations and Other */
`
