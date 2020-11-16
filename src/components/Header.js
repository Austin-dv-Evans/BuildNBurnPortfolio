import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import profile from '../profile.jpg'
import Typed from "react-typed"

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "white",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        width: "100vw",
        textAlign: "center"
    }
}))


const Header = () => {
    
    const classes = useStyles()
    
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={profile} alt="Austin's Mug" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Austin Evans"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed 
                    strings={["Web Design", "Web Development", "Front-End", "Back-End", "Full Stack Software Engineer"]} 
                    backSpeed={60}
                    loop
                    typeSpeed={40} />
            </Typography>
        </Box>
    )
}

export default Header
