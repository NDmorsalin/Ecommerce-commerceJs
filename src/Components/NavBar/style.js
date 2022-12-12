import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  title: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center'
  },
  logo: {
    marginRight: '10px',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%'
  },
  grow: {
    flexGrow: 1
  },
  badge: {}
}));
