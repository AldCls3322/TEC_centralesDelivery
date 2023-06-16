import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurantInfo: [{WaitTime:"10", Description: "Año con año se han convertido en parte del estilo de vida de muchas personas, ya que en OXXO se preocupan por brindar una amplia oferta de productos y servicios que les sean útiles y prácticos para su vida diaria.", Title:"OXXO", Logo:"https://tecfood.tec.mx/sites/g/files/vgjovo1061/files/styles/de2e/public/2022-01/MTY-oxxo-logo-0.jpg?itok=NdOFvzcM"}]
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