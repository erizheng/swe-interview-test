import React, { useContext } from 'react';
import { Product } from './types';
import { AppContext } from './context.tsx';
import { deleteProductFromBackend } from './product-utils.ts';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const ProductItem = (currentProduct: Product) => {
    const {prod, setProducts} = useContext(AppContext);

    //implement the delete function
    const handleDelete = (id: number) => {
        deleteProductFromBackend(id);
        setProducts(preProducts => preProducts.filter(i => i.id !== id));
    };

    return (
        <li className='ProductItem'>
            {/* <div>
                <div className='xButton'><button onClick={() => handleDelete(currentProduct.id)}>x</button></div>
                <div className='PicDiv'><img src={currentProduct.imageUrl} className='Pics'/></div>
                <h1>{currentProduct.name}</h1>
                <h2>$ {currentProduct.price}</h2>
                <h3>{currentProduct.description}</h3>
            </div> */}

            <Card sx={{ maxWidth: 345 }}>
            <CardActions>
                <Button size="small" onClick={() => handleDelete(currentProduct.id)}>X</Button>
            </CardActions>
            <CardMedia
                component="img"
                height="140"
                image={currentProduct.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {currentProduct.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                $ {currentProduct.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {currentProduct.description}
                </Typography>
            </CardContent>
            </Card>
        </li>
    );
};

export default ProductItem;

