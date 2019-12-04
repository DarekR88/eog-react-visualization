import { createSlice } from 'redux-starter-kit';

const initialState = {
  multipleData: [],
};

const slice = createSlice({
  name: 'multiData',
  initialState,
  reducers: {
    multipleData: (state, action) => {
      state.multipleData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
