import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { useSelector } from "react-redux";
import MultipleMetrics from "../Features/MultipleMetrics/multipleMetrics"

export default function MultiChart() {

    const multiData = useSelector(state => state.multipleData.multipleData)

    return (
        <div>
            <MultipleMetrics />
            <LineChart width={1000} height={600}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="at" type="category" allowDuplicatedCategory={false} />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend />
                {multiData.map(s => (
                    <Line dataKey="value" data={s.measurements} name={s.metric} key={s.metric} dot={false} />
                ))}
            </LineChart>
        </div>

    );


}


