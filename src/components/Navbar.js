import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

const Navbar = ({isOpen, visibility}) => {
    console.log(visibility)
    return (
        visibility ?
        <Container isOpen={isOpen}>
            <Menu>
                <SbLink>RESTAURANTES</SbLink>
                <SbLink>VOLUNTARIADOS</SbLink>
                <SbLink>ABOUT</SbLink>
                <HelpLink></HelpLink>
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
                <HelpLink></HelpLink>
            </Menu>
            {/* <BottonWrap>
                <Route to="/">Order Now</Route>
            </BottonWrap> */}
        </Container>
    )
}

export default Navbar

const Container = styled.aside`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 350px;
    height: 100%;

    display: grid;
    align-items: center;

    background: rgba(0, 0, 0, 0.8);

    transition: 0.3s ease-in-out;
    left: ${ ({isOpen}) => (isOpen ? '0': '-1000px') };

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`

const Menu = styled.div`
    display: grid;

    text-align: center;

    grid-template-column: 1fr;
    grid-template-rows: repeat(3, 80px);

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3,60px);
    }
`

const SbLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    text-decoration: none;

    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        color: #80b918;
        transition: 0.2s ease-in-out;
    }
`

const HelpLink = styled.div`
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