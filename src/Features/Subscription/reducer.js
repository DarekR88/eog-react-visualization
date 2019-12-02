import { createSlice } from 'redux-starter-kit';

const initialState = {
  subData: {},
};

const slice = createSlice({
  name: 'subscriptionData',
  initialState,
  reducers: {
    subData: (state, action) => {
      state.subData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
