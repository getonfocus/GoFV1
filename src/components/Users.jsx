import React from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import{ Grid, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import {booksData} from '../dataSources/data'
import { User } from './User';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

export const Users = (props) => {
    const classes = useStyles();
    // const [books, setBooks] = React.useState(booksData)
    const [books, setBooks] = useLocalStorage("books", booksData);    
    const [bookTitleState, setBookTitleState] = React.useState("");
    const [bookAuthorState, setBookAuthorState] = React.useState("")


    const addBook = (e) => {
        setBooks([
        ...books,
        {
            id: Math.random() * 1000,
            title: bookTitleState,
            author: bookAuthorState        
        }
        ])
    }    

    return (
        <>  
            <form className="card__form" onSubmit={addBook}>
                <div className="form-group">
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input 
                        type="text"
                        onChange={e => setBookTitleState(e.target.value)}
                        value={bookTitleState}
                    />                    
                </div>
                <div className="form-group">
                    <InputLabel htmlFor="author">Author</InputLabel>
                    <Input 
                        type="text" 
                        onChange={e => setBookAuthorState(e.target.value)}
                        value={bookAuthorState}
                    />                    
                </div>
                               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Grid container spacing={2}>
                {books.map((bookData) => {
                    return (
                        <User key = {Math.random() * 1000}
                            bookTitle={bookData.title}
                            bookAuthor={bookData.author}
                            bookImage={bookData.image}
                            
                        />                
                    )
                })}
            </Grid>           
        </>
    )
}
