import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from "../../firebase/Firebase";

const initialState = {
    products: [],
    error: null,
    status: 'idle',
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.products = [...action.payload.data]
        });
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending'
        })
    }
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    //const response = await fetch('http://localhost:8080/api/products-by-categories')

    const response = await fetch(collection(firestore, "AlsStar"))
        getDocs(db).then(response => {
            //console.log(response.docs)
            const rstau = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
        }).catch(e => console.log(e.message))
            // .onSnapshot((snap) => { // use 'onSnapshot' to get all information of the firebase data in that instant, and repeates this function everytime the database data changes
            //     let document = []; // creates an array of objects that are our images images
            //     snap.forEach(doc => {
            //         document.push({...doc.data(), id: doc.id}) // adds the data and id of each image in the database and saves it on the previously created array called 'document'
            //     });
            //     setDocs(document); // places the document array onto the 'docs' created in line 5
            // }); // the dependecies that changes are written inside the '[]', this case its 'collection'}

    const data = await response.json()
    return data
})

export const selectAllProducts = state => state.products