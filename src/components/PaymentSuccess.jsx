//import { Alert } from "../../components/elements/Alert";
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const PaymentSuccess = () => {
    return (
        <Container>
            <Alert>
                <AlertIcon />
                Your payment was successful
            </Alert>
            <ReturnButton to="/homerestaurants">RETURN</ReturnButton>
        </Container>
    )
}

export default PaymentSuccess;

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const Alert = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const AlertIcon = styled(BsFillInfoCircleFill)`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const ReturnButton = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    text-decoration: none;

    /* Animations and Other */
`