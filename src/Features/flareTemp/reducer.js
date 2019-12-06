import { createSlice } from 'redux-starter-kit';

const initialState = {
  flareTempData: [],
};

const slice = createSlice({
  name: 'flareTempData',
  initialState,
  reducers: {
    flareTempData: (state, action) => {
      state.flareTempData = [...state.flareTempData, action.payload];
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
