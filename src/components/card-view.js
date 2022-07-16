import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Container,
    Box,
    Paper,
    List,
    ListItemText
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Carousel from 'react-material-ui-carousel';

const styles = {
    container: {
        mt: 2,
        bgcolor: grey[300]
    },
    cardImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        textAlign: 'center',
    }
};

export const CardImage = (props) => {
    return (
        <Paper sx={styles.cardImage}>
            <img
                src={`${props.cardUrl}?w=248&fit=crop&auto=format`}
                srcSet={`${props.cardUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={props.cardName}
                loading="lazy"
            />
        </Paper>
    );
};

//Could be replaced by :https://github.com/ethanselzer/react-image-magnify
//or: https://frontend-collective.github.io/react-image-lightbox/
const CardsCarousel = (props) => {
    return (
        <Carousel navButtonsAlwaysVisible={true} animation="slide" autoPlay={false}>
             {
                props.cardImages.map( (item, i) => (
                    <CardImage key={i} cardName={props.cardName} cardUrl={item.image_url} />
                ) )
            }
            
        </Carousel>
    );
};

const CardTitle = (props) => {

    return (
        <Typography variant="h2" sx={styles.cardTitle}>
            {props.cardName}
        </Typography>
    );
};

const CardInfo = (props) => {

    return (
        <Box sx={styles.cardInfo}>
            <List>
                <ListItemText primary="Type:" secondary={props.card.type} />
                <ListItemText primary={props.card.race} inset={false}/>
                <ListItemText primary={props.card.desc} />
                <ListItemText primary={"ATK/" + props.card.atk + " DEF/" + props.card.def} />
            </List>
        </Box>
    );
};

export const CardView = (props) => {
    return (
        <Container fixed sx={styles.container}>
            <Grid container rowSpacing={3}>
                <Grid item xs={12}>
                    <CardTitle cardName={props.card.name} />
                </Grid>
                <Grid item xs={12}>
                    <CardsCarousel cardImages={props.card.card_images} cardName={props.card.name} />
                </Grid>
                <Grid item xs={12}>
                    <CardInfo card={props.card} />
                </Grid>
            </Grid>
        </Container >
    );
};