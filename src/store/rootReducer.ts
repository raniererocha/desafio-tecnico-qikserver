import {combineReducers} from '@reduxjs/toolkit'
import venueSlice from './venue/slice'
import cartSlice from './cart/slice'
import modalSlice from './modal/slice'
const rootReducer = combineReducers({
    venue: venueSlice,
    cart: cartSlice,
    modal: modalSlice
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer