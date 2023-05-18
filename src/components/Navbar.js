import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

const Navbar = ({isOpen, visibility}) => {
    console.log(visibility)
    if (visibility) {
        return (
            <NavHeader>
                <NavLink to='/'>ABOUT</NavLink>
            </NavHeader>
        )
    }
}

export default Navbar

const NavHeader = styled.div`
    /* Positioning */
    position: -webkit-sticky; // makes the header be always atop no matter if you scroll
    position: sticky;
    top: 20;
    z-index: 1;

    /* Display & Box Model */
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 20vw;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(0,0,0,0.5);
    color: white;
    font-weight: 700;
`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    
    cursor: pointer;
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

const NavIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    
    display: block;
    color: #fff;
    cursor: pointer;
    p {
        font-weight: bold;
        transform: translate(-175%, 100%)
    }
`