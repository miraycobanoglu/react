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
    sortingDataFunc: (state, action) => {
      state.value = [...state.value.sort((a, b) => action.payload == "asc" ? a.price - b.price : action.payload == "desc" ? b.price - a.price : null)];
    },
    deleteDataFunc: (state, action) => {
      state.value = state.value.filter(dt => dt.id !== action.payload)
    },
    updateDataFunc: (state, action) => {
      state.value = state.value.map(dt => dt.id === action.payload.id ? {...dt, ...action.payload} : dt)
    },
  },
})


// Action creators are generated for each case reducer function
export const { createDataFunc , deleteDataFunc , updateDataFunc } = dataSlice.actions

export default dataSlice.reducer