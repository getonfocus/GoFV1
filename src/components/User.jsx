import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{ Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

export const User = (props) => {
    const classes = useStyles();
    const { bookTitle, bookAuthor, bookImage } = props;
    return (
    <>
        <Grid item xs={4}>
            <div className="card__wrapper">
                <a href="">                
                    <img src={bookImage} alt="" />
                    <div>
                        <Typography variant="h5" component="h2">
                        {bookTitle}
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {bookAuthor}
                        </Typography>
                    </div>
                </a>
                <div className="card__wrapper-btns">
                    <Button className="btn__edit" variant="contained" color="primary">
                        Edit
                    </Button>
                    <Button className="btn__delete" variant="contained" color="secondary">
                        Delete
                    </Button>
                </div>                
            </div>
        </Grid>
        
    </>
    );
}

