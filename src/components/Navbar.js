import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import { 
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    Menu
} from "@material-ui/core";
import { 
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    
 } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';

import profile from '../profile.jpg'


// styles

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: "100%"
    },
    avatar: {
        display: 'block',
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "white"
    }
}))

const menuItems = [
    {
    listIcon: <Home/>,
    listText: "Home"
    },
    {
    listIcon: <AssignmentInd/>,
    listText: "Resume"
    },
    {
    listIcon: <Apps/>,
    listText: "Portfolio"
    },
    {
    listIcon: <ContactMail/>,
    listText: "Contact"
    },
]

const Navbar = () => {
    
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles()
    
    const sideList = slider => (
        <Box 
            onClick={toggleSlider(slider, false)}
            className={classes.menuSliderContainer} 
            component="div">
            <Avatar className={classes.avatar} src={profile} alt="my smiling mug" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem} >
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} /> 
                    </ListItem>
                ))}
            </List>
        </Box>
    )


    return (
        <>
        
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <MenuIcon style={{color: "tomato"}} />
                        </IconButton>
                        <Typography variant="h5">
                            Austin Evans
                        </Typography>
                        <MobileRightMenuSlider 
                            anchor="right"
                            onClose={toggleSlider("right", false)}
                            open={state.right}>
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar