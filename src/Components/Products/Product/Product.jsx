import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { FaShoppingBag } from 'react-icons/fa';
import useStyle from './style';

function Product({ product, onAddToCart }) {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardMedia image={product?.image?.url} title={product.name} className={classes.cardMedia} />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
          <FaShoppingBag />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
