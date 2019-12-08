import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function SimpleCard(props) {
  const useStyles = makeStyles({
    card: {
      maxWidth: 150,
      float: 'left',
      marginLeft: 15,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    metric: {
      color: props.color,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {props.metric}
        </Typography>
        <Typography className={classes.metric} variant="body2" component="p">
          {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}
