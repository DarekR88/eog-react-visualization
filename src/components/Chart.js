import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Data from '../Features/MetricData/metricData'
import { useSelector } from "react-redux";




export default function Chart() {

  const metricData = useSelector(state => state.metricData.metricData)
  // const metric = useSelector(state => state.selector.selectedMetric);

  return (
    <div>
      <Data />
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
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>

  );
}

