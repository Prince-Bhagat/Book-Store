import { Card, CardContent, Grid, makeStyles, Typography, Button, CardActions, TextField, Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Book from './component/Book/Book';
import Home from './component/Home/Home';
import Appbar from './component/Appbar/Appbar';







function App() {
	return (

		<div>

			<Switch>
				<Route exact path="/">
					<Appbar/>
					<Home/>
				</Route>
				<Route path="/addBook">
					<Book />
				</Route>

			</Switch>
		</div>
	);
}

export default App;

function TitleCard() {
	const useStyles = makeStyles({
		root: {
			minWidth: 275,
		},
		bullet: {
			display: 'inline-block',
			margin: '0 2px',
			transform: 'scale(0.8)',
		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 12,
		},
	});


	const classes = useStyles();

	const bull = <span className={classes.bullet}>•</span>;
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					Word of the Day
                </Typography>

				<Typography variant="h5" component="h2">
					be{bull}nev{bull}o{bull}lent
                </Typography>

				<Typography className={classes.pos} color="textSecondary">
					adjective
                </Typography>

				<Typography variant="body2" component="p">
					well meaning and kindly.
                    <br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}