import React, { forwardRef } from 'react'
import styled from 'styled-components'
import imageBiblio from '../imgs/biblioTec01.jpg'

function HomeAbout({}, ref) {
  return (
    <Container ref={ref}>
        <TitleContainer>
            <ShortBar/>
            <Title>ABOUT</Title>
            <LongBar/>
        </TitleContainer>
        <InfoSec>
            <InfoDesc>
                <InfoDescTitle>History</InfoDescTitle>
                <InfoDescText>Esta pagina web es parte de un proyecto inovativo que busca modernizar los servicios dentro del Tecnologico de Monterrey. Empezando con el campus de Monterrey, desaemos poder desarrollar un servicio de entregas para ser usados por estudiantes, profesores y personal del TEC. <br/> 
                <br/>
                Nuestro equipo se formo el 27 de Marzo del 2023. Con nuestro objetivo de dar un servicio de inclusion a personas con dificultados de movilidad dentro de nuestro campus. <br/>
                Vimos una gran oportunidad de crear una pagina web para entregar servicios de comida y salud que se ofrencen dentro del campus. <br/>
                No obstante, al poco tiempo optamos por abrir el servicio para cualquier estudiante, profesor y personal del TEC en el campus Monterrey.</InfoDescText>
            </InfoDesc>
            <InfoImage src={imageBiblio}/>
        </InfoSec>
    </Container>
  )
}

const forwardHomeAbout = forwardRef(HomeAbout)

export default forwardHomeAbout

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
        width: 10%;
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
    width: 80%;
    height: 5px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 50%;
    }
`

const InfoSec = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 90%;
    height: 80vh;
    margin: auto;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        display: block;
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

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        width: 100%;
    }
`

const InfoDescTitle = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding-top: 20px;
    padding-bottom: 20px;

    /* Color, Background & Text */
    font-size: 3rem;
    font-family: serif, Times;
    font-weight: 600;

    /* Animations and Other */
    @media screen and (max-width: 700px){
        font-size: 2rem;
    }
`

const InfoDescText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    font-family: Times;
    font-size: 1.5rem;
    text-align: justify;
    margin-right: 1%;

    /* Color, Background & Text */

    /* Animations and Other */
    @media screen and (max-width: 700px){
        height: 30vh;
        overflow: scroll;
        //text-overflow: ellipsis;
        font-size: 1.2rem;
        margin-bottom: 5%;
    }
`

const InfoImage = styled.img`
    /* Positioning */

    /* Display & Box Model | Sizing */
    height: auto;
    width: 50%;
    margin-left: 1%;
    object-fit: cover;
    box-shadow: 5px 10px ${({ theme }) => theme.color10};

    /* Color, Background & Text */

    /* Animations and Other */
`