import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from './Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Airline"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={0}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
