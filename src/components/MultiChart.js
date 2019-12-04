import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
// import { actions } from '../Features/DataCon/reducer'
import { actions } from '../Features/MultipleMetrics/sliceReducer';

export default function MultiChart() {
  const multiData = useSelector(state => state.multipleData.multipleData);
  const dispatch = useDispatch();
  const injValveData = useSelector(state => state.injValve.injValveData);
  const oilTempData = useSelector(state => state.oilTemp.oilTempData);
  const flareTempData = useSelector(state => state.flareTemp.flareTempData);
  const waterTempData = useSelector(state => state.waterTemp.waterTempData);
  const casingPressureData = useSelector(state => state.casingPressure.casingPressureData);
  const tubingPressureData = useSelector(state => state.tubingPressure.tubingPressureData);
  // const displayData = useSelector(state => state.chartData.chartData);

  let chartData = JSON.parse(JSON.stringify(multiData));
  if (chartData.length > 0) {
    for (let i = 0; i < chartData.length; i++) {
      if (chartData[i].metric === 'injValveOpen') {
        chartData[i].measurements.shift();
        chartData[i].measurements.push(injValveData);
        // dispatch(actions.multipleData(chartData));
      } else if (chartData[i].metric === 'flareTemp') {
        chartData[i].measurements.shift();
        chartData[i].measurements.push(flareTempData);
        // dispatch(actions.multipleData(chartData));
      } else if (chartData[i].metric === 'waterTemp') {
        chartData[i].measurements.shift();
        chartData[i].measurements.push(waterTempData);
        // dispatch(actions.multipleData(chartData));
      } else if (chartData[i].metric === 'oilTemp') {
        chartData[i].measurements.shift();
        chartData[i].measurements.push(oilTempData);
        // dispatch(actions.multipleData(chartData));
      } else if (chartData[i].metric === 'casingPressure') {
        chartData[i].measurements.shift();
        chartData[i].measurements.push(casingPressureData);
        // dispatch(actions.multipleData(chartData));
      } else if (chartData[i].metric === 'tubingPressure') {
        chartData[i].measurements.shift();
        chartData[i].measurements.push(tubingPressureData);
        // dispatch(actions.multipleData(chartData));
      }
    }
  }

  console.log(chartData);

  const names = {
    injValveOpen: 'INJ Valve Open',
    oilTemp: 'Oil Temp',
    tubingPressure: 'Tubing Pressure',
    flareTemp: 'Flare Temp',
    casingPressure: 'Casing Pressure',
    waterTemp: 'Water Temp',
    default: 'metric',
  };

  const colors = {
    injValveOpen: '#1BD82A',
    oilTemp: '#000000',
    tubingPressure: '#FF0000',
    flareTemp: '#FFB201',
    casingPressure: '#830BEE',
    waterTemp: '#000CFF',
    default: '#00FFE0',
  };

  return (
    <>
      {multiData.map(i => {
        if (i.metric === injValveData.metric) {
          return <Card metric={names[i.metric]} data={`${injValveData.value}${injValveData.unit}`} />;
        } else if (i.metric === oilTempData.metric) {
          return <Card metric={names[i.metric]} data={`${oilTempData.value} ${oilTempData.unit}`} />;
        } else if (i.metric === flareTempData.metric) {
          return <Card metric={names[i.metric]} data={`${flareTempData.value} ${flareTempData.unit}`} />;
        } else if (i.metric === waterTempData.metric) {
          return <Card metric={names[i.metric]} data={`${waterTempData.value} ${waterTempData.unit}`} />;
        } else if (i.metric === casingPressureData.metric) {
          return <Card metric={names[i.metric]} data={`${casingPressureData.value} ${casingPressureData.unit}`} />;
        } else if (i.metric === tubingPressureData.metric) {
          return <Card metric={names[i.metric]} data={`${tubingPressureData.value} ${tubingPressureData.unit}`} />;
        }
      })}
      <LineChart width={1000} height={600}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="at" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        {chartData.map(i => {
          return (
            <Line
              dataKey="value"
              data={i.measurements}
              name={names[i.metric]}
              key={i.metric}
              dot={false}
              stroke={colors[i.metric]}
            />
          );
        })}
      </LineChart>
    </>
  );
}
