import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { MdHelp } from 'react-icons/md';

const Navbar = ({isopen, visibility, goToHomeRestaurantsSection, goToContactSection, goToHomeAboutSection, goToHomeVoluntariadosSection}) => {
    //console.log(visibility)
    return (
        visibility ?
        <Container isOpen={isopen}>
            <Menu>
                <SbLink to="/">HOME</SbLink>
                <SbLink to="/homerestaurants" onClick={goToHomeRestaurantsSection}>RESTAURANTES</SbLink>
                <SbLink to="/checkout">MY ORDERS</SbLink>
                <SbLink to="homerestaurants" onClick={goToHomeVoluntariadosSection}>VOLUNTARIADOS</SbLink>
                <SbLink to="/homerestaurants" onClick={goToHomeAboutSection}>ABOUT</SbLink>
                <SbHelpLinkContainer to="/contact" onClick={goToContactSection}>
                    <IconHelp/>
                    HELP
                </SbHelpLinkContainer>
            </Menu>
        </Container>
        :
        <Container isOpen={isopen}>
            <Menu>
                <SbLink to="/">HOME</SbLink>
                <SbLink to="/homerestaurants" onClick={goToHomeRestaurantsSection}>RESTAURANTES</SbLink>
                <SbLink to="/checkout">MY ORDERS</SbLink>
                <SbLink to="homerestaurants" on onClick={goToHomeVoluntariadosSection}>VOLUNTARIADOS</SbLink>
                <SbLink to="/homerestaurants" onClick={goToHomeAboutSection}>ABOUT</SbLink>
                <SbHelpLinkContainer to="/contact" onClick={goToContactSection}>
                    <IconHelp/>
                    HELP
                </SbHelpLinkContainer>
            </Menu>
        </Container>
    )
}

export default Navbar

const Container = styled.aside`
    /* Positioning */
    position: fixed;
    z-index: 10;
    top: 0;

    /* Display & Box Model | Sizing */
    width: 20%;
    height: 100%;

    display: grid;
    align-items: center;

    /* Color, Background & Text */
    background: rgba(36, 39, 43, 0.8);

    /* Animations and Other */
    transition: 0.3s ease-in-out;
    left: ${ ({isOpen}) => (isOpen ? '0': '-1000px') };
    font-family: comfortaa;

    @media screen and (max-width: 700px){
        width: 100%;
        height: 100vh;
        background: rgba(36, 39, 43, 0.95);
        overflow: hidden;
        // position: -webkit-sticky; // makes the header be always atop no matter if you scroll
        // position: sticky;
    }
`

const Menu = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: grid;
    text-align: center;
    grid-template-column: 1fr;
    grid-template-rows: repeat(5, 80px);

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        grid-template-rows: repeat(5,80px);
    }
`

const SbLink = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.body};
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;

    /* Animations and Other */
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.color2};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`

const SbHelpLinkContainer = styled(Link)`
    /* Positioning */
    position: absolute;
    bottom: 0;

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4%;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.body};
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;

    /* Animations and Other */
    &:hover{
        color: ${({ theme }) => theme.color2};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`

const IconHelp = styled(MdHelp)`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
    &:hover{
        color: ${({ theme }) => theme.color2};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`