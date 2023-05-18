import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDensityMedium } from 'react-icons/md';

const Header = ({navToggle, isOpen}) => {
    return (
        <Container>
            <Icon onClick={navToggle} />
            
            <CoffeeName>                
                Rappi Centrales
            </CoffeeName>

            <UserBox />

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

const Icon = styled(MdDensityMedium)`
    position: absolute;
    left: 2vw;

    font-size: 2rem;
    
    /transform: translate(-50%, -15%);

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

    background: #FFFFFF;

    width: 15rem;
    height: 6.5vh;
    
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