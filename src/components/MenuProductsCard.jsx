import React from 'react';
import ClascBrger from '../imgs/clasica.png';
import styled from 'styled-components';
import { AddProducts } from "./AddProducts.jsx";

const MenuProductsCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <FoodCard>
            <FoodImgContainer>
                <FoodImgLimitCont>
                    <FoodImg src={product.img}/>
                </FoodImgLimitCont>
            </FoodImgContainer>
            <FoodDescContainer>
                <CardTitle>{product.name}</CardTitle>
                <CardTexts>
                    <CardDescText>{product.description}</CardDescText>
                </CardTexts>
            </FoodDescContainer>
            <BtnContainer>
                <CardPrice>${product.price}</CardPrice>
                <AddProducts onAddProduct={addProduct}/>
            </BtnContainer>
        </FoodCard>
    )
}

export default MenuProductsCard

const FoodCard = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 94%;
    height: 150px;
    padding-left: 2%;
    padding-right: 2%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.color5};
    box-shadow: 0 8px 9px -2px ${({ theme }) => theme.color9};

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: auto;
    }
`

const FoodImgContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 10%;
    height: 150px;
    justify-content: right;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 70px;
        height: 70px;
    }
`

const FoodImgLimitCont = styled.div`    
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 150px;
    height: 150px;
    max-width: 100%;
    max-height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
    }
`

const FoodImg = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 100%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const FoodDescContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 70%;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        max-width: 60%;
    }
`

const CardTitle = styled.div`
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
        overflow: scroll;
        font-size: 1.2rem;
    }
`

const CardTexts = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //display: flex;
    width: 100%;
    height: 70%;

    /* Color, Background & Text */
    font-size: 1rem;

    /* Animations and Other */
`

const CardDescText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    padding-left: 2%;
    width: 100%;
    height: 100%;
    justify-content: left;
    //align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        overflow: scroll;
        font-size: 0.9rem;
    }
`

const BtnContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 20%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    vertical-align: center;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 30%;
        font-size: 0.7rem;
    }
`

const CardPrice = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //display: flex;
    width: 100%;
    //padding-bottom: 20px;

    /* Color, Background & Text */
    font-size: 1.5rem;
    font-weight: 600;

    /* Animations and Other */
`