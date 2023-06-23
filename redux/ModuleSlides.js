import { createSlice } from '@reduxjs/toolkit'

const initialState = {
signupModelOpen: false
}

const ModuleSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
        state.signupModalOpen = true
    },

    closeSignupModal: (state) => {
        state.signupModalOpen = false
    }
  }
});

export const {openSignupModal, closeSignupModal} = ModuleSlides.actions

export default ModuleSlice.reducer