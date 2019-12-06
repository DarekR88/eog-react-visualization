import { createSlice } from 'redux-starter-kit';

const initialState = {
  casingPressureData: [],
};

const slice = createSlice({
  name: 'casingPressureData',
  initialState,
  reducers: {
    casingPressureData: (state, action) => {
      state.casingPressureData = [...state.casingPressureData, action.payload];
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
