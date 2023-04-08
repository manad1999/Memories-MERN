import React,{ useEffect, useState } from "react";
import {Container, Grom , Grid, AppBar, Typography, Grow, FormLabel} from '@material-ui/core';
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import NavBar from "./Compoents/NavBar/NavBar";
import Home from "./Compoents/Home/Home";
import Auth from "./Compoents/Auth/Auth";

const App = () => {
    
    return( 
        <BrowserRouter>
            <Container maxWidth = "lg">
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path= '/auth' exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
        
    );

}

export default App;