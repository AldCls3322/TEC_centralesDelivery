import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../stores/cart/cartSlice";
import useTabSwitch from "../hooks/useTabSwitch";
import { Tabs } from "./Tabs";
import { ProductsSummary } from "./ProductSummary.jsx";
import CentralesImg from '../imgs/centrales02.jpg';

// import Button from "../../components/elements/Button";
// import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
// import { AddressForm } from "../../components/AddressForm";
// import { StripeWrapper } from "../../components/PaymentForm";

const Cart = () => {
    const cart = useSelector(cartProducts);
    const tabs= ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const PaymentProcess = () => {
    //     await new Promise((r) => setTimeout (r, 1000))
    //     .then(useDispatch(clearCart()));
    //     //useNavigate('/payment-success');
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!stripe || !elements || !cart?.length || !address) {
        //     return;
        // }

        //setLoading(true);
        try {
            //dispatch(clearAddress());
            dispatch(clearCart());
            navigate('/payment-success');
            // const { error: backeEndError, clientSecret } = await fetch('http://localhost:8080/create-payment-intent', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         paymentMethodType: 'card',
            //         orderItems: cart,
            //         userId: '',
            //         shippingAddress: address
            //     })
            // }).then(r => r.json());

            // const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
            //     clientSecret, {
            //         payment_method: {
            //             card: elements.getElement(CardElement)
            //         }
            //     }
            // )
            // if (backeEndError || stripeError) {
            //     setError(backeEndError || stripeError)
            // } else if (paymentIntent.status === 'succeeded') {
            //     dispatch(clearAddress());
            //     dispatch(clearCart());
            //     navigate('/payment-success');
            // }

        } catch(err) {
            console.log(err);
        }

        //setLoading(false);
    }

    if (!cart || cart.length === 0) {
        return (    
            <Container>
                <ReciptContainer>
                    <TitleText>
                        <Text>Your Cart is empty</Text>
                    </TitleText>
                    <ReturnButtonContainer>
                        <ReturnButton to="/menu-page">RETURN</ReturnButton>
                    </ReturnButtonContainer>
                </ReciptContainer>
                <BckGrndContainer />
            </Container>
        )
    }

    return (
        <Container>
            <BckGrndContainer/>
            <ReciptContainer>
                <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
                { currentTab === 'Summary' ? 
                    <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                        <ProductsSummary />
                        <ButtonsContainer>
                            <ReturnButton to="/menu-page">RETURN</ReturnButton>
                            <ButtonNext onClick={()=>handleTabSwitch('Delivery')}><span className="mr-1">Next</span></ButtonNext>
                        </ButtonsContainer>
                    </div>
                    : currentTab === 'Delivery' ?
                            <div>
                            {/* <AddressForm onTabSwitch={handleTabSwitch}/> */}
                            <div>ADDRESS</div>
                        </div>
                    :
                    <div>
                        {/* <StripeWrapper /> */}
                        <div>CARD DETAILS</div>
                        <ButtonProceedPayment onClick={handleSubmit}>PAY NOW</ButtonProceedPayment>
                    </div>
                }
            </ReciptContainer>
            {/* <TitleSection>
                <Title>Summary</Title>
            </TitleSection> */}

        </Container>
    )

}

export default Cart

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

const ReciptContainer = styled.div`
    /* Positioning */
    z-index: 2;

    /* Display & Box Model | Sizing */
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    min-height: 90vh;
    justify-contents: center;
    margin: auto;
    //align-items: center;

    /* Color, Background & Text */
    background-color: ${( { theme } ) => theme.body};

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

const TitleText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    justify-contents: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;

    /* Color, Background & Text */
    //background: ${( { theme } ) => theme.color5};
    color: ${( { theme } ) => theme.color9};
    font-size: 2rem;
    font-family: monospace;

    /* Animations and Other */
`

const Text = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: block;
    justify-contents: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    /* Color, Background & Text */

    /* Animations and Other */
`

const ButtonsContainer = styled.div`
// className="flex justify-end p-2"
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    display: flex;
    justify-content: space-around;

    /* Color, Background & Text */

    /* Animations and Other */
`

const ReturnButtonContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    display: flex;
    justify-content: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const ReturnButton = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 60px;
    width: 160px;
    display: flex;
    //margin-left: auto;
    //margin-right: auto;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.color1};

    /* Animations and Other */
    &:hover{
        background: ${({ theme }) => theme.color2};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
    }
`

const ButtonNext = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 60px;
    width: 160px;
    display: flex;
    //margin-left: auto;
    //margin-right: auto;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.color1};
    border: none;
    font-size: 1.2rem;

    /* Animations and Other */
    &:hover{
        background: ${({ theme }) => theme.color2};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
    }
`

const ButtonProceedPayment = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 150px;
    height: 30px;

    /* Color, Background & Text */
    background-color: ${({ theme }) => theme.color3}

    /* Animations and Other */
    &:hover{
        color: ${({ theme }) => theme.color2};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`