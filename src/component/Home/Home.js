import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    Paper,
    AppBar,
    IconButton,
    Button,
    Toolbar
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import 'fontsource-roboto';
import { MenuBook, Search } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import BookCard from './BookCard';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { SERVER } from "./../../util/Constant";

const useStyles = makeStyles({
    media: {
        height: 220,
        width: 300,
    },
    card: {
        width: 200
    }
});

function Home(props) {
    const classes = useStyles();

    const [count, setCount] = useState(0);
    const [bookList, setBookList] = useState([]);
    const [searchValue, setSearchValue ] = useState("");


    const searchFunction = (event)=>{
        const val = event.target.value;
        setSearchValue(val);
        const payload = {
            searchValue : val
        };
       
        axios.get(SERVER +"/searchBook",{params : payload})
        .then((res)=>{
            setBookList(res.data)
            console.log(res)
        })
        .catch((error)=>{console.log(error)})
        

        console.log(searchValue)
    }

    useEffect(() => {
        axios.get(SERVER +"/getBook")
            .then((res) => { setBookList(res.data) })
            .catch((error) => { console.log(error) })
    }, [count]);
    return (
        <Container
            maxWidth="lg"
        >
            
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                >
                    <Paper
                        style={{
                            margin: 20
                        }}
                    >
                        <TextField
                            variant="outlined"

                            placeholder="Search Book"
                            fullWidth
                            style={{
                                borderColor: "black"
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MenuBook fontSize="large" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <Search
                                            fontSize="large"
                                        />
                                    </InputAdornment>
                                )
                            }}

                            value = {searchValue}
                            onChange  = {searchFunction}
                        />
                    </Paper>
                </Grid>

            </Grid>
            <Grid
                container
                direction="row"
                spacing={5}
                justify="center"
            >
                {bookList.map((book) => (
                    <Grid item >
                        <BookCard book={book} />
                    </Grid>
                ))}

            </Grid>

        </Container>
    );
}

export default withRouter(Home);

