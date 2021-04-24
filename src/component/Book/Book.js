import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { SERVER } from './../../util/Constant';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Book(props) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const [listCategory, setListCategory] = useState([]);

    const [ bookName,  setBookName ] = useState("");
    const [ authorName, setAuthorName ] = useState("");
    const [bookDescription, setBookDescription ] = useState("");
    const [categoryId ,  setCategoryId ] = useState(0);

    const addBook = ()=>{
        const payload = {
            bookName : bookName,
            authorName : authorName,
            bookDescription : bookDescription,
            categoryId : categoryId
        }
        console.log(payload);
        axios.post(SERVER + "/addBook",payload)
        .then((res)=>{
            console.log(res.data);
            props.history.goBack();
        })
        .catch((error)=>{console.log(error)})
    }

    useEffect(() => {
        axios.get(SERVER +"/getCategory")
            .then((res) => {
                console.log(res.data);
                setListCategory(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [count]);
    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Book
                </Typography>
             
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField

                                name="bookName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Book Name"
                                autoFocus
                                value = {bookName}
                                onChange = {(e)=>{setBookName(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Book Author"
                                name="authorName"
                                value = {authorName}
                                onChange = {(e)=>{setAuthorName(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Book Description"
                                name="bookDescription"
                                multiline
                                rows = {3}
                                value = {bookDescription}
                                onChange = {(e)=>{setBookDescription(e.target.value)}}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="categoryId"
                                label="Category"
                                type="password"
                                id="password"
                                select
                                value = {categoryId}
                                onChange={(e)=>{setCategoryId(e.target.value)}}
                            >
                                {listCategory.map((cat) => {
                                    console.log(cat)
                                    return (
                                        <MenuItem key={cat.categoryId} value={cat.categoryId}>
                                            {cat.categoryName}
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick = { addBook }
                    >
                        Add Book
                 </Button>
                    
               
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default withRouter(Book);