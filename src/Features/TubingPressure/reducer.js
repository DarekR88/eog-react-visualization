import { createSlice } from 'redux-starter-kit';

const initialState = {
  tubingPressureData: {
    metric: 'tubingPressure',
    at: 1575484929347,
    value: 437.29,
    unit: 'PSI',
  },
};

const slice = createSlice({
  name: 'tubingPressureData',
  initialState,
  reducers: {
    tubingPressureData: (state, action) => {
      state.tubingPressureData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
