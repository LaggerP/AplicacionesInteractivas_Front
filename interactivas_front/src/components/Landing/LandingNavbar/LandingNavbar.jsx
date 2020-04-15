import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   appBar: {
      background: '#45B39D',
      position: 'fixed',
   },
   Button: {
      marginRight: theme.spacing(3),
      '&:hover': {
         backgroundColor: '#4a47a3',
         color: 'white'
      },
   },
   title: {
      flexGrow: 1,
   },
}));

export default function LandingNavbar() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position="static" className={classes.appBar}>
            <Toolbar>

               <Typography variant="h6" className={classes.title}>
                  AppName
               </Typography>
               <Button className={classes.Button} color="inherit">
                  <span role="img" aria-label="home">🏠Home</span>
               </Button>
               <Button className={classes.Button} color="inherit">
                  <span role="img" aria-label="game">🎮Juegos</span>
               </Button>
            </Toolbar>
         </AppBar>
      </div>
   );
}