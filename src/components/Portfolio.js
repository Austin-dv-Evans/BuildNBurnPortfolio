import React from 'react'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Navbar from './Navbar'
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project3 from '../images/react-redux.jpg'
import project4 from '../images/mern-stack.jpg'

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})

const Portfolio = () => {

    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" >
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                height="140"
                                image={project1}
                                component="img"
                                alt="Project 1" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Here is project 1 it is built with all these technologies
                                        It took this long to make
                                        and you can find the source code here!
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                height="140"
                                image={project2}
                                component="img"
                                alt="Project 2" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Here is project 2 it is built with these technologies
                                        It took X long to make
                                        and you can find the source code here!~
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                height="140"
                                image={project3}
                                component="img"
                                alt="Project 3" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Here is project 3 it is built with all these technologies
                                        It took this long to make
                                        and you can find the source code here!
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                height="140"
                                image={project4}
                                component="img"
                                alt="Project 4" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Here is project 4 it is built with all these technologies
                                        It took this long to make
                                        and you can find the source code here!
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>   
    )
}

export default Portfolio
