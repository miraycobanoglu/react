import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.value = [...state.value, action.payload]
    },
  },
})


// Action creators are generated for each case reducer function
export const { createDataFunc } = dataSlice.actions

export default dataSlice.reducer