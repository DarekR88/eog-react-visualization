import { createSlice } from 'redux-starter-kit';

const initialState = {
  injValveData: []
};

const slice = createSlice({
  name: 'injValveData',
  initialState,
  reducers: {
    injValveData: (state, action) => {
      state.injValveData = [...state.injValveData, action.payload]
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
