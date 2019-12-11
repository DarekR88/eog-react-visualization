import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Provider, useSubscription, createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { actions as subActions } from '../Subscription/reducer';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { actions as otActions } from '../OilTemp/reducer';
import { actions as injActions } from '../InjValve/reducer';
import { actions as ftActions } from '../flareTemp/reducer';
import { actions as cpActions } from '../CasingPressure/reducer';
import { actions as tpActions } from '../TubingPressure/reducer';
import { actions as wtActions } from '../WaterTemp/reducer';

const subscriptionClient = new SubscriptionClient('wss://react.eogresources.com/graphql', {
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
  const reducerSwitch = measurement => {
    if (measurement.metric === 'oilTemp') {
      return dispatch(otActions.oilTempData(measurement));
    } else if (measurement.metric === 'injValveOpen') {
      return dispatch(injActions.injValveData(measurement));
    } else if (measurement.metric === 'flareTemp') {
      return dispatch(ftActions.flareTempData(measurement));
    } else if (measurement.metric === 'waterTemp') {
      return dispatch(wtActions.waterTempData(measurement));
    } else if (measurement.metric === 'casingPressure') {
      return dispatch(cpActions.casingPressureData(measurement));
    } else if (measurement.metric === 'tubingPressure') {
      return dispatch(tpActions.tubingPressureData(measurement));
    }
  };

  const dispatch = useDispatch();
  const receiveMeasurement = useCallback(measurement => reducerSwitch(measurement), [reducerSwitch]);
  const [subscriptionResponse] = useSubscription({ query: newMessages });
  const { data: subscriptionData } = subscriptionResponse;

  useEffect(() => {
    if (!subscriptionData) return;
    receiveMeasurement(subscriptionData.newMeasurement);
  }, [subscriptionData, receiveMeasurement]);

  return null;
};
