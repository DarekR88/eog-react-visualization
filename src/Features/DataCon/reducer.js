import { createSlice } from 'redux-starter-kit';

const initialState = {
  chartData: [
    {
      metric: 'injValveOpen',
      measurements: [],
    },
    {
      metric: 'oilTemp',
      measurements: [],
    },
    {
      metric: 'tubingPressure',
      measurements: [],
    },
    {
      metric: 'flareTemp',
      measurements: [],
    },
    {
      metric: 'casingPressure',
      measurements: [],
    },
    {
      metric: 'waterTemp',
      measurements: [],
    },
  ],
};

const slice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    chartData: (state, action) => {
      state.chartData = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
