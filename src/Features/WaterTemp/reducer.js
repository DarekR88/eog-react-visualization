import { createSlice } from 'redux-starter-kit';

const initialState = {
  waterTempData: [],
};

const slice = createSlice({
  name: 'waterTempData',
  initialState,
  reducers: {
    waterTempData: (state, action) => {
      state.waterTempData = [...state.waterTempData, action.payload];
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
