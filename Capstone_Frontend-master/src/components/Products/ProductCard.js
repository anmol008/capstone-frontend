import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Product.css";

export default function ProductCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcasual-shoes&psig=AOvVaw2m348N5dKYAw2oFjjvrHGE&ust=1654539393412000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDfg931lvgCFQAAAAAdAAAAABAD"
                    alt="Shoes"
                />
                <CardContent>
                    <Typography id='productDescrip' gutterBottom variant="h5" component="span">
                        Shoes
                    </Typography>
                    <Typography id='priceDescrip' gutterBottom variant="h5" component="span">
                        Rs.1000
                    </Typography>
                    <Typography variant="body2" color="text.secondary" id='description'>
                        MIXIDELAI Men Casual Shoes Breathable Male Shoes Masculino Woven Shoes Hombre Sneakers Men Socks Shoes Trainers For Men Flats. Yesterday's price: US $36.00 (31.68 EUR). Today's price: US $18.36 (16.37 EUR). Discount: 49%.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant='contained' size="small" color="primary">
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
}
