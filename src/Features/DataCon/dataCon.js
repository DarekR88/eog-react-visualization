import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducer';

export default () => {
  return <DataCon />;
};

const DataCon = () => {
  const newData = useSelector(state => state.subData.subData);
  const dataArray = useSelector(state => state.chartData.chartData);
  const dispatch = useDispatch();

  let dataArr = JSON.parse(JSON.stringify(dataArray));

  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i].metric === newData.metric) {
      dataArr[i].measurements.push(newData);
      dispatch(actions.chartData(dataArr));
    }
  }

  return null;
};
