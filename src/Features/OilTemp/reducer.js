import { createSlice } from 'redux-starter-kit';

const initialState = {
  oilTempData: {
    metric: 'oilTemp',
    at: 1575484869457,
    value: 121.74,
    unit: 'F',
  },
};

const slice = createSlice({
  name: 'oilTempData',
  initialState,
  reducers: {
    oilTempData: (state, action) => {
      state.oilTempData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
