import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider, useSubscription, createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { actions } from '../MultipleMetrics/sliceReducer';
import { actions as subActions } from '../Subscription/reducer';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { cloneDeep } from 'lodash';

const subscriptionClient = new SubscriptionClient('ws://react.eogresources.com/graphql', {
  reconnect: true,
  timeout: 20000,
});

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
});

const newMessages = `
subscription {
  newMeasurement {metric, at, value, unit}
}
`;

export default () => {
  return (
    <Provider value={client}>
      <Subscriber />
    </Provider>
  );
};

const Subscriber = () => {
  const dispatch = useDispatch();
  const multiData = useSelector(state => state.multipleData.multipleData);
  const receiveMeasurement = useCallback(measurement => dispatch(subActions.subData(measurement)), [dispatch]);
  const [subscriptionResponse] = useSubscription({ query: newMessages });
  const { data: subscriptionData } = subscriptionResponse;

  // if (subscriptionData) {
  //   const tempData = cloneDeep(multiData);
  //   const newMeasurement = subscriptionData.newMeasurement;

  //   multiData.map((item, i) => {
  //     if (item.metric === newMeasurement.metric) {
  //       tempData[i].measurements.push(newMeasurement);
  //       dispatch(actions.updateData(tempData));
  //     }
  //   });
  // }

  useEffect(() => {
    if (!subscriptionData) return;
    receiveMeasurement(subscriptionData.newMeasurement);
  }, [subscriptionData, receiveMeasurement]);

  return null;
};
