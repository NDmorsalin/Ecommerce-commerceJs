import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/img/logo.jpg';
import useStyle from './style';

function NavBar({ totalItems }) {
  const classes = useStyle();
  return (
    <AppBar className={classes.appBar} color="inherit" position="fixed">
      <Toolbar>
        <NavLink to="/" style={{ textDecoration: 'none', color: '#000' }}>
          <Typography variant="h4" className={classes.title}>
            <img src={logo} alt="" className={classes.logo} />
            Ndm Exclusive shop
          </Typography>
        </NavLink>

        <div className={classes.grow} />
        <div className={classes.button}>
          <NavLink to="cart">
            <IconButton aria-label="Show Cart Items">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
