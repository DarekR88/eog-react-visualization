import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import MultipleMetrics from '../Features/MultipleMetrics/multipleMetrics';
import Card from '../components/Card';

export default function MultiChart() {
  const multiData = useSelector(state => state.multipleData.multipleData);

  // function for converting camel case to sentence case
  const convertCase = metric => {
    switch (metric) {
      case 'injValveOpen':
        return 'INJ Valve Open';

      case 'oilTemp':
        return 'Oil Temp';

      case 'tubingPressure':
        return 'Tubing Pressure';

      case 'flareTemp':
        return 'Flare Temp';

      case 'casingPressure':
        return 'Casing Pressure';

      case 'waterTemp':
        return 'Water Temp';

      default:
        return 'metric';
    }
  };

  // function for changing the color of the lines of the metrics based on name
  const metricColor = metric => {
    switch (metric) {
      case 'injValveOpen':
        return '#1BD82A';

      case 'oilTemp':
        return '#000000';

      case 'tubingPressure':
        return '#FF0000';

      case 'flareTemp':
        return '#FFB201';

      case 'casingPressure':
        return '#830BEE';

      case 'waterTemp':
        return '#000CFF';

      default:
        return '#00FFE0';
    }
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
