import { Container, Grid } from '@mui/material';
import Product from './Product/Product';
import useStyle from './style';

/* const products = [
  {
    id: 1,
    name: 'Tomato',
    description: 'Fresh tomato comes from village',
    price: 50,
    image: tomato
  },
  {
    id: 1,
    name: 'Shoe',
    description: 'Fresh tomato comes from village',
    price: 50,
    image: shoe
  },
  {
    id: 1,
    name: 'Potato',
    description: 'Fresh tomato comes from village',
    price: 50,
    image: potato
  }
]; */
function Products({ products, onAddToCart }) {
  const classes = useStyle();
  return (
    <main>
      <Container>
        <div className={classes.toolBar} />
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default Products;
