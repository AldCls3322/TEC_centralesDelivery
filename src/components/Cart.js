import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../stores/cart/cartSlice";
import useTabSwitch from "../hooks/useTabSwitch";
import { Tabs } from "./Tabs";
import { ProductsSummary } from "./ProductSummary.jsx";

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
                <TitleText>Your Cart is empty</TitleText>
                <ReturnButton to="/menu-page">RETURN</ReturnButton>
            </Container>
        )
    }

    return (
        <Container>
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            { currentTab === 'Summary' ? 
                <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                    <ProductsSummary />
                    <div className="flex justify-end p-2">
                        <ButtonNext onClick={()=>handleTabSwitch('Delivery')}><span className="mr-1">Next</span></ButtonNext>
                    </div>
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
    justify-contents: center;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const TitleText = styled.div``

const ReturnButton = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 60px;
    width: 160px;
    display: flex;
    margin-left: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    /* Color, Background & Text */
    text-decoration: none;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.color1};

    /* Animations and Other */
    &:hover{
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`

const ButtonNext = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
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