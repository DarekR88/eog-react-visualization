import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider, createClient, useQuery } from 'urql';
import LinearProgress from '@material-ui/core/LinearProgress';
import { actions } from './sliceReducer';

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
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
  const activeMetrics = useSelector(state => state.activeMetrics.selectedMetrics);

  const dispatch = useDispatch();

  const [measurementRes] = useQuery({
    query: measurementQuery,
    variables: {
      input: activeMetrics.slice(1),
    },
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
      dispatch(actions.multipleData(getMultipleMeasurements));
      // dispatch({
      //     type: "MULTIPLE_DATA",
      //     payload: getMultipleMeasurements
      // });
    }
  });

  if (fetching) return <LinearProgress />;

  return null;
};
