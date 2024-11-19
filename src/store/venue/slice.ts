import { createSlice } from "@reduxjs/toolkit";
import { MenuInterface, VenueResponse } from "../../components/pages/MenuPage/menu.schema";


interface VenueStateInterface {
    venue: VenueResponse | null,
    menu: MenuInterface | null
}
const initialState: VenueStateInterface = {
    venue: null,
    menu: null
}

const venueSlice = createSlice({
    name: "venue",
    initialState,
    reducers: {
        setVenue: (state, action) => {
            state.venue = action.payload
        },
        setMenu: (state, action) => {
            state.menu = action.payload
        }
    }
})

export const { setVenue, setMenu } = venueSlice.actions
export type { VenueStateInterface }
export default venueSlice.reducer