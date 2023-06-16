import styled from "styled-components";
import { useDispatch } from "react-redux";
import {incrementProductAmount, decrementProductAmount } from "../stores/cart/cartSlice";
import ClascBrger from '../imgs/clasica.png';

export const ProductsSummaryCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <ProductImgContainer>
                <ProductImg src={product.img}/>
            </ProductImgContainer>
            <ProductInfoContainer>
                <ProductInfoTitle>{product.name}</ProductInfoTitle>
                <ProductInfoDescription>{product.description}</ProductInfoDescription>
            </ProductInfoContainer>
            <ProductPriceQtContainer>
                <Price>${product.price}.00</Price>
                <QuantityContainer>
                    <LowerQuantity disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))}>-</LowerQuantity>
                    <QuantityText>{product.amount}</QuantityText>
                    <IncreaseQuantiy  onClick={() => dispatch(incrementProductAmount(product))}>+</IncreaseQuantiy>
                </QuantityContainer>
            </ProductPriceQtContainer>
        </Container>
    )
}

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 94%;
    margin: 2%;

    /* Color, Background & Text */

    /* Animations and Other */
    //className="flex p-1 sm:p-2 border-b border-b-gray-200"
`

const ProductImgContainer = styled.div`
    //className="product-image mr-2 border border-grey-200 rounded-lg w-full sm:w-1/3"
    /* Positioning */

    /* Display & Box Model | Sizing */
    //width: 20%;
    //height: 20%;
    max-width: 20%;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 70px;
        height: 70px;
    }
`

const ProductImg = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 100%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const ProductInfoContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 80%;
    //justify-content: left;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        max-width: 60%;
    }
`

const ProductInfoTitle = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    height: 30%;
    vertical-align: middle;
    align-items: center;
    padding-left: 5%;

    /* Color, Background & Text */
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        padding-left: 0;
        height: 100%;
        overflow: scroll;
        font-size: 1.2rem;
    }
`

const ProductInfoDescription = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    padding-left: 2%;
    width: 100%;
    //height: 100%;
    justify-content: left;
    text-align: left;
    //align-items: top;

    /* Color, Background & Text */
    text-overflow: ellipsis;
    font-size: 1rem;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        display: none;  
    }
`

const ProductPriceQtContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 20%;
    display: block;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;

    /* Color, Background & Text */

    /* Animations and Other */
`

const Price = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 2.5rem;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 1.5rem;
    }
`

const QuantityContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    justify-content: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const LowerQuantity = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 35px;
    height: 25px;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.color5};
    //font-weight: 800;
    //font-size: 1.4rem;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${({ theme }) => theme.color2};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
    }
`

const QuantityText = styled.span`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 1.3rem;
    padding: 2%;

    /* Animations and Other */
`

const IncreaseQuantiy = styled.button`
/* Positioning */

/* Display & Box Model | Sizing */
width: 35px;
height: 25px;
margin-top: auto;
margin-bottom: auto;
text-align: center;

/* Color, Background & Text */
color: ${({ theme }) => theme.body};
background-color: ${({ theme }) => theme.color5};
//font-weight: 800;
//font-size: 1.4rem;

/* Animations and Other */
transition: 0.2s ease-out;
&:hover {
    background: ${({ theme }) => theme.color2};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: ${({ theme }) => theme.color7};
    transition: 0.2s ease-in-out;
}
`