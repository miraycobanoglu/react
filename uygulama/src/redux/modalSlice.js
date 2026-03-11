import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalFunc: (state) => {
      state.value = !state.value
    },
  },
})


// Action creators are generated for each case reducer function
export const { modalFunc } = modalSlice.actions

export default modalSlice.reducer