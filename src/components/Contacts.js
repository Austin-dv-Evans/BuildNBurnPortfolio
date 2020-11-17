import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from "@material-ui/icons/Send"
import Navbar from './Navbar'
import { Translate } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"

    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }   
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "white",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        }
    }
})(TextField)

const Contacts = () => {

    const classes = useStyles()

    return (
        <>
        <Navbar/>
        <Box component="div" style={{background: "#233", height: "100vh"}}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransfomr:"uppercase"}}>
                        Hire or Contact Me!
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{style:{ color: "white" }}}
                        margin="dense"
                        size="small"
                    />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{style:{ color: "white" }}}
                        margin="dense"
                        size="small"
                    />
                    <InputField
                        fullWidth={true}
                        label="Company Name"
                        inputProps={{style:{ color: "white" }}}
                        variant="outlined"
                        margin="dense"
                        size="small"
                    />
                    <Button 
                        className={classes.button} 
                        variant="outlined" 
                        fullWidth={true} 
                        endIcon={<SendIcon/>}>
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
        </>
    )
}

export default Contacts
