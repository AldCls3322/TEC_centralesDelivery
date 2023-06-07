import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartProducts } from "../stores/cart/cartSlice";
import ContactInfo from './ContactInfo';
import { FaShoppingCart } from 'react-icons/fa';

const MenuProductsCard = () => {
    //const cartCount = 0;
    const cartCount = useSelector(cartProducts).length;
    //
    console.log(cartCount);
    // try{
    //     const productsInCart = useSelector(cartProducts);
    //     const cartCount = productsInCart.length;
    //     console.log(cartCount);
    // }catch (e){
    //     console.log(e);
    // }

    return (
        <Container>
            <ReturnButton to="/homerestaurants">RETURN</ReturnButton>
            <CheckoutContainer to="/checkout">
                <CartIcon/>
                {cartCount > 0 ? <BubbleCount>{cartCount}</BubbleCount> : null}
                <CheckoutButton>CHECKOUT</CheckoutButton>
            </CheckoutContainer>
        </Container>
    )
}

export default MenuProductsCard

const Container = styled.div`
    /* Positioning */
    position: absolute;

    /* Display & Box Model | Sizing */
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.color5};

    /* Color, Background & Text */
    background-color: ${({ theme }) => theme.color8};
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
`

const ReturnButton = styled(Link)`
    /* Positioning */
    position: relative;

    /* Display & Box Model | Sizing */
    height: 60px;
    width: 160px;
    display: flex;
    margin-left: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.color1};

    /* Animations and Other */
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`

const CheckoutContainer = styled(Link)`
    /* Positioning */
    position: relative;

    /* Display & Box Model | Sizing */
    height: 60px;
    width: 160px;
    display: flex;
    margin-right: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.color1};

    /* Animations and Other */
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`

const CartIcon = styled(FaShoppingCart)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-right: 10px;

    /* Color, Background & Text */
    font-size: 30px;

    /* Animations and Other */
    // @media screen and (max-width: 400px) {
    //     width: 100%;
    // }
`

const BubbleCount = styled.div`
    /* Positioning */
    position: absolute;
    left: 33px;
    top: 1px;

    /* Display & Box Model | Sizing */
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    /* Color, Background & Text */
    font-weight: 800;
    color: ${({ theme }) => theme.color5};
    background-color: ${({ theme }) => theme.body};

    /* Animations and Other */
    //className="rounded-full bg-yellow-400 inline-flex justify-center items-center w-full absolute -top-1 -right-1
`

const CheckoutButton = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`