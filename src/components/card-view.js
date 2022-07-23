import {
    Box, Container, Grid, List,
    ListItemText, Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CardImage } from './card-image';

const styles = {
    container: {
        mt: 2,
        bgcolor: grey[300]
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

//Could be replaced by :https://github.com/ethanselzer/react-image-magnify
//or: https://frontend-collective.github.io/react-image-lightbox/
const CardsCarousel = (props) => {
    return (
        <Carousel navButtonsAlwaysVisible={true} animation="slide" autoPlay={false}>
            {
                props.cardImages.map((item, i) => (
                    <CardImage key={i} cardName={props.cardName} cardUrl={item.image_url} width={500} height={800} />
                ))
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
                <ListItemText primary={props.card.race} inset={false} />
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