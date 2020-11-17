import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Github from '@material-ui/icons/GitHub'


const useStyles = makeStyles({
    root: {
        "&.MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "white",
            "&:hover": {
                fill: "tomato",
                fontSize: "2rem"
            }
        }
    }
})

const Footer = () => {

    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
                className={classes.root}
                style={{padding:0}}
                icon={<Facebook/>}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{padding:0}}
                icon={<Twitter/>}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{padding:0}}
                icon={<Github/>}
            />
        </BottomNavigation>
    )
}

export default Footer
