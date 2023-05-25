import React from 'react'
import styled from 'styled-components'

function HomeAbout() {
  return (
    <Container>
        <TitleContainer>
            <ShortBar/>
            <Title>ABOUT</Title>
            <LongBar/>
        </TitleContainer>
        <InfoCard></InfoCard>
    </Container>
  )
}

export default HomeAbout

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    width: 100%;
    height: 100vh;
    text-align: left;

    /* Color, Background & Text */

    /* Animations and Other */
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
`

const LongBar = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 80%;
    height: 5px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color5};

    /* Animations and Other */
`

const InfoCard = styled.div`
`