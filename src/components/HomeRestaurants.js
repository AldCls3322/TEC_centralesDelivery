import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import CentralesImg from '../imgs/centrales02.jpg';

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

import { useDispatch } from 'react-redux';
import { selectRestaurant } from '../stores/restaurant/restaurantSlice';
import HomeRestaurantCard from './HomeRestaurantCard';

const HomeRestaurants = ({}, ref) => {
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
    const dispatch = useDispatch();

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
            console.log(restaurants)
        }).catch(e => console.log(e.message))
            // .onSnapshot((snap) => { // use 'onSnapshot' to get all information of the firebase data in that instant, and repeates this function everytime the database data changes
            //     let document = []; // creates an array of objects that are our images images
            //     snap.forEach(doc => {
            //         document.push({...doc.data(), id: doc.id}) // adds the data and id of each image in the database and saves it on the previously created array called 'document'
            //     });
            //     setDocs(document); // places the document array onto the 'docs' created in line 5
            // });
    }, []) // the dependecies that changes are written inside the '[]', this case its 'collection'}
    
    const onAddRestaurant = (restaurant) => {
        console.log(restaurant)
        dispatch(selectRestaurant(restaurant))
    }

    return (
        <Container ref={ref}>
            <BckgrndImg />
            <Wrapper>
                {restaurants && restaurants.map( (restaurant) => {
                    return(
                        <HomeRestaurantCard key={restaurant.id} restaurant={restaurant.data} onAddRestaurant={onAddRestaurant}/>
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