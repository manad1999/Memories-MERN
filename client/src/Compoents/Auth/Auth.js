import React from 'react'
import { Avatar, Button,Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './Style';
import LockOutlinedIcon from '@material-ui/icons';
function Auth() {
    const classes = useStyles();
    const isSignup = false;
    const handleSumbit = () => {

    }
  return (
    <Container component="main" maxWidth = "xs">
        <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ?'Sign Up' : 'Sign In' }</Typography>
        <form className={classes.form} onSubmit={handleSumbit}>
            <Grid container spacing={2}>
                {
                    isSignup && (
                        
                    )
                }
            </Grid>
        </form>

        </Paper>
    </Container>
  )
}

export default Auth