import React, { forwardRef, useState, useEffect } from 'react';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import ShakeShackImg from '../imgs/shakeshack.png';

import ClascBrger from '../imgs/clasica.png';

import { AddRestaurants } from './AddRestaurants.jsx';

const HomeRestaurantCard = ({ restaurant, onAddRestaurant }) => {

    const addRestaurant = () => {
        onAddRestaurant(restaurant)
    }

    //console.log(restaurant)

    return (
        <Card>
            <CardImg>
                <Image src={restaurant.Logo}/>
            </CardImg>
            <CardInfo>
                <CardTitle>{restaurant.Title}</CardTitle>
                <CardDesc>
                    <CardTexts>
                        <CardDescText>{restaurant.Description}</CardDescText>
                        <CardTimeContainer>
                            <CardTextTime>Tiempo estimado de espera:</CardTextTime>
                            <CardTime>{restaurant.WaitTime} min</CardTime>
                        </CardTimeContainer>
                    </CardTexts>
                    <BtnContainer>
                        <AddRestaurants onAddRestaurant={addRestaurant}/>
                    </BtnContainer>
                </CardDesc>
            </CardInfo>
        </Card>
    )
}

export default HomeRestaurantCard

const Card = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 70%;
    min-width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    border-radius: 30px;
    margin: 2%;
    //max-margin: 5px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.body};
    filter: drop-shadow(0 10px 1rem ${({ theme }) => theme.color9});            /* FF~35 */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 80%;
        height: 100px;
        margin: 8%;
        min-width: 300px;
    }
`

const CardImg = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    max-width: 135px;
    max-height: 135px;
    

    /* Color, Background & Text */
    //background: url(${ShakeShackImg}) center center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 5%;
    margin-right: 5%;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        transition: 0.2s ease-out;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.color9});            /* FF~35 */
        filter: drop-shadow(0 0 0 0.5rem ${({ theme }) => theme.color9});            /* MDN */
    }
`

const Image = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 100%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardInfo = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: 100%;
    width: 100%;

    /* Color, Background & Text */
    //text-overflow: ellipsis;

    /* Animations and Other */
`

const CardTitle = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    height: 40%;
    vertical-align: middle;
    align-items: center;
    padding-left: 5%;

    /* Color, Background & Text */
    // background: red;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 55%;
        font-size: 1.3rem;
        border-radius: 30px;
        overflow: clip;
    }
`

const CardDesc = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 100%;
    height: 60%;

    /* Color, Background & Text */
    //background: red;
    font-size: 1rem;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 45%;
    }
`

const CardTexts = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //display: flex;
    width: 70%;
    height: 100%;

    /* Color, Background & Text */
    text-overflow: ellipsis;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        display: none;
    }
`

const CardDescText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //display: inline-block;
    width: 100%;
    height: 60%;

    /* Color, Background & Text */
    text-overflow: ellipsis;
    overflow: clip;

    /* Animations and Other */
`

const CardTimeContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40%;

    /* Color, Background & Text */
    font-weight: 550;

    /* Animations and Other */
`

const CardTextTime = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardTime = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
`

const BtnContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 30%;
    height: 100%;
    display: flex;
    text-align: center;
    vertical-align: center;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 80%;
        height: 100%;
    }
`