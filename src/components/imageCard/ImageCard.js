import React from 'react';
import './ImageCard.scss';
import { PropTypes } from 'prop-types';
import {
    Card,
    Button,
    CardActionArea,
    CardMedia,
    CardActions,
    Typography,
    CardContent,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

const ImageCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.images.preview_gif.url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.username || 'Anonymous'}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.item.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

ImageCard.propTypes = {
    item: PropTypes.any.isRequired
};

export default ImageCard;
