import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { useSelector } from "react-redux";
import Card from '../components/Card';
import MultipleMetrics from '../Features/MultipleMetrics/multipleMetrics'

export default function Chart() {

  const metricData = useSelector(state => state.metricData.metricData)
  


  return (
    <div>
      <MultipleMetrics />
      <Card />
      <LineChart
        width={1000}
        height={600}
        data={metricData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="at" />
        <YAxis dataKey="value" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" dot={false} />
      </LineChart>
    </div>

  );
}

