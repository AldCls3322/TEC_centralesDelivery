import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurantInfo: []
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        selectRestaurant: (state, action) => {
            return { restaurantInfo: [{...action.payload}]}
        },
        clearRestaurant: (state) => {
            return { restaurantInfo: []}
        }
    }
})

export const restaurantInformation = state => state.restaurant.restaurantInfo

export const {  selectRestaurant, clearRestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer