import { AppBar, IconButton, Toolbar, Typography,Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import React from 'react'

function AppBarComponent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        DataView
                    </Typography>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default AppBarComponent
