import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    card: {
        maxWidth: 150,
        marginLeft: 75,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const metricData = useSelector(state => state.metricData.metricData);
    const metric = useSelector(state => state.selector.selectedMetric);

    if(metricData.length === 0) {
        return (<div></div>)
    }else{
      return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {metric}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {metricData[metricData.length - 1].value}
                    </Typography>
                </CardContent>
            </Card>
        );  
    }

    
}