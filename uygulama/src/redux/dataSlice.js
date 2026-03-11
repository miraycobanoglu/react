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
    deleteDataFunc: (state, action) => {
      state.value = state.value.filter(dt => dt.id !== action.payload)
    },
  },
})


// Action creators are generated for each case reducer function
export const { createDataFunc , deleteDataFunc} = dataSlice.actions

export default dataSlice.reducer