import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../stores/cart/cartSlice";
import useTabSwitch from "../hooks/useTabSwitch";
import { Tabs } from "./Tabs";
import { ProductsSummary } from "./ProductSummary.jsx";
import CentralesImg from '../imgs/centrales02.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import visa from '../imgs/Visa.png'
import mastercard from '../imgs/MasterCard.png'
import americanexpress from '../imgs/American_Express.png'

//import { StripeWrapper } from "./PaymentForm";
import CheckoutForm from './CheckoutForm';

// import Button from "../../components/elements/Button";
// import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
// import { AddressForm } from "../../components/AddressForm";

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

    const [total, setTotal] = useState(0);
    useEffect(() => {
        const arrSum = cart.reduce((acc, { amount, price }) => acc + amount * price, 0);
        setTotal(arrSum);
    })

    const handleCancel = async (e) => {
        e.preventDefault();
        try {
            dispatch(clearCart());
            navigate('/menu-page');

        } catch(err) {
            console.log(err);
        }

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
            <ReciptContainer>
                <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
                { currentTab === 'Summary' ? 
                    <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                        <ProductsSummary />
                        <Bar />
                        <TotalContainer>
                            {/* <CartIcon/> */}
                            <TotalText>MXN</TotalText>
                            <TotalPrice>${total}.00</TotalPrice>
                        </TotalContainer>
                        <ButtonCancelContainer>
                            <CancelButton onClick={handleCancel}>CANCEL</CancelButton>
                        </ButtonCancelContainer>
                        <ButtonsContainer>
                            <ReturnButton to="/menu-page">RETURN</ReturnButton>
                            <ButtonNext onClick={()=>handleTabSwitch('Delivery')}><span className="mr-1">Next</span></ButtonNext>
                        </ButtonsContainer>
                    </div>
                    : currentTab === 'Delivery' ?
                            <div>
                            {/* <AddressForm onTabSwitch={handleTabSwitch}/> */}
                            <DropOffSelectionContainer>
                                <DropOffLabel for="dropoff">Selecciona la ubicacion donde quieres que llegue tu paquete.*</DropOffLabel>
                                <DropOffSelect id="dropoff" name="dropoffList">
                                    <DropOffOption value="CEDES">CEDES</DropOffOption>
                                    <DropOffOption value="Choza">Choza</DropOffOption>
                                    <DropOffOption value="CIAP">CIAP</DropOffOption>
                                    <DropOffOption value="FEMSA">FEMSA</DropOffOption>
                                    <DropOffOption value="A1">Aulas 1</DropOffOption>
                                    <DropOffOption value="Arte">Arte y Diseno</DropOffOption>
                                    <DropOffOption value="Rectoria">Rectoria</DropOffOption>
                                    <DropOffOption value="Pabellon">Pabellon</DropOffOption>
                                    <DropOffOption value="A6">Aulas 6</DropOffOption>
                                    <DropOffOption value="A9">Aulas 9</DropOffOption>
                                    <DropOffOption value="A3">Aulas 3</DropOffOption>
                                    <DropOffOption value="CETEC">CETEC</DropOffOption>
                                    <DropOffOption value="Biblio">Biblio</DropOffOption>
                                    <DropOffOption value="A3">Aulas 3</DropOffOption>
                                    <DropOffOption value="A4">Aulas 4</DropOffOption>
                                    <DropOffOption value="A7">Aulas 7</DropOffOption>
                                    <DropOffOption value="Congresos">Centro de Congresos</DropOffOption>
                                </DropOffSelect>
                                <DropOffLabel for="specifications">Para detalles de la entrega:</DropOffLabel>
                                <textarea className="form-message" id="specifications" rows="2" placeholder="Especifica salon o ubicacion donde se hara la entrega." name="message"/>
                            </DropOffSelectionContainer>
                            <ButtonsContainer>
                                <ReturnButton to="/menu-page">RETURN</ReturnButton>
                                <ButtonNext onClick={()=>handleTabSwitch('Payment')}><span className="mr-1">Next</span></ButtonNext>
                            </ButtonsContainer>
                        </div>
                    :
                    <div>
                        {/* <CheckoutForm /> */}
                        <CardDetailsContainer>
                            <VisaIcon src={visa}/>
                            <MasterCardIcon src={mastercard}/>
                            <AmericanxpressIcon src={americanexpress}/>
                        </CardDetailsContainer>
                        <PaymentInformationContainer>
                            {/* <input type='number' /> */}
                            <CardNumberLabel>Numero de Tarjeta</CardNumberLabel>
                            <CardNumberInput type='number' placeholder='1234 5678 9012 3456'/>
                            {/* <CardNumberTextArea /CardNumberTextArea> */}
                            <CardNameLabel>Nombre de Titular</CardNameLabel>
                            <CardNameInput placeholder='Nombre Completo'/>
                            <CardDateCCVContainer className="dateCCV">
                                <CardDateContainer className='dateContainer'>
                                    <CardDateLabel className='date'>Fecha de Expiracion</CardDateLabel>
                                    <CardInputDateContainer>
                                        <CardDateMonthInput className='dateMonth' type='number' placeholder='00'/>
                                        <CardinDateLabel className='date'>/</CardinDateLabel>
                                        <CardDateYearInput className='dateYear' type='number' placeholder='00'/>
                                    </CardInputDateContainer>
                                </CardDateContainer>
                                <CardCCVContainer className='CCVContainer'>
                                    <CardCCVLabel>CCV</CardCCVLabel>
                                    <CardCCVInput className='ccv' type='number' placeholder='123'/>
                                </CardCCVContainer>
                            </CardDateCCVContainer>
                        </PaymentInformationContainer>
                        <ButtonProceedPayment onClick={handleSubmit}>PAY NOW</ButtonProceedPayment>
                    </div>
                }
            </ReciptContainer>
            <BckGrndContainer/>
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
    @media screen and (min-width: 700px){
        backdrop-filter: blur(100px);
    }
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
    @media screen and (max-width: 700px){
        width: 100%;
    }
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
    @media screen and (max-width: 700px){
        display: none;
    }
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
    @media screen and (max-width: 700px){
        width: 100px;
    }
`

const TotalContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    margin-top: 20px;
    margin-bottom: 5px;
    display: flex;
    justify-content: right;
    align-items: center;

    /* Color, Background & Text */
    font-size: 2.1rem;
    font-weight: 600;

    /* Animations and Other */
`

const Bar = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 90%;
    height: 2px;
    margin-left: auto;
    margin-right: auto;

    /* Color, Background & Text */
    background-color: ${({ theme }) => theme.color5};

    /* Animations and Other */
`

const CartIcon = styled(FaShoppingCart)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-right: 10px;

    /* Color, Background & Text */
    font-size: 40px;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        padding-right: 2px;
    }
`

const TotalText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    display: flex;
    align-items: end;

    /* Color, Background & Text */
    font-size: 1.5rem;
    text-align: right;

    /* Animations and Other */
`

const TotalPrice = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-right: 3%;

    /* Color, Background & Text */
    font-size: 2.1rem;
    text-align: right;

    /* Animations and Other */
`

const DropOffSelectionContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;

    /* Color, Background & Text */

    /* Animations and Other */
    label {
        margin-bottom: 10px;
    }
    input, textarea {
        width: 70%;
        box-sizing: border-box;
        padding: 2%;
        border: 1px solid ${({ theme }) => theme.text};
        border-radius: 6px;

        background-color:  ${({ theme }) => theme.lightColor2};
        color: ${({ theme }) => theme.darkColor2};
        font-weight: bold;

        ::placeholder { /* works for Chrome, Safaru, Opera, Firefox*/
            color: ${({ theme }) => theme.darkColor2};
            opacity: 1; /* for Firefox */
        }
    }

    .form-message {
        margin-bottom: 45px;
    }
`

const DropOffLabel = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;

    /* Color, Background & Text */
    font-size: 1.5rem;

    /* Animations and Other */
`

const DropOffSelect = styled.select`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 40%;
    height: 100px;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.color5};
    //-webkit-appearance: none;
    
    /* Color, Background & Text */
    background-color: ${({ theme }) => theme.lightColor2};
    color: ${({ theme }) => theme.darkColor2};
    font-size: 1.5rem;
    font-weight: 600;

    /* Animations and Other */
    :active,  :focus {
        border: 2px solid ${({ theme }) => theme.color1};
        background-color: ${({ theme }) => theme.lightColor1};
    }
`

const DropOffOption = styled.option`
    /* Positioning */

    /* Display & Box Model | Sizing */
    
    /* Color, Background & Text */
    font-size: 1rem;
    text-align: center;
    overflow: scroll;

    /* Animations and Other */
`

const SpecifiedLocation = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    
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
    @media screen and (max-width: 700px){
        width: 100px;
    }
`

const ButtonCancelContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    margin-bottom: 50px;
    margin-right: 3%;
    justify-content: right;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const CancelButton = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 90%;
    height: 50%;
    max-width: 180px;
    max-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 600;
    //margin-bottom: 60px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.cancelColor};
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${({ theme }) => theme.activeCancelColor};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 0.2rem ${({ theme }) => theme.color9});
    }

    @media screen and (max-width: 700px){
        height: 30px;
    }
`

const ButtonProceedPayment = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 150px;
    height: 30px;

    // /* Color, Background & Text */
    // background-color: ${({ theme }) => theme.color3}

    // /* Animations and Other */
    // &:hover{
    //     color: ${({ theme }) => theme.color2};
    //     transition: 0.2s ease-in-out;
    //     filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
    //     filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    // }

    background: ${({ theme }) => theme.color3};
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${({ theme }) => theme.color2};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.color9});
    }
`

const CardDetailsContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //display: 50%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;

    /* Color, Background & Text */

    /* Animations and Other */
`

const VisaIcon = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 60px;
    margin-top: 20px;
    margin-bottom: 20px;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

const MasterCardIcon = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100px;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 50px;
    }
`

const AmericanxpressIcon = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100px;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 50px;
    }
`

const PaymentInformationContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-bottom: 30px;

    /* Color, Background & Text */

    /* Animations and Other */
    label {
        margin-bottom: 10px;
        width: 100%;
    }

    input, textarea {
        width: 60%;
        box-sizing: border-box;
        padding: 2%;
        border: 1px solid ${({ theme }) => theme.text};
        border-radius: 6px;
        margin-bottom: 10px;

        background-color:  ${({ theme }) => theme.lightColor2};
        color: ${({ theme }) => theme.darkColor2};
        font-weight: bold;
        text-align: center;

        ::placeholder { /* works for Chrome, Safaru, Opera, Firefox*/
            color: ${({ theme }) => theme.darkColor2};
            opacity: 1; /* for Firefox */
        }
    }

    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    div.dateCCV {
        display: flex;
    }

    div.dateContainer {
        width: 55%;
        margin-left: 20%;
    }

    input.dateMonth {
        width: 45%;
        text-align: right;

        padding: 0;
        border: 0px;
        border-radius: 0;
        margin-bottom: 0;

        background-color: transparent;
    }
    input.dateMonth:active {
        border: none;
        outline: none;
    }
    input.dateMonth:focus {
        border: none;
        outline: none;
    }

    input.dateYear {
        width: 45%;
        text-align: left;

        padding: 0;
        border: none;
        border-radius: none;
        margin-bottom: 0;

        background-color: transparent;
    }
    input.dateYear:active {
        border: none;
        outline: none;
    }
    input.dateYear:focus {
        border: none;
        outline: none;
    }

    div.CCVContainer {
        width: 45%;
        margin-right: 20%;
    }

    @media screen and (max-width: 320px){
        margin-left: 10px;
        margin-right: 10px;

        input, textarea {
            width: 100%;
            box-sizing: border-box;
            padding: 2%;
            border: 1px solid ${({ theme }) => theme.text};
            border-radius: 6px;
            margin-bottom: 10px;
    
            background-color:  ${({ theme }) => theme.lightColor2};
            color: ${({ theme }) => theme.darkColor2};
            font-weight: bold;
            text-align: center;
    
            ::placeholder { /* works for Chrome, Safaru, Opera, Firefox*/
                color: ${({ theme }) => theme.darkColor2};
                opacity: 1; /* for Firefox */
            }
        }
    
        input::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }
    
        div.dateCCV {
            display: flex;
        }
    
        div.dateContainer {
            width: 55%;
            margin-left: 0;
        }
    
        input.dateMonth {
            width: 45%;
            text-align: right;
    
            padding: 0;
            border: 0px;
            border-radius: 0;
            margin-bottom: 0;
    
            background-color: transparent;
        }
        input.dateMonth:active {
            border: none;
            outline: none;
        }
        input.dateMonth:focus {
            border: none;
            outline: none;
        }
    
        input.dateYear {
            width: 45%;
            text-align: left;
    
            padding: 0;
            border: none;
            border-radius: none;
    
            background-color: transparent;
        }
        input.dateYear:active {
            border: none;
            outline: none;
        }
        input.dateYear:focus {
            border: none;
            outline: none;
        }
    
        div.CCVContainer {
            width: 45%;
            margin-right: 0;
        }
    }
`

const CardNumberLabel = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    margin-bottom: 2px;

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardNumberInput = styled.input`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardNameLabel = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    margin-bottom: 2px;

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardNameInput = styled.input`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardDateCCVContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardDateContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 70;

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardDateLabel = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardInputDateContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding: 2%;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 6px;

    /* Color, Background & Text */
    background-color:  ${({ theme }) => theme.lightColor2};
    // color: ${({ theme }) => theme.darkColor2};

    /* Animations and Other */
`

const CardDateMonthInput = styled.input`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardinDateLabel = styled.label`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardDateYearInput = styled.input`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardCCVContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 30;

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardCCVLabel = styled.div``

const CardCCVInput = styled.input``