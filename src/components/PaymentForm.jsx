import { CardElement, useElements, useStripe, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../stores/cart/cartSlice";
//import { getAddress, clearAddress } from "../stores/userInfo/addressSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
//import Button from "./elements/Button";
import styled from "styled-components";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(cartProducts);
    //const address = useSelector(getAddress);
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !cart?.length ) {
            return;
        }

        setLoading(true);
        try {
            const { error: backeEndError, clientSecret } = await fetch('http://localhost:8080/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    paymentMethodType: 'card',
                    orderItems: cart,
                    userId: '',
                    //shippingAddress: address
                })
            }).then(r => r.json());

            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement)
                    }
                }
            )
            if (backeEndError || stripeError) {
                setError(backeEndError || stripeError)
            } else if (paymentIntent.status === 'succeeded') {
                //dispatch(clearAddress());
                dispatch(clearCart());
                navigate('/payment-success');
            }

        } catch(err) {
            console.log(err);
        }

        setLoading(false);
    }

    return (
        <form className="md:-2/3 md:mx-auto px-2 pt-1" id="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Please enter your card details</label>
            <div className="my-4">
                <CardElement id="card-element" />
            </div>
            <div className="flex justify-center p-2">
                <Button type="submit" disbled={loading}>
                    {
                        loading ?
                        'Loading...' :
                        'Pay Now'
                    }
                </Button>
            </div>
        </form>
    )
}

const Button = styled.button`
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