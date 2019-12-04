import { createSlice } from 'redux-starter-kit';

const initialState = {
  waterTempData: {
    metric: 'waterTemp',
    at: 1575484818695,
    value: 83.94,
    unit: 'F',
  },
};

const slice = createSlice({
  name: 'waterTempData',
  initialState,
  reducers: {
    waterTempData: (state, action) => {
      state.waterTempData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
