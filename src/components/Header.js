import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDensityMedium, MdClose } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import UserImg from '../imgs/user.png';
import Logo from '../imgs/LogoTTT.svg';

const Header = ({navToggle, isopen, goToHomeRestaurantsSection, signOut}) => {
    const [profile, setProfile] = useState();
    useEffect(() => {
        setProfile(localStorage.getItem('profilePic'));
    })
    return (
        <Container>
            {isopen ? <Icon onClick={navToggle} isopen={isopen}/> : <Icon onClick={navToggle} isopen={isopen}/> }
            <TitleContainer to="/homerestaurants" onClick={goToHomeRestaurantsSection}>
                <IconLogo src={Logo}/>
                <SbLinkCoffeeName>TEC to Table</SbLinkCoffeeName>
            </TitleContainer>
            <UserBox onClick={signOut}>
                <SideTextGrid>
                    <TextContainer>
                        <TextLink>Logout</TextLink>
                    </TextContainer>
                </SideTextGrid>
                <SideProfileImageGrid>
                    <ProfileImage src={profile} alt={UserImg}/>
                </SideProfileImageGrid>
            </UserBox>
        </Container>
    )
}

export default Header

const Container = styled.div`
    /* Positioning */
    position: -webkit-sticky; // makes the header be always atop no matter if you scroll
    position: sticky;
    top: 0;
    z-index: 11;

    /* Display & Box Model */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color9};
    color: ${({ theme }) => theme.body};
    border-bottom: 1px solid ${({ theme }) => theme.body}; /* F2E3D0 */

    @media screen and (max-width: 700px){
        width: 100vw;
        justify-content: space-between;
    }
    @media screen and (max-height: 540px){
        height: 70px;
    }
`

const IconsGird = styled.div`
    /* Positioning */
    position: absolute;
    left: 0;

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 10%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const Icon = styled(MdDensityMedium)`
    /* Positioning */
    position: absolute;
    left: 2vw;

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 2rem;

    /* Animations and Other */
    transition: all 0.3s ease-in-out;
    left: ${ ({isopen}) => (isopen ? '15%': '2vw') };

    cursor: pointer;
    p {
        font-size: 5rem;
        transform: translate(-175%, 100%)
    }
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
    @media screen and (max-width: 700px){
        position: relative;
        //left: 2px;
    }
`

const CloseIcon = styled(MdClose)`
    /* Positioning */
    position: absolute;

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 2rem;

    /* Animations and Other */
    visibility: ${ ({isOpen}) => (isOpen ? 'visible' : 'hidden') };

    transition: 0.3s ease-in-out;
    left: ${ ({isOpen}) => (isOpen ? '20vw': '2vw') };

    @media screen and (max-width: 700px){
        width: 100%;
    }

    cursor: pointer;
    p {
        font-size: 5rem;
        transform: translate(-175%, 100%)
    }
`

const TitleContainer = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    text-decoration: none;
    color: white;

    /* Animations and Other */
    &:visited, &:link {
        text-decoration: none;
    }

    :active, :focus {
        color: ${({ theme }) => theme.color1}; /* liver chestnut = #9E7A4D ;  */
    }

    :hover {
        position: relative;
        // width: 100%;
        // background-color: #C9A469;

        content: "";
        cursor: pointer;
        color: ${({ theme }) => theme.color1};
        transition: .25s linear;
    }
`

const IconLogo = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 50px;

    /* Color, Background & Text */

    /* Animations and Other */
`

const SbLinkCoffeeName = styled.div`
    /* Positioning */
    /position: absolute;
    left: 10px;

    /* Display & Box Model | Sizing */
    display: flex;
    transform: scale(1.5);    
    margin-left: 40px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    font-family: comfortaa;

    /* Animations and Other */
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
    }
    @media screen and (max-width: 700px){
        display: none;
    }
`

const UserBox = styled.div`
    /* Positioning */
    position: absolute;
    right: 1.5vw;

    /* Display & Box Model | Sizing */
    width: 10rem;
    height: 6.5vh;
    border-radius: 1rem;
    border-style: solid;
    border-width: thin;
    border-color: ${({ theme }) => theme.body};
    display: grid;
    align-items: center;
    justify-content: space-evenly;
    grid-template-row: 1fr;
    grid-template-column: 1fr, 1fr; //repeat(2, 80px);

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color4};
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
    :hover {
        cursor: pointer;
        transition: .25s linear;
    }

    @media screen and (max-width: 700px){
        position: relative;
        width: 3rem;
        height: 7.5vh;
        background: transparent;
        border-color: transparent;
    }
    @media screen and (max-height: 790px){
        height: 90%;
    }
`

const SideTextGrid = styled.div`
    /* Positioning */
    position: relative;

    /* Display & Box Model | Sizing */
    grid-row: 1;
    grid-column: 1;

    padding: 2%;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        display: none;
    }
`

const TextContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 50%;
    vertical-align: middle;
    align-items: end;
    justify-content: center;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text};

    /* Animations and Other */
`

const TextLink = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    //right: 0;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.body};
    font-weight: 600;

    /* Animations and Other */
`

const SideProfileImageGrid = styled.div` 
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    grid-row: 1;
    grid-column: 2;

    /* Color, Background & Text */

    /* Animations and Other */
`

const ProfileImage = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 3rem;
    width: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    border-radius: 50%;

    /* Color, Background & Text */
    //background: url(${UserImg}) center center;
    background-size: cover;

    /* Animations and Other */    
    :hover {
        cursor: pointer;
    }
`