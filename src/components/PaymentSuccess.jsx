//import { Alert } from "../../components/elements/Alert";
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import CentralesImg from '../imgs/centrales02.jpg';

const PaymentSuccess = () => {
    return (
        <Container>
            <BckGrndContainer/>
            <PaymentInfoContainer>
                <AlertContainer>
                    <Alert>
                        <AlertIcon />
                        Your payment was successful
                    </Alert>
                </AlertContainer>
                <ReturnButton to="/homerestaurants">RETURN</ReturnButton>
            </PaymentInfoContainer>
        </Container>
    )
}

export default PaymentSuccess;

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 100%;
    justify-contents: center;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const BckGrndContainer = styled.div`
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

const PaymentInfoContainer = styled.div`
    /* Positioning */
    z-index: 2;

    /* Display & Box Model | Sizing */
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    min-height: 89.9vh;
    justify-contents: center;
    margin: auto;
    //align-items: center;

    /* Color, Background & Text */
    background-color: ${( { theme } ) => theme.body};

    /* Animations and Other */
`

const AlertContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-top: 20px;
    margin-bottom: 20px;
    //padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Color, Background & Text */
    font-size: 1.4rem;

    /* Animations and Other */
`

const Alert = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    padding: 1%;
    border-radius: 8px;
    width: calc(auto+10px);

    /* Color, Background & Text */
    background-color: ${( { theme } ) => theme.acceptColor}; //rgb(56 173 48); //#4BB543; //rgb(24 197 11)

    /* Animations and Other */
`

const AlertIcon = styled(BsFillInfoCircleFill)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //padding-right: 1%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const ReturnButton = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 60px;
    width: 160px;
    display: flex;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.color1};

    /* Animations and Other */
    &:hover{
        background-color: ${({ theme }) => theme.color2};
        filter: drop-shadow(0 0 0.2rem ${({ theme }) => theme.color1});            /* FF~35 */
        filter: drop-shadow(0 0 0 0.2rem ${({ theme }) => theme.color1});            /* MDN */
    }
`