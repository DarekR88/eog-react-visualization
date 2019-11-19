import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider, createClient, useQuery } from 'urql';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '../../components/Chip';
import moment from 'moment'

const client = createClient({
    url: "https://react.eogresources.com/graphql"
});

const heartBeatQuery = `
  query {
    heartBeat                                                                                                              
  }
  `;


export default () => {
    return (
        <Provider value={client}>
            <HeartBeat />
        </Provider>
    );
};

const HeartBeat = () => {
    const dispatch = useDispatch();
    const timeStamp = useSelector(state => state.heartbeat)
    const time = moment(timeStamp.current).format("DD-MM-YYYY");

    const [heartBeatRes] = useQuery({
        query: heartBeatQuery
    });
    const { fetching, data, error } = heartBeatRes;
    useEffect(
        () => {
            if (error) {
                console.log(error.message);
                return;
            }
            if (!data) return;

            dispatch({
                type: "TIMESTAMP",
                payload: data.heartBeat
            })
        }
    );
    
    if (fetching) return <LinearProgress />;

    

    return <Chip label={time} />;

}
