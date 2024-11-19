import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MenuItem } from "../../components/pages/MenuPage/menu.schema"

export interface ModalStateInterface {
    isOpen: boolean
    data: MenuItem | null
}

const initialState: ModalStateInterface = {
    isOpen: false,
    data: null
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<ModalStateInterface>) {
            state.isOpen = true
            state.data = action.payload.data
        },
        closeModal(state) {
            state.isOpen = false
            state.data = null
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer