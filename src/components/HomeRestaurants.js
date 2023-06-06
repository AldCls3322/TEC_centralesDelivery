import React, { forwardRef, useState, useEffect } from 'react';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import CentralesImg from '../imgs/centrales02.jpg';
import ShakeShackImg from '../imgs/shakeshack.png';

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

import HomeScreenBckgrnd from './HomeScreenBckgrnd';

const HomeRestaurants = ({setRestaurantSelected}, ref) => {
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

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        console.log(restaurants)
    }, [restaurants])

    useEffect(() => {
        const db = collection(firestore, "restaurantes")
        getDocs(db).then(response => {
            //console.log(response.docs)
            const rstau = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setRestaurants(rstau)
        }).catch(e => console.log(e.message))
            // .onSnapshot((snap) => { // use 'onSnapshot' to get all information of the firebase data in that instant, and repeates this function everytime the database data changes
            //     let document = []; // creates an array of objects that are our images images
            //     snap.forEach(doc => {
            //         document.push({...doc.data(), id: doc.id}) // adds the data and id of each image in the database and saves it on the previously created array called 'document'
            //     });
            //     setDocs(document); // places the document array onto the 'docs' created in line 5
            // });
    }, []) // the dependecies that changes are written inside the '[]', this case its 'collection'}

    // setRestaurantSelected = () => ({
    //     this.state.data = 
    // })

    return (
        <Container ref={ref}>
            <BckgrndImg />
            <Wrapper>
                {restaurants && restaurants.map( (restaurant) => {
                    return(
                        <Card key={restaurant.id}>
                            <CardImg>
                                <Image src={restaurant.data.Logo}/>
                            </CardImg>
                            <CardInfo>
                                <CardTitle>{restaurant.data.Title}</CardTitle>
                                <CardDesc>
                                    <CardTexts>
                                        <CardDescText>{restaurant.data.Description}</CardDescText>
                                        <CardTimeContainer>
                                            <CardTextTime>Tiempo estimado de espera:</CardTextTime>
                                            <CardTime>{restaurant.data.WaitTime} min</CardTime>
                                        </CardTimeContainer>
                                    </CardTexts>
                                    <BtnContainer>
                                        <BtnMenu onClick={setRestaurantSelected} to='/menu-page'>ORDENAR</BtnMenu>
                                    </BtnContainer>
                                </CardDesc>
                            </CardInfo>
                        </Card>
                    );
                })}
            </Wrapper>
        </Container>
    )
}

const forwardHomeRestaurants = forwardRef(HomeRestaurants)

export default forwardHomeRestaurants

const Container = styled.div`
    /* Positioning */
    //position: absolute;
    z-index: 8;
    overflow-y: scroll;

    /* Display & Box Model | Sizing */
    min-height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Color, Background & Text */
    background-color: transparent;

    /* Animations and Other */
`

const Wrapper = styled.div`
    /* Positioning */
    //position: absolute;
    z-index: 9;
    
    /* Display & Box Model | Sizing */
    display: flex;
    height: 100vh;
    max-height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 1;
    flex-wrap: wrap;

    /* Color, Background & Text */
    color: ${({ theme }) => theme.text};
    text-align: left;
    
    /* Animations and Other */
    filter: none;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

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

    /* Animations and Other */
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
`

const CardTexts = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    //display: flex;
    width: 70%;
    height: 100%;

    /* Color, Background & Text */

    /* Animations and Other */
`

const CardDescText = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 100%;
    height: 60%;

    /* Color, Background & Text */

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
`

const BtnMenu = styled(Link)`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 90%;
    height: 50%;
    max-width: 180px;
    max-height: 40px;
    display: flex;
    text-align: center;
    vertical-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 600;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color3};
    color: ${({ theme }) => theme.body};
    text-decoration: none;

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${({ theme }) => theme.color2};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.color9});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.color9});            /* MDN */
    }
`

const BckgrndImg = styled.div`
    /* Positioning */
    position: absolute;
    top: 10vh;
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