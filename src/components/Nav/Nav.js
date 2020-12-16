import React from 'react' ;

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';

import Home from '@material-ui/icons/Home';
import Print from '@material-ui/icons/Print';
import Today from '@material-ui/icons/Today';
import Settings from '@material-ui/icons/Settings';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import "./Nav.scss";


const Nav = () => {
    //const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSettings, setOpenSettings] = React.useState(false);

    const handleClickOffelia = () => {
        setOpen(!open);
      };

      const handleClickSettings = () => {
        setOpenSettings(!openSettings);
      };

    
    return (
        <div className="nav">
            <List>
                <ListItem>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleClickOffelia}>
                    <ListItemIcon>
                    <Print />
                    </ListItemIcon>
                    <ListItemText primary="Offelia" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button>
                        <ListItemIcon>
                        <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Offelia 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Offelia 2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Offelia 3" />
                    </ListItem>
                    </List>
                </Collapse>                
                <ListItem>
                <ListItemIcon>
                    <Today />
                </ListItemIcon>
                <ListItemText primary="Agenda" />
                </ListItem>
                <ListItem button onClick={handleClickSettings}>
                    <ListItemIcon>
                    <Print />
                    </ListItemIcon>
                    <ListItemText primary="Administración" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSettings} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button>
                        <ListItemIcon>
                        <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings 3" />
                    </ListItem>
                    </List>
                </Collapse>                    
                
            </List>
        </div>
    );
}

export default Nav;
