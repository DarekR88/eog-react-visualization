import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Provider, useSubscription, createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { actions } from './reducer';
import { SubscriptionClient } from 'subscriptions-transport-ws';

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
  const receiveMeasurement = useCallback(measurement => dispatch(actions.subData(measurement)), [dispatch]);
  const [subscriptionResponse] = useSubscription({ query: newMessages });
  const { data: subscriptionData } = subscriptionResponse;

  useEffect(() => {
    if (!subscriptionData) return;
    receiveMeasurement(subscriptionData.newMeasurement);
  }, [subscriptionData, receiveMeasurement]);

  return null;
};
