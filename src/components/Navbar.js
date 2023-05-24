import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { MdHelp } from 'react-icons/md';

const Navbar = ({isOpen, visibility}) => {
    console.log(visibility)
    return (
        visibility ?
        <Container isOpen={isOpen}>
            <Menu>
                <SbLink>RESTAURANTES</SbLink>
                <SbLink>VOLUNTARIADOS</SbLink>
                <SbLink>ABOUT</SbLink>
                <SbHelpLinkContainer>
                    <IconHelp/>
                    HELP
                </SbHelpLinkContainer>
            </Menu>
            {/* <BottonWrap>
                <Route to="/">Order Now</Route>
            </BottonWrap> */}
        </Container>
        :
        <Container isOpen={isOpen}>
            <Menu>
                <SbLink>RESTAURANTES</SbLink>
                <SbLink>VOLUNTARIADOS</SbLink>
                <SbLink>ABOUT</SbLink>
                <SbHelpLinkContainer>
                    <IconHelp/>
                    HELP
                </SbHelpLinkContainer>
            </Menu>
            {/* <BottonWrap>
                <Route to="/">Order Now</Route>
            </BottonWrap> */}
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

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`

const Menu = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: grid;
    text-align: center;
    grid-template-column: 1fr;
    grid-template-rows: repeat(3, 80px);

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3,60px);
    }
`

const SbLink = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;

    /* Animations and Other */
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        color: #0092DA;
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem white);            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem white);            /* MDN */
    }
`

const SbHelpLinkContainer = styled(Link)`
    /* Positioning */
    position: absolute;
    bottom: 0;
    left: 4%;

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    color: white;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;

    /* Animations and Other */
    &:hover{
        color: #0092DA;
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem white);            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem white);            /* MDN */
    }
`

const IconHelp = styled(MdHelp)`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    color: white;

    /* Animations and Other */
    &:hover{
        color: #0092DA;
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem white);            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem white);            /* MDN */
    }
`

const BottonWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Route = styled(Link)`
    padding: 16px 64px;
    border: none;

    background: #007f5f;
    color: #fff;

    font-size: 16px;
    text-decoration: none;

    cursor: pointer;
    white-space: nowrap;
    outline: none;
    transition: 0.2s ease-in-out;

    &:hover{
        transition: 0.2s ease-in-out;
        background: #80b918;
        color: #010606;
    }
`