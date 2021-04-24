import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        height: 220,
        width: 300,
    },
    card: {
        width: 200
    }
});

export default function BookCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="https://i.insider.com/511cffe5eab8ea1355000012"
                title="Contemplative Reptile"
                alt="Contemplative Reptile"
            />
            <CardContent>
                <Typography>{props.book.name}</Typography>
                <Typography component="p" variant="body2">
                    {props.book.description}
                                </Typography>
            </CardContent>


        </Card>
    );
}
