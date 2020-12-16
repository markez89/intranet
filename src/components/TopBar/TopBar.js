import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import Minimize from '@material-ui/icons/Minimize';
import CropDin from '@material-ui/icons/CropDin';


import "./TopBar.scss";

const TopBar = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
      
      const classes = useStyles();

    return (
        <div className="topbar">
            <AppBar position="static">
                <Toolbar>  
                    <Typography variant="h6" className={classes.title}>                       
                    </Typography>                    
                    <Avatar className="avatar">H</Avatar>
                    <p>Alberto Márquez Monje</p>                    
                    <Minimize/>
                    <CropDin />
                    <Close/>                   
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopBar;
