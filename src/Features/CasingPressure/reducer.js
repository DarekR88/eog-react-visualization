import { createSlice } from 'redux-starter-kit';

const initialState = {
  casingPressureData: {
    metric: 'casingPressure',
    at: 1575484738018,
    value: 406.84,
    unit: 'PSI',
  },
};

const slice = createSlice({
  name: 'casingPressureData',
  initialState,
  reducers: {
    casingPressureData: (state, action) => {
      state.casingPressureData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
