import React, { useState } from 'react';
import {
    AppBar,
    Typography,
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    logoBar: {
        marginTop: theme.spacing(4)
    },
    searchBar: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}));

export const Header = () => {
    const classes = useStyles();
    const [textValue, setTextValue] = useState(
        ''
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" color='inherit' className={classes.appBar}>
                <Grid container spacing={3}>
                    <Grid item md={2} sm ={3} xs={12}>
                        <Typography variant="h2" className={classes.logoBar}>
                            Yugioh React
                        </Typography>
                    </Grid>
                    <Grid item md={10} sm={9} xs={12}>
                        <SearchBar
                            className={classes.searchBar}
                            value={textValue}
                            onChange={(newValue) => setTextValue(newValue)}
                            onRequestSearch={() => { 
                                //TODO: disparar chamada pra api 
                                //setar o estado do componente de searchResult
                            
                            }} />
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    );
};