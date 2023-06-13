import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';
import { useDispatch, useSelector  } from 'react-redux';
import { addToCart } from '../stores/cart/cartSlice';
import { restaurantInformation } from '../stores/restaurant/restaurantSlice';
import MenuProductsCard from './MenuProductsCard.jsx';

const MenuList = ({setRestaurantSelected}) => {
    const [products, setProducts] = useState([]);
    const restaurant = useSelector(restaurantInformation);
    //console.log(restaurant[0].Title)
    const dispatch = useDispatch();

    useEffect(() => {
        const db = collection(firestore, restaurant[0].Title)
        getDocs(db).then(response => {
            //console.log(response.docs)
            const prd = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setProducts(prd)
        }).catch(e => console.log(e.message))
            // .onSnapshot((snap) => { // use 'onSnapshot' to get all information of the firebase data in that instant, and repeates this function everytime the database data changes
            //     let document = []; // creates an array of objects that are our images images
            //     snap.forEach(doc => {
            //         document.push({...doc.data(), id: doc.id}) // adds the data and id of each image in the database and saves it on the previously created array called 'document'
            //     });
            //     setDocs(document); // places the document array onto the 'docs' created in line 5
            // });
    }, []) // the dependecies that changes are written inside the '[]', this case its 'collection'}

    const onAddProduct = (product) => {
        //console.log(product)
        dispatch(addToCart(product))
    }

    return (
        <Container>
            <SectionTitleCOntainer>
                <ShortBar/>
                <Title>FOOD</Title>
                <LongBar/>
            </SectionTitleCOntainer>
            {products && products.map( (product) => {
                return(
                    <MenuProductsCard key={product.id} product={product.data} onAddProduct={onAddProduct}/>
                );
            })}
        </Container>
    )
}

export default MenuList

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 100px;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;

    /* Color, Background & Text */

    /* Animations and Other */
`

const SectionTitleCOntainer = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;

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

    /* Display & Box Model | Sizing */
    padding-left: 1%;
    padding-right: 1%;

    /* Color, Background & Text */
    font-size: 3rem;
    font-weight: 600;
    font-family: serif, verdana;

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
