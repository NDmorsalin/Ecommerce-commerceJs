import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart, NavBar, Products } from './Components';
import { commerce } from './lib/Commerce/Commerce';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    setLoading(false);
  };
  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart((await item).cart);
  };

  const handleUpdateCart = async (productId, quantity) => {
    const item = commerce.cart.update(productId, { quantity: quantity });
    console.log({ productId, quantity });
    setCart((await item).cart);
  };

  const handleRemoveCart = async (productId, quantity) => {
    const item = commerce.cart.remove(productId);
    setCart((await item).cart);
  };

  const handleEmptyCart = async (productId, quantity) => {
    const item = commerce.cart.empty();
    setCart((await item).cart);
  };

  return (
    <>
      <NavBar totalItems={cart.total_items} />
      <Routes className="App">
        <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              isLoading={isLoading}
              handleUpdateCart={handleUpdateCart}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
