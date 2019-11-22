import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';

export default function Switches() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
    });

    const timeStamp = useSelector(state => state.heartbeat)
    const dispatch = useDispatch();
    const activeArr = useSelector(state => state.activeMetrics.selectedMetrics)

    const handleChange = name => event => {
        const metric = event.target.value
        const isChecked = event.target.checked
        setState({ ...state, [name]: event.target.checked });
        if (isChecked) {
            dispatch({
                type: "ACTIVE",
                payload: {
                    metricName: metric,
                    before: timeStamp.current,
                    after: timeStamp.past
                }
            })
        } 
        else {
            const metricIndex = activeArr.find(element => element.metricName === metric)
            
            dispatch({
                type: "REMOVE",
                payload: metricIndex.metricName
            })
        }


    };

    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="top"
                    control={<Switch
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="injValveOpen"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                    label="injValveOpen"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="start"
                    control={<Switch
                        checked={state.checkedB}
                        onChange={handleChange('checkedB')}
                        value="oilTemp"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                    label="oilTemp"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Switch
                        checked={state.checkedC}
                        onChange={handleChange('checkedC')}
                        value="tubingPressure"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                    label="tubingPressure"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="end"
                    control={<Switch
                        checked={state.checkedD}
                        onChange={handleChange('checkedD')}
                        value="flareTemp"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                    label="flareTemp"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="end"
                    control={<Switch
                        checked={state.checkedE}
                        onChange={handleChange('checkedE')}
                        value="casingPressurecheckedE"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                    label="casingPressure"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="end"
                    control={<Switch
                        checked={state.checkedF}
                        onChange={handleChange('checkedF')}
                        value="waterTemp"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                    label="waterTemp"
                    labelPlacement="top"
                />
            </FormGroup>
        </FormControl>
    );
}
