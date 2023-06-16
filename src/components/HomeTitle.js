import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import CentralesImg from '../imgs/centrales02.jpg';
import {NavLink as Link} from 'react-router-dom';

import Logo from '../imgs/LogoTTT.svg';

const HomeTitle = () => {
    const [profile, setProfile] = useState();
    useEffect(() => {
        setProfile(localStorage.getItem('name'));
    })

    return (
        <Container>
            <BckgrndImg />
            <Items>
                <Icon src={Logo}/>
                <Title>Tec to Table</Title>
                <TextP>Bienvenido!! {profile}</TextP>
                <OrderButton to="/homerestaurants">RESTAURANTES</OrderButton>
            </Items>
        </Container>
    )
}

// export default HomeTitle

const forwardHomeTitle = forwardRef(HomeTitle)

export default forwardHomeTitle

const Container = styled.div`
    /* Positioning */
    position: absolute;
    z-index: 8;

    /* Display & Box Model | Sizing */
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    background-color: transparent;

    /* Animations and Other */
`

const Items = styled.div`
    /* Positioning */
    position: absolute;
    z-index: 9;
    
    /* Display & Box Model | Sizing */
    display: flex;
    height: 100vh;
    max-height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
    margin-top: auto;
    margin-bottom: auto;

    /* Color, Background & Text */
    color: #000000;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
    background: radial-gradient(${({ theme }) => theme.body}, transparent);
    
    /* Animations and Other */
    filter: none;
    @media screen and (max-width: 700px){
        background: radial-gradient(${({ theme }) => theme.body}, transparent);
    }
`

const IconLogoContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const Icon = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 10rem;

    /* Color, Background & Text */

    /* Animations and Other */
`

const Title = styled.div`
    /* Positioning */
    
    /* Display & Box Model | Sizing */
    margin-bottom: 1rem;
    box-shadow: 3px 5px #004B93;

    /* Color, Background & Text */
    font-family: comfortaa;
    font-size: clamp(2.5rem, 10vw, 5rem);
    letter-spacing: 3px;

    /* Animations and Other */
`

const TextP = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-bottom: 2rem;

    /* Color, Background & Text */
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-family: comfortaa;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 1rem;
    }
`
const OrderButton = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding: 1rem 4rem;
    border: none;

    /* Color, Background & Text */
    background: #004B93; //#2b9348;
    color: #fff;
    font-size: 1.4rem;
    font-family: roboto;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: #2196F3; // #BFD200; // #80b918;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #24272B;
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem white);            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem white);            /* MDN */
    }
`

const BckgrndImg = styled.div`
    /* Positioning */
    position: absolute;
    top: 0;
    z-index: 1;

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 100%;

    /* Color, Background & Text */
    background: url(${CentralesImg}) center center;
    background-size: cover;
    background-attachment: fixed;

    /* Animations and Other */
    filter: blur(5px) grayscale(100%) brightness(120%);
`