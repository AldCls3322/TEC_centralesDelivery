import React from 'react';
import styled from 'styled-components';
import CentralesImg from '../imgs/centrales02.jpg';

import HomeScreenBckgrnd from './HomeScreenBckgrnd';

const HomeTitle = ({goToSushiSection}) => {
    // let { extraImagesID } = useParams();
    // const [ extraImages, setExtraImages ] = useState([]);
    // const getExtraImages = () => {
    //     database.collection('menuFeatures')
    //     .doc('h9ced4u4qRMwCvsDyni9')
    //     .onSnapshot((snapshot) => {
    //         let ImgTitle = snapshot.docs[0][1];
    //     })
    // }
    // useEffect(() => {
    //     getExtraImages();
    // }, ['h9ced4u4qRMwCvsDyni9'])
    
    
    // const [ImgTitle, setImgTitle] = useState()
    // useEffect(() => {
    //     var docRef = database.collection('menuFeatures').doc('h9ced4u4qRMwCvsDyni9');
    //     docRef.get().then((doc) => {
    //         if (doc.exists) {
    //             console.log("Document data:", doc.data());
    //             var Img = doc.data().url;
    //             console.log(Img);
    //             setImgTitle(Img);
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }).catch((error) => {
    //         console.log("Error getting document:", error);
    //     });
    // }, ['menuFeatures'])

    return (
        <Container>
            <BckgrndImg />
            <Items>
                <Title>RAPPI CENTRALES</Title>
                <TextP>Obten tu servicio de comida o salud, de manera comoda</TextP>
                <OrderButton onClick={goToSushiSection}>Realiza tu pedido</OrderButton>
            </Items>
        </Container>
    )
}

export default HomeTitle

const Container = styled.div`
    /* Positioning */
    z-index: 9;

    /* Display & Box Model | Sizing */
    height: 100vh;
    width: 100%;

    /* Color, Background & Text */
    background-color: transparent;;

    /* Animations and Other */
`

const Items = styled.div`
    /* Positioning */
    position: absolute;
    z-index: 9;
    
    /* Display & Box Model | Sizing */
    display: flex;
    height: 100vh;
    max-height: 100%;
    width: 650px;
    padding: 0 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1;

    /* Color, Background & Text */
    color: #000000;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;

    /* Animations and Other */
    filter: none;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

const Title = styled.div`
    /* Positioning */
    
    /* Display & Box Model | Sizing */
    margin-bottom: 1rem;
    box-shadow: 3px 5px #004B93;

    /* Color, Background & Text */
    font-size: clamp(2.5rem, 10vw, 5rem);
    letter-spacing: 3px;

    /* Animations and Other */
`

const TextP = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    margin-bottom: 2rem;

    /* Color, Background & Text */
    font-size: clamp(2rem, 2.5vw, 3rem);
    font-family: roboto;

    /* Animations and Other */
`
const OrderButton = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    padding: 1rem 4rem;
    border: none;

    /* Color, Background & Text */
    background: #004B93; //#2b9348;
    color: #fff;
    font-size: 1.4rem;
    font-family: roboto;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: #2196F3; // #BFD200; // #80b918;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #24272B;
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem white);            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem white);            /* MDN */
    }
`

const BckgrndImg = styled.div`
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