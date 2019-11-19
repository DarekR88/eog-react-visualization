// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Provider, createClient, useQuery } from 'urql';
// import LinearProgress from '@material-ui/core/LinearProgress';

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

