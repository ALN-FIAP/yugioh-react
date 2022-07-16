import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Container,
    Box,
    Paper,
    List,
    ListItemText,
    ListItem,
    Card,
    CardContent
} from '@mui/material';
import { grey } from '@mui/material/colors';
import {CardImage} from './card-view';

const styles = {
    card: {
        width:'100%',
        display: 'flex',
    },
    cardList: {
       pl: 0
    },
};


const CardListTile = (props) => {
    return (
        <ListItem sx={styles.cardList}>
            <Card sx={styles.card}>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.card.name}
                    </Typography>
                    <CardImage cardUrl = {props.card.card_images[0].image_url} cardName={props.card.name} />
                    <Typography variant="body2" color="text.secondary" component="pre">
                        Type: {props.card.race + "\n"}
                        {"ATK/" + props.card.atk + "\nDEF/" + props.card.def}

                    </Typography>
                </CardContent>
            </Card>
        </ListItem>
    );
}

export const CardList = (props) => {

    return (
        <Grid container sx={styles.cardList}>
            <Grid item xs={12}>
                <List >
                    {props.cards.map((item, i) => (
                        <CardListTile key={i} card={item} />
                    ))}
                </List>
            </Grid>
        </Grid>
    );
};