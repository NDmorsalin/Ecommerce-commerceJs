import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import useStyle from './style';

function Item({ item, onUpdateCart, onRemoveCart }) {
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia image={item.image.url} className={classes.cartMedia} />
        <CardContent className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <div className={classes.cartButtons}>
            <Button
              type="button"
              size="small"
              onClick={() => onUpdateCart(item.id, item.quantity - 1)}>
              -
            </Button>
            <Typography variant="body1" gutterBottom>
              {item.quantity}
            </Typography>
            <Button
              type="button"
              size="small"
              onClick={() => onUpdateCart(item.id, item.quantity + 1)}>
              +
            </Button>
          </div>
          <Button
            type="button"
            variant="contained"
            size="medium"
            color="secondary"
            onClick={() => onRemoveCart(item.id)}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
