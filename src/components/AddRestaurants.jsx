import React from 'react';
import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';

export const AddRestaurants = ({ onAddRestaurant }) => {
    return (
        <Container>
            <BtnMenu onClick={onAddRestaurant} to='/menu-page'>ORDENAR</BtnMenu>
        </Container>
    )
}

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    vertical-align: center;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    //background-color: red;

    /* Animations and Other */
`

const BtnMenu = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 90%;
    height: 50%;
    max-width: 180px;
    max-height: 40px;
    display: flex;
    text-align: center;
    vertical-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 600;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color3};
    color: ${({ theme }) => theme.body};
    text-decoration: none;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${({ theme }) => theme.color2};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.color9});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.color9});            /* MDN */
    }
`