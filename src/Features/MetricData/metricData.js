// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Provider, createClient, useQuery } from 'urql';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Chart from '../../components/Chart';

// const client = createClient({
//     url: "https://react.eogresources.com/graphql"
// });

// const measurementQuery = `
//   query($input: MeasurementQuery) {
//     getMeasurements(input: $input) {
//       metric,
//       at,
//       value,
//       unit
//     }                                                                                       
//   }
//   `;

// export default () => {
//     return (
//         <Provider value={client}>
//             <Data />
//         </Provider>
//     );
// };

// const Data = () => {
//     const metric = useSelector(state => state.selector.selectedMetric);
//     const metricData = useSelector(state => state.metricData.metricData)
//     const timeStamp = useSelector(state => state.heartbeat)
//     const dispatch = useDispatch();
  
//     const [measurementRes] = useQuery({
//       query: measurementQuery,
//       variables: {
//         input: {
//           metricName: metric,
//           before: timeStamp.current,
//           after: timeStamp.past
//         }
//       }
//     });
  
//     const { fetching, data, error } = measurementRes;
  
//     useEffect(() => {
//       if (error) {
//         return;
//       }
//       if (!data) {
//         return;
//       } else {
//         const { getMeasurements } = data;
//         dispatch({
//           type: "METRIC_DATA",
//           payload: getMeasurements
//         });
//       }
//     });
  
//     if (fetching) return <LinearProgress />;

//     return(<Data />)

// }

