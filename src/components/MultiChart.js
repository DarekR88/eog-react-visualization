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
                {multiData.map((s) => {
                    let color = ''
                    switch (s.metric) {
                        case 'injValveOpen':
                            color = '#1BD82A'
                            break;
                        case 'oilTemp':
                            color = '#000000'
                            break;
                        case 'tubingPressure':
                            color = '#FF0000'
                            break;
                        case 'flareTemp':
                            color = '#FFB201'
                            break;
                        case 'casingPressure':
                            color = '#830BEE'
                            break;
                        case 'waterTemp':
                            color = '#000CFF'
                            break;
                        default:
                            color = '#00FFE0'
                    }
                    return (<Line dataKey="value" data={s.measurements} name={s.metric} key={s.metric} dot={false} stroke={color} />)
                })}
            </LineChart>
        </div>

    );


}


