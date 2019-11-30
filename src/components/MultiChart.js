import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import MultipleMetrics from '../Features/MultipleMetrics/multipleMetrics';
import Card from '../components/Card';

export default function MultiChart() {
  const multiData = useSelector(state => state.multipleData.multipleData);

  // function for converting camel case to sentence case
  const convertCase = metric => {
    const names = {
      injValveOpen: 'INJ Valve Open',
      oilTemp: 'Oil Temp',
      tubingPressure: 'Tubing Pressure',
      flareTemp: 'Flare Temp',
      casingPressure: 'Casing Pressure',
      waterTemp: 'Water Temp',
      default: 'metric',
    };

    return names[metric] || names['default'];
  };

  // function for changing the color of the lines of the metrics based on name
  const metricColor = metric => {
    const colors = {
      injValveOpen: '#1BD82A',
      oilTemp: '#000000',
      tubingPressure: '#FF0000',
      flareTemp: '#FFB201',
      casingPressure: '#830BEE',
      waterTemp: '#000CFF',
      default: '#00FFE0',
    };
    return colors[metric] || colors['default'];
  };

  return (
    <>
      <MultipleMetrics />
      {multiData.map(i => {
        const currentData = i.measurements[i.measurements.length - 1];

        return <Card metric={convertCase(i.metric)} data={currentData.value} />;
      })}
      <LineChart width={1000} height={600}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="at" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        {multiData.map(i => {
          return (
            <Line
              dataKey="value"
              data={i.measurements}
              name={convertCase(i.metric)}
              key={i.metric}
              dot={false}
              stroke={metricColor(i.metric)}
            />
          );
        })}
      </LineChart>
    </>
  );
}
