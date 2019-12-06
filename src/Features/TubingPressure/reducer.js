import { createSlice } from 'redux-starter-kit';

const initialState = {
  tubingPressureData: [],
};

const slice = createSlice({
  name: 'tubingPressureData',
  initialState,
  reducers: {
    tubingPressureData: (state, action) => {
      state.tubingPressureData = [...state.tubingPressureData, action.payload];
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
