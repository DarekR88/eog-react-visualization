import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { useSelector } from "react-redux";
import MultipleMetrics from "../Features/MultipleMetrics/multipleMetrics";
import Card from '../components/Card';

export default function MultiChart() {

    const multiData = useSelector(state => state.multipleData.multipleData)

    return (
        <div>
            <MultipleMetrics />
            {multiData.map((i) => {
                let metricName = ''
                const currentData = i.measurements[i.measurements.length - 1]
                switch (i.metric) {
                    case 'injValveOpen':
                        metricName = 'INJ Valve Open'
                        break;
                    case 'oilTemp':
                        metricName = 'Oil Temp'
                        break;
                    case 'tubingPressure':
                        metricName = 'Tubing Pressure'
                        break;
                    case 'flareTemp':
                        metricName = 'Flare Temp'
                        break;
                    case 'casingPressure':
                        metricName = 'Casing Pressure'
                        break;
                    case 'waterTemp':
                        metricName = 'Water Temp'
                        break;
                    default:
                        metricName = 'metric'
                }

                return (<Card metric={metricName} data={currentData.value} />)
            })}
            <LineChart width={1000} height={600}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="at" type="category" allowDuplicatedCategory={false} />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend layout="vertical" verticalAlign="middle" align="right" />
                {multiData.map((i) => {
                    let color = ''
                    let metricName = ''
                    switch (i.metric) {
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

                    switch (i.metric) {
                        case 'injValveOpen':
                            metricName = 'INJ Valve Open'
                            break;
                        case 'oilTemp':
                            metricName = 'Oil Temp'
                            break;
                        case 'tubingPressure':
                            metricName = 'Tubing Pressure'
                            break;
                        case 'flareTemp':
                            metricName = 'Flare Temp'
                            break;
                        case 'casingPressure':
                            metricName = 'Casing Pressure'
                            break;
                        case 'waterTemp':
                            metricName = 'Water Temp'
                            break;
                        default:
                            metricName = 'metric'
                    }
    
                    return (<Line dataKey="value" data={i.measurements} name={metricName} key={i.metric} dot={false} stroke={color} />)
                })}
            </LineChart>
        </div>

    );


}


