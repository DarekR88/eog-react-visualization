import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
// import DataCon from '../Features/DataCon/dataCon';
// import { actions } from '../Features/DataCon/reducer'
// import { actions } from '../Features/MultipleMetrics/sliceReducer';

export default function MultiChart() {
  const [dataArr, dataCon] = useState([]);
  const multiData = useSelector(state => state.multipleData.multipleData);
  // const dispatch = useDispatch();
  const injValveData = useSelector(state => state.injValve.injValveData);
  const oilTempData = useSelector(state => state.oilTemp.oilTempData);
  const flareTempData = useSelector(state => state.flareTemp.flareTempData);
  const waterTempData = useSelector(state => state.waterTemp.waterTempData);
  const casingPressureData = useSelector(state => state.casingPressure.casingPressureData);
  const tubingPressureData = useSelector(state => state.tubingPressure.tubingPressureData);
  const activeMetrics = useSelector(state => state.activeMetrics.selectedMetrics);

  useEffect(() => {
    if (multiData.length > 0) {
      dataCon([
        {
          metric: 'injValve',
          measurements: multiData[0].measurements.concat(injValveData),
        },
        {
          metric: 'oilTemp',
          measurements: multiData[1].measurements.concat(oilTempData),
        },
        {
          metric: 'casingPressure',
          measurements: multiData[2].measurements.concat(casingPressureData),
        },
        {
          metric: 'tubingPressure',
          measurements: multiData[3].measurements.concat(tubingPressureData),
        },
        {
          metric: 'flareTemp',
          measurements: multiData[4].measurements.concat(flareTempData),
        },
        {
          metric: 'waterTemp',
          measurements: multiData[5].measurements.concat(waterTempData),
        },
      ]);
    }
  }, [injValveData]);

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
      {/* <DataCon /> */}
      {activeMetrics.map(i => {
        if (i.metricName === injValveData[0].metric) {
          return (
            <Card
              metric={names[i.metricName]}
              data={`${injValveData[injValveData.length - 1].value}${injValveData[0].unit}`}
            />
          );
        } else if (i.metricName === oilTempData[0].metric) {
          return (
            <Card
              metric={names[i.metricName]}
              data={`${oilTempData[oilTempData.length - 1].value} ${oilTempData[0].unit}`}
            />
          );
        } else if (i.metricName === flareTempData[0].metric) {
          return (
            <Card
              metric={names[i.metricName]}
              data={`${flareTempData[flareTempData.length - 1].value} ${flareTempData[0].unit}`}
            />
          );
        } else if (i.metricName === waterTempData[0].metric) {
          return (
            <Card
              metric={names[i.metricName]}
              data={`${waterTempData[waterTempData.length - 1].value} ${waterTempData[0].unit}`}
            />
          );
        } else if (i.metricName === casingPressureData[0].metric) {
          return (
            <Card
              metric={names[i.metricName]}
              data={`${casingPressureData[casingPressureData.length - 1].value} ${casingPressureData[0].unit}`}
            />
          );
        } else if (i.metricName === tubingPressureData[0].metric) {
          return (
            <Card
              metric={names[i.metricName]}
              data={`${tubingPressureData[tubingPressureData.length - 1].value} ${tubingPressureData[0].unit}`}
            />
          );
        }
      })}
      <LineChart width={1000} height={600}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="at" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        {dataArr.map(i => {
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
