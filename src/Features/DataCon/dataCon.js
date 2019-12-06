import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { actions } from './reducer';
import { actions } from '../MultipleMetrics/sliceReducer';

export default () => {
  return <DataCon />;
};

const DataCon = () => {
  const dispatch = useDispatch();
  // const multiData = useSelector(state => state.multipleData.multipleData);
  const injValveData = useSelector(state => state.injValve.injValveData);
  const oilTempData = useSelector(state => state.oilTemp.oilTempData);
  const flareTempData = useSelector(state => state.flareTemp.flareTempData);
  const waterTempData = useSelector(state => state.waterTemp.waterTempData);
  const casingPressureData = useSelector(state => state.casingPressure.casingPressureData);
  const tubingPressureData = useSelector(state => state.tubingPressure.tubingPressureData);

  // useEffect(() => {
  //   let chartData = JSON.parse(JSON.stringify(multiData));
  //   if (chartData.length > 0) {
  //     for (let i = 0; i < chartData.length; i++) {
  //       if (chartData[i].metric === 'injValveOpen') {
  //         let modData = JSON.parse(JSON.stringify(chartData));
  //         modData[i].measurements.push(injValveData);
  //         dispatch(actions.multipleData(modData));
  //       } else if (chartData[i].metric === 'flareTemp') {
  //         let modData = JSON.parse(JSON.stringify(chartData));
  //         modData[i].measurements.push(flareTempData);
  //         dispatch(actions.multipleData(modData));
  //       } else if (chartData[i].metric === 'waterTemp') {
  //         let modData = JSON.parse(JSON.stringify(chartData));
  //         modData[i].measurements.push(waterTempData);
  //         dispatch(actions.multipleData(modData));
  //       } else if (chartData[i].metric === 'oilTemp') {
  //         let modData = JSON.parse(JSON.stringify(chartData));
  //         modData[i].measurements.push(oilTempData);
  //         dispatch(actions.multipleData(modData));
  //       } else if (chartData[i].metric === 'casingPressure') {
  //         let modData = JSON.parse(JSON.stringify(chartData));
  //         modData[i].measurements.push(casingPressureData);
  //         dispatch(actions.multipleData(modData));
  //       } else if (chartData[i].metric === 'tubingPressure') {
  //         let modData = JSON.parse(JSON.stringify(chartData));
  //         modData[i].measurements.push(tubingPressureData);
  //         dispatch(actions.multipleData(modData));
  //       }
  //     }
  //   }
  // }, [injValveData, waterTempData, flareTempData, casingPressureData, tubingPressureData, oilTempData]);

  return null;
};
