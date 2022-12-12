import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%'
  },
  cardMedia: {
    height: '0',
    paddingTop: '56.25%' // 16:9
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));
