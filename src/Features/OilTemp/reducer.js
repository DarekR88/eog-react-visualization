import { createSlice } from 'redux-starter-kit';

const initialState = {
  oilTempData: [],
};

const slice = createSlice({
  name: 'oilTempData',
  initialState,
  reducers: {
    oilTempData: (state, action) => {
      state.oilTempData = [...state.oilTempData, action.payload];
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
