import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [metric, setMetric] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        const value = event.target.value;
        setMetric(value);
        dispatch({
            type: "SELECTOR",
            payload: value
        })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button className={classes.button} onClick={handleOpen}>
                Select a Metric
            </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Metric</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={metric}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'injValveOpen'}>injValveOpen</MenuItem>
                    <MenuItem value={'oilTemp'}>oilTemp</MenuItem>
                    <MenuItem value={'tubingPressure'}>tubingPressure</MenuItem>
                    <MenuItem value={'flareTemp'}>flareTemp</MenuItem>
                    <MenuItem value={'casingPressure'}>casingPressure</MenuItem>
                    <MenuItem value={'waterTemp'}>waterTemp</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}