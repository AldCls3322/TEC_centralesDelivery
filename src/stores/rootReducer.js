import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import restaurantReducer from "./restaurant/restaurantSlice";
// import addressReducer from "./userInfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        restaurant: restaurantReducer
        // address: addressReducer
    }
);

export default rootReducer;