import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider, createClient, useQuery } from 'urql';
import LinearProgress from '@material-ui/core/LinearProgress';

const client = createClient({
    url: "https://react.eogresources.com/graphql"
});

const measurementQuery = `
  query($input: [MeasurementQuery]) {
    getMultipleMeasurements(input: $input) {
      metric,
        measurements {
            metric,
            at,
            value,
            unit
        }
    }                                                                                       
  }
  `;

export default () => {
    return (
        <Provider value={client}>
            <MultipleMetrics />
        </Provider>
    );
};

const MultipleMetrics = () => {
    // const activeMetrics = useSelector(state => state)
    const timeStamp = useSelector(state => state.heartbeat)
    const dispatch = useDispatch();


    const [measurementRes] = useQuery({
        query: measurementQuery,
        variables: {
            input: [{
                metricName: "oilTemp",
                before: timeStamp.current,
                after: timeStamp.past
            },
            {
                metricName: "flareTemp",
                before: timeStamp.current,
                after: timeStamp.past
            }]
        }
    });

    const { fetching, data, error } = measurementRes;

    useEffect(() => {
        if (error) {
            return;
        }
        if (!data) {
            return;
        } else {
            const { getMultipleMeasurements } = data;
            dispatch({
                type: "MULTIPLE_DATA",
                payload: getMultipleMeasurements
            });
            console.log(getMultipleMeasurements)
        }
    });

    if (fetching) return <LinearProgress />;

    return null

}

