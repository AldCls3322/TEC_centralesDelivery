import React, { forwardRef } from 'react'
import styled from 'styled-components'
import imageBorrego from '../imgs/BorregoTec01.avif'
import {NavLink as Link} from 'react-router-dom';

function HomeVoluntariados({}, ref) {
  return (
    <Container ref={ref}>
        <TitleContainer>
            <ShortBar/>
            <Title>VOLUNTARIADOS</Title>
            <LongBar/>
        </TitleContainer>
        <InfoContainer>
            <InfoImage src={imageBorrego}/>
            <InfoDesc>
                <InfoDescTitle>Forma parte del Equipo</InfoDescTitle>
                <InfoDescText>Estamos en busqueda de personas dispuestas a apoyarnos con este proyecto. Requerimos de ideas inovativas y los invitamos a que se formar parte de futuros proyectos que estamos planeando.<br/> 
                <br/>
                En esta invitacion, tambien queremos decirles que pueden apoyarnos con el sistema de entregas y que estamos trabajando para que puedan acreditar horas de servicio social.<br/>
                No solo limitamos a estudiantes del campus de Motnerrey, queremos expandirnos y hacer este sistema util a todos los campus e instituciones educativas dentro de Mexico.<br/>
                <br/>
                Contactanos y muestranos tu interes:</InfoDescText>
                <ButtonContainer>
                    <BtnContacto to="/contact">CONTACT US</BtnContacto>
                </ButtonContainer>
            </InfoDesc>
        </InfoContainer>
    </Container>
  )
}

const forwardHomeVoluntariados = forwardRef(HomeVoluntariados)

export default forwardHomeVoluntariados

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: block;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: auto;
        // overflow: scroll;
    }
`

const TitleContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: center;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        margin-bottom: 10%;
    }
`

const ShortBar = styled.div`
    /* Positioning */
    padding-left: 0.5%;

    /* Display & Box Model | Sizing */
    width: 2.5%;
    height: 5px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 2%;
    }
`

const Title = styled.div`
    /* Positioning */
    padding-left: 1%;
    padding-right: 1%;

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 3rem;
    font-weight: 500;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 1.7rem;
        font-family: comfortaa;
    }
`

const LongBar = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 68%;
    height: 5px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 10%;
    }
`

const InfoContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 95%;
    height: 80vh;
    margin: auto;

    /* Color, Background & Text */
    //background-color: black;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        display: block;
        margin: 0;
    }
`

const InfoDesc = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 50%;
    height: auto;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 3%;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 100%;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 3%;
        margin-right: 0;
    }
`

const InfoDescTitle = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-top: 20px;
    padding-bottom: 20px;

    /* Color, Background & Text */
    font-size: 3rem;
    font-family: verdana, Sans-serif;
    font-weight: 600;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 2rem;
        text-align: center;
    }
`

const InfoDescText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    font-family: serif, Times;
    font-size: 1.5rem;
    text-align: justify;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        //height: 30vh;
        //overflow: scroll;
        //text-overflow: ellipsis;
        font-size: 1.2rem;
    }
`

const InfoImage = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: auto;
    width: 50%;
    margin-right: 1%;
    object-fit: cover;

    box-shadow: -3px 7px 10px 0px ${({ theme }) => theme.color10};
    -webkit-box-shadow: -3px 7px 10px 0px ${({ theme }) => theme.color10};
    -moz-box-shadow: -3px 7px 10px 0px ${({ theme }) => theme.color10};

    /* Color, Background & Text */

    /* Animations and Other */
`

const ButtonContainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const BtnContacto = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding: 1rem 4rem;
    border: none;

    /* Color, Background & Text */
    background: ${( { theme } ) => theme.color5};
    color: ${( { theme } ) => theme.body};
    font-size: 1.4rem;
    font-family: monospace;
    text-decoration: none;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${( { theme } ) => theme.body};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${( { theme } ) => theme.color5};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${( { theme } ) => theme.text});
    }
`