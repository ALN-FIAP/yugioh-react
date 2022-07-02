import React, { useState } from 'react';
import {
    AppBar,
    Typography,
    Grid
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchBar from 'material-ui-search-bar';

const styles = {
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        mr: 5
    },
    logoBar: {
        my: {
            sm: 2,
            xs: 0
        },
        pl: {
            sm: 3,
            xs: 0
        }
    }
};

const v4Styles = makeStyles((theme) => ({
    searchBar: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(5),
    }
}));

export const Header = (props) => {
    const [textValue, setTextValue] = useState(
        ''
    );

    const classes = v4Styles();
    return (
        <div sx={styles.root}>
            <AppBar position="static" color='inherit' sx={styles.appBar}>
                <Grid container spacing={3}>
                    <Grid item md={2} sm ={3} xs={12}>
                        <Typography variant="h2" sx={styles.logoBar}>
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
                            
                                props.searchHandler(textValue);
                            }} />
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    );
};