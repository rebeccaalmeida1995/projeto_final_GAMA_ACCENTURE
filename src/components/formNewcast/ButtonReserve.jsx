import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
 const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button className={classes.root} style={{ marginTop: '10px'}, {marginLeft: '10px'}} variant="contained" color="primary">
          Salvar
        </Button>
      </ThemeProvider>
    </div>
  );
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#906cda',
    },
  },
});