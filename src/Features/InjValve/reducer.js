import { createSlice } from 'redux-starter-kit';

const initialState = {
  injValveData: {
    metric: 'injValveOpen',
    at: 1575484551903,
    value: 80.56,
    unit: '%',
  },
};

const slice = createSlice({
  name: 'injValveData',
  initialState,
  reducers: {
    injValveData: (state, action) => {
      state.injValveData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
