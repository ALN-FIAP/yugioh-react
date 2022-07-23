import {
    Paper
} from '@mui/material';
import React from 'react';

const styles = {
    cardImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export const CardImage = (props) => {
    return (
        <Paper sx={styles.cardImage}>
            <img
                src={`${props.cardUrl}`}
                srcSet={`${props.cardUrl} 2x`}
                alt={props.cardName}
                width={props.width} height={props.height}
                loading="lazy"
            />
        </Paper>
    );
};