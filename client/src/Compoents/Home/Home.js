import React from 'react';
import Posts from '../Posts/Posts';
import Form from '../Forms/Form';
import {Container, Grom , Grid, AppBar, Typography, Grow, FormLabel} from '@material-ui/core';
import useStyles from "../../style";
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getPosts } from '../../actions/posts';

function Home() {
    const classes  = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    useEffect(() =>
    {
        console.log("Ubser");
        dispatch(getPosts());
    },[dispatch, currentId]);
  return (
    <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs = {12} sm = {7}>
                        <Posts setCurrentId = {setCurrentId} />
                    </Grid>
                    <Grid item xs = {12} sm = {4}>
                        <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                    </Grid>

                </Grid>

            </Grow>
  )
}

export default Home;