import { createSlice } from 'redux-starter-kit';
import { cloneDeep } from 'lodash';

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
    updateData: (state, action) => {
      const tempData = cloneDeep(state.multipleData);
      const newMeasurement = action.payload;

      // tempData.map((item, i) => {
      //   if (item.metric === newMeasurement.metric) {
      //     tempData[i].measurements.push(newMeasurement);
      //   }
      // });

      // state.multipleData = state.multipleData.map((item, i) => {
      //   if (item.metric === newMeasurement.metric) {
      //     state.multipleData[i].measurements.push(newMeasurement);
      //   }
      // });
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
