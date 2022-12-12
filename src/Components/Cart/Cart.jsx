/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Item from './item/Item';
import useStyle from './item/style';

function Cart({ cart, isLoading, handleUpdateCart, handleRemoveCart, handleEmptyCart }) {
  const classes = useStyle();

  function EmptyCart() {
    return (
      <Typography variant="subtitle1" m={2}>
        You have not added any items in your cart.
        <Link to="/">please add something!</Link>
      </Typography>
    );
  }

  function FillCart() {
    return (
      <>
        <Grid container spacing={2}>
          {cart.line_items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onUpdateCart={handleUpdateCart}
              onRemoveCart={handleRemoveCart}
            />
          ))}
        </Grid>
        <div className={classes.cartDetails}>
          <Typography variant="h4"> Sub Total = {cart.subtotal.formatted_with_symbol}</Typography>
          <div className={classes.cartButtons}>
            <Button
              type="button"
              variant="contained"
              size="large"
              className={classes.emptyCart}
              color="secondary"
              onClick={handleEmptyCart}>
              Empty Cart
            </Button>
            <Button
              type="button"
              variant="contained"
              size="large"
              className={classes.checkout}
              color="primary">
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <Container>
      <div className={classes.toolBar} />
      <Typography variant="h4" align="center">
        Your ShoppingCart
      </Typography>

      {isLoading ? 'Loading' : cart.line_items.length ? <FillCart /> : <EmptyCart />}
    </Container>
  );
}

export default Cart;
