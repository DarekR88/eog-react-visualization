import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Data from '../Features/MetricData/metricData'
import { useSelector } from "react-redux";
import Card from '../components/Card';
import MultipleMetrics from '../Features/MultipleMetrics/multipleMetrics'

export default function Chart() {

  const metricData = useSelector(state => state.metricData.metricData)
  if(metricData.length === 0){
    console.log("no data")
  }
  return (
    <div>
      <MultipleMetrics />
      <Data />
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
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" dot={false} />
      </LineChart>
    </div>

  );
}

