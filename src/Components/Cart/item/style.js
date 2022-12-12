import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  toolBar: {
    height: '75px'
  },
  cartDetails: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  cartButtons: {
    display: 'flex',
    gap: '.5rem'
  },
  cartMedia: {
    height: '256px'
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
