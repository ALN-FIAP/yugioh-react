import {
    Card,
    CardContent, Grid
} from '@mui/material';
import React from 'react';
import { CardImage } from './card-image';

const styles = {
    card: {
        width: '100%',
        display: 'flex',
    },
    cardList: {
        pl: 0
    },
};


const CardListTile = (props) => {
    return (
        <Grid item sx={styles.cardList} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card sx={styles.card}>
                <CardContent >
                    {/* <Typography gutterBottom variant="h5" component="div">
                        {props.card.name}
                    </Typography> */}
                    <CardImage cardUrl={props.card.card_images[0].image_url} cardName={props.card.name} width={200} height={300} />
                    {/* <Typography variant="body2" color="text.secondary" component="pre">
                        Type: {props.card.race + "\n"}
                        {"ATK/" + props.card.atk + "\nDEF/" + props.card.def}
                    </Typography> */}
                </CardContent>
            </Card>
        </Grid>
    );
}

export const CardList = (props) => {

    return (
        <Grid container sx={styles.cardList}>
            {props.cards.map((item, i) => (
                <CardListTile key={i} card={item} />
            ))}
        </Grid>
    );
};