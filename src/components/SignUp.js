import React, {useEffect} from 'react'
import styled from 'styled-components';
import { auth, signInWithGoogle } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import CentralesImg from '../imgs/rectoria.jpg';
import Logo from '../imgs/LogoTTT.svg';

function SignUp({user, setUser}) {
    const navigate = useNavigate();

    // useEffect(() => {
    // if (user != null) {
    //     navigate('/homerestaurants');
    // }
    // }, [user]);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user.displayName);
            navigate('/');
        })
    },[user])

    return (
        <Container>
            <BckgrndImg />
            <ContentContainer>
                <IconLogoContainer>
                    <IconLogo src={Logo}/>
                </IconLogoContainer>
                <MainText>Sign in to the TEC-TO-TABLE</MainText>
                <SignInButtonContainer>
                    <SignInButton onClick={signInWithGoogle}>Sign In With Google</SignInButton>
                </SignInButtonContainer>
                <SunflowerCheckboxContainer>
                    <label><input type="checkbox" id="cbox1" value="first_checkbox"/>Soy parte de Sunflower</label>
                </SunflowerCheckboxContainer>
            </ContentContainer>
        </Container>
    )
}

export default SignUp

const Container = styled.div`
    /* Positioning */
    position: absolute;
    z-index: 8;

    /* Display & Box Model | Sizing */
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    background-color: black;

    /* Animations and Other */
`

const ContentContainer = styled.div`
    /* Positioning */
    z-index: 3;

    /* Display & Box Model | Sizing */
    width: 100%;

    /* Color, Background & Text */
    background-image: linear-gradient(to right, transparent,${({ theme }) => theme.color7},transparent);

    /* Animations and Other */
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

const IconLogo = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 10rem;

    /* Color, Background & Text */

    /* Animations and Other */
`

const MainText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    /* Color, Background & Text */
    font-family: comfortaa;
    font-size: 2.5rem;
    font-weight: 600;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 1rem;
    }
`

const SignInButtonContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const SignInButton = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
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

const SunflowerCheckboxContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    font-weight: 600;

    /* Animations and Other */
`
