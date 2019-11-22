import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function Switches() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
        console.log(event.target.value)
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
