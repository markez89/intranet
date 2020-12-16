import React from 'react';
import Nav from "../../Nav/Nav";
import TopBar from "../../TopBar/TopBar";


import Grid from '@material-ui/core/Grid';


import "./Principal.scss"

const Principal = () => {
    return (
        <div className="principal-layout">
            <Grid container >               
                <Grid item xs={2}>
                    <Nav/>
                </Grid>
                <Grid item xs={10} className="contenido">
                    <TopBar/>
                    <p>contenido</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Principal;
