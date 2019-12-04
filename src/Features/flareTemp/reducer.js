import { createSlice } from 'redux-starter-kit';

const initialState = {
  flareTempData: {
    metric: 'flareTemp',
    at: 1575484653431,
    value: 338.02,
    unit: 'F',
  },
};

const slice = createSlice({
  name: 'flareTempData',
  initialState,
  reducers: {
    flareTempData: (state, action) => {
      state.flareTempData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
