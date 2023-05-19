import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDensityMedium, MdClose } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import UserImg from '../imgs/user.png';

const Header = ({navToggle, isOpen}) => {
    return (
        <Container>
            {isOpen ? 
            <IconsGird>
                <CloseIcon onClick={navToggle} isOpen={isOpen}/> 
                <Icon onClick={navToggle} isOpen={isOpen}/>
            </IconsGird> 
            : 
            <IconsGird>
                <CloseIcon onClick={navToggle} isOpen={isOpen}/> 
                <Icon onClick={navToggle} isOpen={isOpen}/>
            </IconsGird> 
            }
            <CoffeeName>                
                Rappi Centrales
            </CoffeeName>

            <UserBox>
                <SideTextGrid>
                    <TextContainer>
                        <TextLink>Profile</TextLink>
                    </TextContainer>
                    <TextContainer>
                        <TextLink>MY ORDERS</TextLink>
                    </TextContainer>
                </SideTextGrid>
                <SideProfileImageGrid>
                    <ProfileImage/>
                </SideProfileImageGrid>
            </UserBox>

            {/* <Options>
                <StyledLink to="/" exact>
                    <HomeButton>
                        Home
                    </HomeButton>
                </StyledLink>
                <StyledLink to="/menu">
                    <MenuButton>
                        Menu
                    </MenuButton>
                </StyledLink>
                <StyledLink to="/contact">
                    <ContactButton>
                        Contact Us
                    </ContactButton>
                </StyledLink>
            </Options> */}
        </Container>
    )
}

export default Header

const Container = styled.div`
    /* Positioning */
    position: -webkit-sticky; // makes the header be always atop no matter if you scroll
    position: sticky;
    top: 0;
    z-index: 2;

    /* Display & Box Model */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;

    /* Color, Background & Text */
    background: #313131; /* BROWN OPTION = #3C2A20 | SMOKE BLACK = #0D0A08 | BLACK CHOCOLATE = #221E16*/
    /background: rgb(49 49 49 / 100);
    color: white;
    border-bottom: 1px solid #66232C; /* F2E3D0 */
`

const IconsGird = styled.div`
    position: absolute; 
    height: 100%;
    width: 10%;
    left: 0;
`

const Icon = styled(MdDensityMedium)`
    position: absolute;
    left: 2vw;

    font-size: 2rem;
    
    //transform: translate(-50%, -15%);

    visibility: ${ ({isOpen}) => (isOpen ? 'hidden' : 'visible') };

    transition: all 0.3s ease-in-out;
    left: ${ ({isOpen}) => (isOpen ? '20vw': '2vw') };

    @media screen and (max-width: 400px) {
        width: 100%;
    }

    cursor: pointer;
    p {
        font-size: 5rem;
        transform: translate(-175%, 100%)
    }
`

const CloseIcon = styled(MdClose)`
    position: absolute;
    //left: 2vw;

    font-size: 2rem;

    //transform: translate(-50%, -15%);

    visibility: ${ ({isOpen}) => (isOpen ? 'visible' : 'hidden') };

    transition: 0.3s ease-in-out;
    left: ${ ({isOpen}) => (isOpen ? '20vw': '2vw') };
    // left: 20vw;

    @media screen and (max-width: 400px) {
        width: 100%;
    }

    cursor: pointer;
    p {
        font-size: 5rem;
        transform: translate(-175%, 100%)
    }
`

const UserBox = styled.div`
    /* Positioning */
    position: absolute;
    right: 1.5vw;

    background: #004B93;

    width: 15rem;
    height: 6.5vh;
    
    border-radius: 1rem;
    border-style: solid;
    border-width: thin;
    border-color: #FFFFFF;

    display: grid;
`

const SideTextGrid = styled.div`
    position: relative;
    
    // width: 70%;
    // height: 85%;

    grid-row: 1;
    grid-column: 1;
    
    padding: 2%;   
`

const TextContainer = styled.div`
    width: 100%;
    height: 50%;

    color: black;

    //text-align: center;
    vertical-align: middle;
    align-items: end;
    justify-content: center;
`

const TextLink = styled(Link)`
    width: 100%;
    right: 0;

    /* Color, Background & Text */
    text-decoration: none;
    color: white;

    &:visited, &:link {
        text-decoration: none;
    }

    :active, :focus {
        color: #89634B; /* liver chestnut = #9E7A4D ;  */
    }

    :hover {
        position: relative;
        // width: 100%;
        // background-color: #C9A469;

        color: #C9A469; /* liver chestnut = #9E7A4D ;  */

        content: "";
        cursor: pointer;
        transition: .25s linear;
    }
`

const SideProfileImageGrid = styled.div` 
    // width: 30%;
    // height: 85%;

    display: flex;
    align-items: center;
    justify-content: center;

    grid-row: 1;
    grid-column: 2;
`

const ProfileImage = styled.div`    
    height: 3rem;
    width: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: url(${UserImg}) center center;
    background-size: cover;

    // margin-left: auto;
    // margir-right: auto;

    margin: 0 auto;

    border-radius: 50%;
`

const CoffeeName = styled.div`
    /* Positioning */
    /position: absolute;
    left: 10px;

    /* Display */
    display: flex;
    transform: scale(1.5);    
    margin-left: 40px;
`

const Options = styled.div`
    /* Positioning */
    position: absolute;
    right: -10px;

    /* Display */
    transform: scale(0.8);
    display: flex;
`

const styleddLink = styled(Link)`
    /* Color, Background & Text */
    text-decoration: none;
    color: white;

    &:visited, &:link {
        text-decoration: none;
    }

    :active, :focus {
        color: #89634B; /* liver chestnut = #9E7A4D ;  */
    }

    :hover {
        position: relative;
        // width: 100%;
        // background-color: #C9A469;

        color: #C9A469; /* liver chestnut = #9E7A4D ;  */

        content: "";
        cursor: pointer;
        transition: .25s linear;
    }
`

const HomeButton = styled.div`
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
`

const MenuButton = styled.div`
    display: flex;
    margin-left: 5px;
    margin-right: 5px;

    :hover {
        color: #C9A469; /* liver chestnut = #9E7A4D ;  */
        cursor: pointer;
        position: relative;
        transition: .25s linear;
    }
`

const ContactButton = styled.div`
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    
    :hover {
        position: relative;

        color: #C9A469; /* liver chestnut = #9E7A4D ;  */
        
        cursor: pointer;
        transition: .25s linear;
    }
`